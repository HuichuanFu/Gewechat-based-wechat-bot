"""
Program entry point. Sets up logging, initializes ChatBot, and runs FastAPI via uvicorn.

WeChatFerry edition — requires WeChat PC (supported version) to be running.
"""

import asyncio
import signal
import sys
from loguru import logger
import uvicorn

from bot.config import get_config
from bot.core import ChatBot
from web.app import create_app

async def main():
    # Load config
    try:
        config = get_config()
    except Exception as e:
        print(f"Failed to load config: {e}")
        sys.exit(1)
    
    # Configure logger
    logger.add(config.logging.file, level=config.logging.level, rotation="10 MB")
    logger.info("="*50)
    logger.info("ChatBot Starting... (WeChatFerry edition)")
    logger.info("Make sure WeChat PC (supported version) is running and logged in!")
    
    # Initialize ChatBot
    chatbot = ChatBot(config)
    await chatbot.initialize()
    
    # Create FastAPI app
    app = create_app(chatbot)
    
    # Start WeChat bot (in background thread)
    chatbot.start()
    
    # Start web server using uvicorn
    config_uvicorn = uvicorn.Config(
        app=app,
        host=config.web.host,
        port=config.web.port,
        log_level=config.logging.level.lower()
    )
    server = uvicorn.Server(config_uvicorn)
    
    # Custom shutdown hook
    original_handler = signal.getsignal(signal.SIGINT)
    
    def handle_sigint(sig, frame):
        logger.info("Received SIGINT, shutting down...")
        chatbot.stop()
        if callable(original_handler):
            original_handler(sig, frame)
        else:
            sys.exit(0)
            
    signal.signal(signal.SIGINT, handle_sigint)
    
    logger.info(f"Starting Web Admin Panel on http://{config.web.host}:{config.web.port}")
    await server.serve()

if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        logger.info("Application exited.")
