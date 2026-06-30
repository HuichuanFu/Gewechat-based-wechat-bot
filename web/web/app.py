"""
Web 管理面板 - FastAPI 后端
============================
提供 REST API 接口和静态文件服务。
"""

import os
from typing import Optional

from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel
from loguru import logger
import yaml

from bot.config import reload_config


# ==========================================
# Pydantic Models
# ==========================================

class PersonaUpdate(BaseModel):
    content: str


class ConfigUpdate(BaseModel):
    ai: Optional[dict] = None
    whitelist: Optional[list] = None
    memory: Optional[dict] = None


# ==========================================
# App Factory
# ==========================================

def create_app(chatbot=None) -> FastAPI:
    """
    创建 FastAPI 应用实例。

    Args:
        chatbot: ChatBot 实例，用于访问各模块的状态和数据。
    """
    app = FastAPI(title="ChatBot 管理面板", version="1.0.0")

    # 静态文件
    static_dir = os.path.join(os.path.dirname(__file__), "static")
    app.mount("/static", StaticFiles(directory=static_dir), name="static")

    # ------------------------------------------
    # 首页
    # ------------------------------------------
    @app.get("/")
    async def index():
        """返回管理面板首页"""
        return FileResponse(os.path.join(static_dir, "index.html"))

    # ------------------------------------------
    # Status API
    # ------------------------------------------
    @app.get("/api/status")
    async def get_status():
        """获取机器人运行状态"""
        if not chatbot:
            return {"running": False, "error": "ChatBot not initialized"}

        status = await chatbot.get_status()
        return status

    # ------------------------------------------
    # Conversations API
    # ------------------------------------------
    @app.get("/api/conversations")
    async def get_conversations():
        """获取所有对话用户列表"""
        if not chatbot or not chatbot.memory:
            return {"users": []}

        users = await chatbot.memory.get_all_users()
        return {"users": users}

    @app.get("/api/conversations/{user_id}")
    async def get_conversation(user_id: str):
        """获取特定用户的聊天记录"""
        if not chatbot or not chatbot.memory:
            raise HTTPException(status_code=503, detail="Memory not initialized")

        messages = await chatbot.memory.get_history(user_id)
        return {"user_id": user_id, "messages": messages}

    @app.delete("/api/conversations/{user_id}")
    async def delete_conversation(user_id: str):
        """清空特定用户的聊天记录"""
        if not chatbot or not chatbot.memory:
            raise HTTPException(status_code=503, detail="Memory not initialized")

        await chatbot.memory.clear_history(user_id)
        logger.info(f"Cleared chat history for user: {user_id}")
        return {"status": "ok"}

    # ------------------------------------------
    # Persona API
    # ------------------------------------------
    @app.get("/api/persona")
    async def get_persona():
        """获取当前性格设定文件内容"""
        if not chatbot:
            raise HTTPException(status_code=503, detail="ChatBot not initialized")

        persona_file = chatbot.config.persona.file
        try:
            with open(persona_file, "r", encoding="utf-8") as f:
                content = f.read()
            return {"content": content, "file": persona_file}
        except FileNotFoundError:
            return {"content": "", "file": persona_file}

    @app.put("/api/persona")
    async def update_persona(data: PersonaUpdate):
        """更新性格设定文件"""
        if not chatbot:
            raise HTTPException(status_code=503, detail="ChatBot not initialized")

        persona_file = chatbot.config.persona.file
        try:
            with open(persona_file, "w", encoding="utf-8") as f:
                f.write(data.content)
            # 重新加载性格设定
            await chatbot.reload_persona()
            logger.info("Persona file updated and reloaded")
            return {"status": "ok"}
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))

    @app.post("/api/persona/reload")
    async def reload_persona():
        """重新加载性格设定（不修改文件）"""
        if not chatbot:
            raise HTTPException(status_code=503, detail="ChatBot not initialized")

        try:
            await chatbot.reload_persona()
            logger.info("Persona reloaded")
            return {"status": "ok"}
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))

    # ------------------------------------------
    # Config API
    # ------------------------------------------
    @app.get("/api/config")
    async def get_config():
        """获取当前配置（敏感信息脱敏）"""
        if not chatbot:
            raise HTTPException(status_code=503, detail="ChatBot not initialized")

        cfg = chatbot.config
        # 脱敏 API key
        api_key = cfg.ai.api_key
        if api_key and len(api_key) > 8:
            masked = api_key[:4] + "****" + api_key[-4:]
        else:
            masked = "****" if api_key else ""

        return {
            "ai": {
                "api_base": cfg.ai.api_base,
                "api_key_masked": masked,
                "model": cfg.ai.model,
                "max_tokens": cfg.ai.max_tokens,
                "temperature": cfg.ai.temperature,
            },
            "whitelist": cfg.whitelist,
            "memory": {
                "max_history": cfg.memory.max_history,
            },
        }

    @app.put("/api/config")
    async def update_config(data: ConfigUpdate):
        """更新配置"""
        if not chatbot:
            raise HTTPException(status_code=503, detail="ChatBot not initialized")

        try:
            config_path = chatbot.config.project_root / "config.yaml"
            with open(config_path, "r", encoding="utf-8") as f:
                raw_config = yaml.safe_load(f) or {}

            # 更新内存中的配置
            if data.ai:
                if "ai" not in raw_config: raw_config["ai"] = {}
                if "api_base" in data.ai: raw_config["ai"]["api_base"] = data.ai["api_base"]
                if "api_key" in data.ai: raw_config["ai"]["api_key"] = data.ai["api_key"]
                if "model" in data.ai: raw_config["ai"]["model"] = data.ai["model"]
                if "max_tokens" in data.ai: raw_config["ai"]["max_tokens"] = data.ai["max_tokens"]
                if "temperature" in data.ai: raw_config["ai"]["temperature"] = data.ai["temperature"]

            if data.whitelist is not None:
                raw_config["whitelist"] = data.whitelist

            if data.memory:
                if "memory" not in raw_config: raw_config["memory"] = {}
                if "max_history" in data.memory: raw_config["memory"]["max_history"] = data.memory["max_history"]

            # 保存到文件
            with open(config_path, "w", encoding="utf-8") as f:
                yaml.dump(raw_config, f, allow_unicode=True, sort_keys=False)
            
            # 重新加载配置
            chatbot.config = reload_config()
            chatbot.reinit_ai_client()
            
            logger.info("Configuration updated and saved")
            return {"status": "ok"}
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))

    return app
