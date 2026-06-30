"""
Core chatbot logic orchestrating memory, AI client, persona, and WeChat.
"""

import asyncio
import base64
import re
from datetime import datetime
from typing import Any
from loguru import logger

from bot.config import BotConfig
from bot.persona import PersonaConfig, get_persona, reload_persona
from bot.wechat import WeChatService
from bot.ai_client import AIClient
from bot.memory import MemoryManager
from bot.skills import TOOLS_SCHEMA, execute_tool

class ChatBot:
    """Orchestrates all components of the WeChat chatbot."""
    
    def __init__(self, config: BotConfig):
        self.config = config
        self.memory: MemoryManager | None = None
        self.ai_client: AIClient | None = None
        self.persona: PersonaConfig | None = None
        self.wechat: WeChatService | None = None
        self._loop: asyncio.AbstractEventLoop | None = None
        self._startup_time = datetime.now()
        self._autonomous_task: asyncio.Task | None = None

    async def initialize(self) -> None:
        """Initialize all components."""
        logger.info("Initializing ChatBot components...")
        self._loop = asyncio.get_running_loop()
        
        # Memory
        self.memory = MemoryManager(db_path=self.config.memory.db_path, max_history=self.config.memory.max_history)
        await self.memory.init_db()
        
        # AI Client
        self.reinit_ai_client()
        
        # Persona
        self.persona = get_persona(self.config.persona.file)
        
        # WeChat (WeChatFerry — no credentials_file needed)
        self.wechat = WeChatService()
        logger.info("ChatBot initialization complete.")

    def reinit_ai_client(self) -> None:
        """Reinitialize AI client (useful when config changes)."""
        self.ai_client = AIClient(
            api_base=self.config.ai.api_base,
            api_key=self.config.ai.api_key,
            model=self.config.ai.model,
            max_tokens=self.config.ai.max_tokens,
            temperature=self.config.ai.temperature,
        )

    def _sync_message_handler(self, msg: dict[str, Any]) -> None:
        """Synchronous callback from WeChat thread. Schedules the async handler."""
        if self._loop and not self._loop.is_closed():
            asyncio.run_coroutine_threadsafe(self.handle_message(msg), self._loop)
        else:
            logger.error("Event loop is not running. Dropping message.")

    def start(self) -> None:
        """Start the WeChat bot."""
        if not self.wechat:
            logger.error("Cannot start: ChatBot not initialized")
            return
        logger.info("Starting ChatBot WeChat listener...")
        self.wechat.start(self._sync_message_handler)
        
        # Start the autonomous loop
        if self._loop:
            self._autonomous_task = self._loop.create_task(self.autonomous_loop())

    def stop(self) -> None:
        """Stop the WeChat bot."""
        if self._autonomous_task:
            self._autonomous_task.cancel()
        if self.wechat:
            self.wechat.stop()
        logger.info("ChatBot stopped.")

    async def reload_persona(self) -> None:
        """Reload the persona configuration."""
        self.persona = reload_persona(self.config.persona.file)
        
    async def _execute_chat_with_tools(self, messages: list[dict], system_prompt: str, image_base64: str | None = None) -> str:
        """Core tool-calling loop. Executes tools and feeds results back to the model."""
        if not self.ai_client:
            return "AI Client not initialized."
            
        current_messages = list(messages)
        
        # We allow up to 5 tool-calling iterations
        for _ in range(5):
            if image_base64:
                msg_obj = await self.ai_client.chat_with_image(current_messages, image_base64, system_prompt, tools=TOOLS_SCHEMA)
                image_base64 = None # Only send image in the first request
            else:
                msg_obj = await self.ai_client.chat(current_messages, system_prompt, tools=TOOLS_SCHEMA)
                
            reply_text = msg_obj.content or ""
            
            # Append assistant message to context
            assist_msg = {"role": "assistant"}
            if msg_obj.content:
                assist_msg["content"] = msg_obj.content
            if msg_obj.tool_calls:
                tool_calls_dict = []
                for tc in msg_obj.tool_calls:
                    tool_calls_dict.append({
                        "id": tc.id,
                        "type": tc.type,
                        "function": {
                            "name": tc.function.name,
                            "arguments": tc.function.arguments
                        }
                    })
                assist_msg["tool_calls"] = tool_calls_dict
            
            current_messages.append(assist_msg)
            
            if not msg_obj.tool_calls:
                # No more tools to call, we are done
                return reply_text
                
            # Execute tools
            for tool_call in msg_obj.tool_calls:
                func_name = tool_call.function.name
                func_args = tool_call.function.arguments
                logger.info(f"AI requested tool call: {func_name}")
                
                result = execute_tool(func_name, func_args)
                
                # Append tool result
                current_messages.append({
                    "role": "tool",
                    "tool_call_id": tool_call.id,
                    "name": func_name,
                    "content": result
                })
                
        return "Tool execution limit reached. Sorry, I couldn't complete the task."

    async def handle_message(self, msg: dict[str, Any]) -> None:
        """Main message processing pipeline."""
        user_id = msg.get("user_id")
        if not user_id:
            return

        is_group = msg.get("is_group", False)
        is_at_me = msg.get("is_at_me", False)
        room_id = msg.get("room_id", "")

        # --- Group chat routing ---
        if is_group:
            group_whitelist = self.config.wechat.group_whitelist
            # If no group whitelist is configured, ignore all group messages
            if not group_whitelist:
                return
            # If group_at_only is True, only respond when @-mentioned
            if self.config.wechat.group_at_only and not is_at_me:
                return

        # 1. Check whitelist (per-user)
        if self.config.whitelist and user_id not in self.config.whitelist:
            logger.debug(f"User {user_id} not in whitelist, ignoring message.")
            return

        # Determine the reply target: group or private
        reply_target = room_id if is_group else user_id
        # Use a composite key for memory so group and private chats are separate
        memory_key = f"{room_id}:{user_id}" if is_group else user_id

        # 2. Load conversation history
        history = await self.memory.get_history(memory_key) if self.memory else []

        # 3. Build messages array
        messages = []
        for h in history:
            messages.append({"role": h["role"], "content": h["content"]})

        system_prompt = self.persona.system_prompt if self.persona else ""
        text_content = msg.get("text", "")
        msg_type = msg.get("type", "text")

        # Save user message to memory
        if self.memory:
            await self.memory.add_message(memory_key, "user", text_content, msg_type)

        # Add current user message for AI
        messages.append({"role": "user", "content": text_content})

        try:
            # 4. Call AI model with Tools
            image_base64 = None
            if msg_type == "image" and msg.get("image_data"):
                image_base64 = base64.b64encode(msg["image_data"]).decode("utf-8")

            reply_text = await self._execute_chat_with_tools(messages, system_prompt, image_base64)

            # 5. Save bot reply to memory
            if self.memory and reply_text.strip():
                await self.memory.add_message(memory_key, "assistant", reply_text, "text")

            # 6. Send reply via WeChat
            if self.wechat and reply_text.strip():
                if is_group:
                    # In group, @ the sender so they know it's a reply to them
                    self.wechat.send_text(reply_target, f"@{user_id} {reply_text}", aters=user_id)
                else:
                    self.wechat.send_text(reply_target, reply_text)

        except Exception as e:
            logger.error(f"Error handling message from {user_id}: {e}")
            if self.wechat:
                self.wechat.send_text(reply_target, "抱歉，我遇到了一些问题，暂时无法回复。")
                
    async def autonomous_loop(self) -> None:
        """Background loop that periodically wakes up the AI to send proactive messages."""
        logger.info("Autonomous loop started.")
        # Wait a bit before first execution
        await asyncio.sleep(10)
        
        while True:
            try:
                # Interval is configured via config, fallback to 60 min if missing
                interval_minutes = 60
                if hasattr(self.config.ai, "autonomous_interval_minutes"):
                    interval_minutes = self.config.ai.autonomous_interval_minutes
                
                logger.info(f"Autonomous loop waking up. Next check in {interval_minutes} minutes.")
                
                if self.memory and self.wechat and self.wechat.is_running:
                    users = await self.memory.get_all_users()
                    for user_id in users:
                        history = await self.memory.get_history(user_id, limit=20)
                        if not history:
                            continue
                            
                        # Build context
                        messages = []
                        for h in history:
                            messages.append({"role": h["role"], "content": h["content"]})
                            
                        # Proactive prompt
                        system_prompt = self.persona.system_prompt if self.persona else ""
                        proactive_prompt = (
                            "SYSTEM INSTRUCTION: You have been woken up by the background autonomous loop. "
                            "Review the recent conversation above. Use your skills (like search_web or get_current_time) "
                            "to see if there is any interesting news, context, or appropriate greeting you'd like to proactively send to the user right now. "
                            "If you decide that there is no need to send a message at this exact moment, you MUST return an EXACTLY EMPTY string (\"\"). "
                            "Do not say 'I don't need to send a message' or explain your reasoning. Just output nothing."
                        )
                        messages.append({"role": "system", "content": proactive_prompt})
                        
                        logger.info(f"Evaluating proactive message for user: {user_id}")
                        reply_text = await self._execute_chat_with_tools(messages, system_prompt)
                        
                        if reply_text and reply_text.strip():
                            logger.info(f"Sending proactive message to {user_id}: {reply_text}")
                            await self.memory.add_message(user_id, "assistant", reply_text, "text")
                            self.wechat.send_text(user_id, reply_text)
                            
                        # Add small delay between users
                        await asyncio.sleep(2)
                        
            except asyncio.CancelledError:
                logger.info("Autonomous loop cancelled.")
                break
            except Exception as e:
                logger.error(f"Error in autonomous loop: {e}")
                
            await asyncio.sleep(interval_minutes * 60)

    async def get_status(self) -> dict[str, Any]:
        """Return status info for the dashboard."""
        memory_stats = {}
        if self.memory:
            memory_stats = await self.memory.get_stats()
            
        uptime = datetime.now() - self._startup_time
        hours, remainder = divmod(int(uptime.total_seconds()), 3600)
        minutes, seconds = divmod(remainder, 60)
        uptime_str = f"{hours}h {minutes}m {seconds}s"
        
        return {
            "running": self.wechat.is_running if self.wechat else False,
            "persona_name": self.persona.name if self.persona else "",
            "model": self.ai_client.model if self.ai_client else "",
            "api_base": self.config.ai.api_base,
            "memory_stats": memory_stats,
            "ai_stats": self.ai_client.get_stats() if self.ai_client else {},
            "uptime": uptime_str,
        }
