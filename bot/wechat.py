"""
WeChat interface layer wrapping the Gewechat Client SDK.

This module provides a WeChatService class that interacts with Gewechat
(iPad protocol gateway), enabling full control over a personal WeChat
account without hooking into the PC desktop client.
"""

import os
import threading
import time
import json
from typing import Optional, Callable, Any
from http.server import HTTPServer, BaseHTTPRequestHandler
from loguru import logger

from gewechat_client import GewechatClient


class WeChatService:
    """WeChat service class wrapping Gewechat for bot messaging."""

    # WeChat message type constants (Gewechat might differ from WCF, adjusting to Gewechat common types)
    MSG_TYPE_TEXT = 1
    MSG_TYPE_IMAGE = 3
    MSG_TYPE_VOICE = 34
    MSG_TYPE_VIDEO = 43
    MSG_TYPE_EMOTION = 47

    def __init__(self, base_url: str, token: str, app_id: str, webhook_host: str, webhook_port: int):
        self.base_url = base_url
        self.token = token
        self.app_id = app_id
        self.webhook_host = webhook_host
        self.webhook_port = webhook_port
        
        self.client: Optional[GewechatClient] = None
        self._is_running = False
        self._server: Optional[HTTPServer] = None
        self._server_thread: Optional[threading.Thread] = None
        
        self._self_wxid: str = ""
        self._image_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), "data", "images")
        os.makedirs(self._image_dir, exist_ok=True)
        
        # This will hold the callback for core.py
        self._message_handler: Optional[Callable[[dict[str, Any]], None]] = None

    @property
    def account_id(self) -> str:
        """Return the logged-in account's wxid."""
        return self._self_wxid

    @property
    def is_running(self) -> bool:
        """Whether the bot is actively receiving messages."""
        return self._is_running

    def start(self, message_handler: Callable[[dict[str, Any]], None]) -> None:
        """Initialize Gewechat client, log in, and start webhook server."""
        if self._is_running:
            return

        self._message_handler = message_handler
        logger.info("Initializing Gewechat (iPad protocol)...")
        
        self.client = GewechatClient(self.base_url, self.token)
        
        # Obtain token if empty
        if not self.token:
            token_resp = self.client.get_token()
            if token_resp.get("ret") == 200:
                self.token = token_resp.get("data")
                self.client.token = self.token
                logger.info(f"Got new Gewechat Token: {self.token}")
            else:
                logger.error(f"Failed to get token: {token_resp}")
                raise RuntimeError("Failed to obtain Gewechat token")

        # Login and get app_id if empty
        if not self.app_id:
            logger.info("No app_id found, generating QR code for login...")
            app_id, error_msg = self.client.login(app_id="")
            if error_msg:
                logger.error(f"Login failed: {error_msg}")
                raise RuntimeError("Gewechat login failed")
            self.app_id = app_id
            
        logger.info(f"Gewechat logged in with AppID: {self.app_id}")
        
        # Get self profile to store self_wxid
        profile_resp = self.client.get_profile(self.app_id)
        if profile_resp.get("ret") == 200:
            self._self_wxid = profile_resp.get("data", {}).get("wxid", "")
            logger.info(f"WeChat logged in as: {self._self_wxid}")

        # Set webhook callback
        webhook_url = f"{self.webhook_host}:{self.webhook_port}/v2/api/callback/collect"
        logger.info(f"Setting webhook callback to {webhook_url}")
        self.client.set_callback(self.token, webhook_url)
        
        # Start webhook server
        self._start_webhook_server()
        self._is_running = True

    def _start_webhook_server(self):
        """Starts a simple HTTP server to receive Gewechat webhooks."""
        service_instance = self
        
        class WebhookHandler(BaseHTTPRequestHandler):
            def do_POST(self):
                content_length = int(self.headers.get('Content-Length', 0))
                post_data = self.rfile.read(content_length)
                self.send_response(200)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                self.wfile.write(b'{"ret":200,"msg":"success"}')
                
                try:
                    payload = json.loads(post_data.decode('utf-8'))
                    # Process the incoming webhook in a separate thread so we don't block
                    threading.Thread(target=service_instance._handle_webhook, args=(payload,), daemon=True).start()
                except Exception as e:
                    logger.error(f"Error parsing webhook payload: {e}")

            def log_message(self, format, *args):
                pass # Suppress default http.server logging

        self._server = HTTPServer(('0.0.0.0', self.webhook_port), WebhookHandler)
        self._server_thread = threading.Thread(target=self._server.serve_forever, daemon=True)
        self._server_thread.start()
        logger.info(f"Webhook server started on port {self.webhook_port}")

    def _handle_webhook(self, payload: dict):
        """Parse Gewechat webhook payload and pass to core message handler."""
        # Gewechat payload structure typically:
        # {"TypeName": "AddMsg", "Appid": "...", "Data": {"FromUserName": "...", "ToUserName": "...", "MsgType": 1, "Content": "...", "PushContent": "..."}}
        
        if payload.get("TypeName") != "AddMsg":
            return
            
        data = payload.get("Data", {})
        if not data:
            return

        from_user = data.get("FromUserName", "")
        to_user = data.get("ToUserName", "")
        msg_type = data.get("MsgType", 0)
        content = data.get("Content", {})
        
        if isinstance(content, dict):
            text_content = content.get("string", "")
        else:
            text_content = str(content)
            
        msg_id = str(data.get("MsgId", ""))

        # Skip messages sent by ourselves
        if from_user == self._self_wxid:
            return
            
        is_group = from_user.endswith("@chatroom")
        
        user_id = from_user
        room_id = from_user if is_group else ""
        
        # If it's a group, the actual sender is sometimes embedded in Content or PushContent, 
        # or we might need to parse Gewechat's specific group format
        # Usually Gewechat prefixes group message text with "wxid_xxxx:\n"
        if is_group and ":\n" in text_content:
            parts = text_content.split(":\n", 1)
            if parts[0].endswith("wxid") or parts[0].isalnum() or "_" in parts[0]:
                user_id = parts[0]
                text_content = parts[1]

        is_at_me = False
        if is_group and self._self_wxid:
            # Check for @ in text or use Gewechat's at list if available
            # Note: A real implementation might parse the XML in Content for accurate at_list
            if "@" in text_content:
                is_at_me = True # Simplified check for now

        # Handle text messages
        if msg_type == self.MSG_TYPE_TEXT:
            if is_group and is_at_me:
                import re
                cleaned = re.sub(r"@\S+\s*", "", text_content).strip()
                text_content = cleaned

            normalized = {
                "user_id": user_id,
                "text": text_content,
                "type": "text",
                "image_data": None,
                "message_id": msg_id,
                "room_id": room_id,
                "is_group": is_group,
                "is_at_me": is_at_me,
            }
            if self._message_handler:
                self._message_handler(normalized)
        else:
            # We log other types for now
            logger.debug(f"Ignored message type {msg_type}")

    def stop(self) -> None:
        """Stop listening and clean up resources."""
        if self._is_running:
            logger.info("Stopping Gewechat bot...")
            self._is_running = False
            
            if self._server:
                self._server.shutdown()
                self._server.server_close()

    def send_text(self, receiver: str, text: str, aters: str = "") -> None:
        if not self.client:
            return
        try:
            self.client.post_text(self.app_id, receiver, text, ats=aters)
            logger.debug(f"Sent text to {receiver}")
        except Exception as e:
            logger.error(f"Failed to send text: {e}")

    def send_image(self, receiver: str, image_path: str) -> None:
        logger.warning("send_image not fully implemented for Gewechat without uploading URL")
        # Gewechat post_image typically takes an img_url, not a local file path directly.
        pass

    def send_emotion(self, receiver: str, emotion_path: str) -> None:
        logger.warning("send_emotion not fully implemented")
        pass

    def send_file(self, receiver: str, file_path: str) -> None:
        logger.warning("send_file not fully implemented")
        pass
