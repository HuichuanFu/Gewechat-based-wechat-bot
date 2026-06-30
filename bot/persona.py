"""
性格设定加载器 - 从 Markdown + YAML Frontmatter 文件加载人设配置。

支持:
- python-frontmatter 解析 Markdown 文件
- 从 frontmatter 提取 name / greeting 元数据
- Markdown 正文自动转为 system prompt
- 运行时热重载 (reload_persona)

Usage:
    from bot.persona import load_persona, get_persona, reload_persona

    persona = load_persona("persona.md")
    print(persona.name)           # "小助手"
    print(persona.greeting)       # "你好呀！..."
    print(persona.system_prompt)  # Markdown 正文内容
"""

from __future__ import annotations

import threading
from dataclasses import dataclass
from pathlib import Path

import frontmatter
from loguru import logger


# ---------------------------------------------------------------------------
# 自定义异常
# ---------------------------------------------------------------------------
class PersonaLoadError(Exception):
    """性格设定文件加载失败时抛出的异常。"""


class PersonaValidationError(Exception):
    """性格设定内容不合法时抛出的异常。"""


# ---------------------------------------------------------------------------
# 数据结构
# ---------------------------------------------------------------------------
@dataclass(frozen=True)
class PersonaConfig:
    """解析后的性格设定配置。

    Attributes:
        name: 人设角色名称。
        greeting: 打招呼用语 (用于用户首次对话)。
        system_prompt: 从 Markdown 正文转换而来的系统提示词。
        source_path: 原始文件路径 (便于调试和重载)。
    """

    name: str
    greeting: str
    system_prompt: str
    source_path: str


# ---------------------------------------------------------------------------
# 核心加载函数
# ---------------------------------------------------------------------------
def load_persona(filepath: str | Path) -> PersonaConfig:
    """从 Markdown 文件加载性格设定。

    文件格式要求:
    ```markdown
    ---
    name: "小助手"
    greeting: "你好呀！我是小助手 😊"
    ---

    # 性格设定
    你是一个友善的聊天助手...
    ```

    Args:
        filepath: 性格设定 Markdown 文件路径 (绝对路径或相对路径)。

    Returns:
        解析后的 PersonaConfig 实例。

    Raises:
        PersonaLoadError: 文件不存在或解析失败时。
        PersonaValidationError: 必填字段缺失或内容为空时。
    """
    path = Path(filepath)
    logger.info("正在加载性格设定文件: {}", path)

    if not path.is_file():
        raise PersonaLoadError(f"性格设定文件不存在: {path}")

    # --- 解析文件 ---
    try:
        post = frontmatter.load(str(path), encoding="utf-8")
    except Exception as exc:
        raise PersonaLoadError(
            f"性格设定文件解析失败 ({path}): {exc}"
        ) from exc

    # --- 提取 frontmatter 元数据 ---
    metadata: dict = post.metadata  # type: ignore[assignment]

    name: str = str(metadata.get("name", "")).strip()
    greeting: str = str(metadata.get("greeting", "")).strip()

    # --- 提取正文作为 system prompt ---
    system_prompt: str = post.content.strip()

    # --- 校验 ---
    if not name:
        raise PersonaValidationError(
            f"性格设定文件缺少必填字段 'name' (frontmatter): {path}"
        )

    if not system_prompt:
        raise PersonaValidationError(
            f"性格设定文件正文内容为空，无法生成 system prompt: {path}"
        )

    if not greeting:
        logger.warning(
            "性格设定文件未设置 'greeting'，将使用默认打招呼语 — {}", path
        )
        greeting = f"你好！我是{name}，有什么可以帮你的吗？"

    persona = PersonaConfig(
        name=name,
        greeting=greeting,
        system_prompt=system_prompt,
        source_path=str(path.resolve()),
    )

    logger.info(
        "性格设定加载完成 — 名称: {}, system_prompt 长度: {} 字符",
        persona.name,
        len(persona.system_prompt),
    )
    return persona


# ---------------------------------------------------------------------------
# 单例 + 运行时热重载
# ---------------------------------------------------------------------------
_lock = threading.Lock()
_instance: PersonaConfig | None = None
_current_path: str | Path | None = None


def get_persona(filepath: str | Path | None = None) -> PersonaConfig:
    """获取全局唯一的 PersonaConfig 实例 (单例模式)。

    首次调用时加载文件并缓存；后续调用直接返回缓存实例。

    Args:
        filepath: 性格设定文件路径 (仅首次调用生效)。

    Returns:
        全局 PersonaConfig 实例。

    Raises:
        PersonaLoadError: 文件路径未提供且从未初始化过时。
    """
    global _instance, _current_path
    if _instance is not None:
        return _instance

    with _lock:
        # Double-check locking
        if _instance is not None:
            return _instance

        if filepath is None:
            raise PersonaLoadError(
                "首次调用 get_persona() 必须提供 filepath 参数"
            )

        _current_path = filepath
        _instance = load_persona(filepath)
        return _instance


def reload_persona(filepath: str | Path | None = None) -> PersonaConfig:
    """强制重新加载性格设定文件并更新全局单例。

    可在运行时修改 persona.md 后调用此函数实现热重载。

    Args:
        filepath: 性格设定文件路径。为 None 时复用上次加载的路径。

    Returns:
        重新加载后的 PersonaConfig 实例。

    Raises:
        PersonaLoadError: 未提供路径且从未初始化过时。
    """
    global _instance, _current_path

    with _lock:
        target = filepath or _current_path
        if target is None:
            raise PersonaLoadError(
                "reload_persona() 缺少文件路径 — 请提供 filepath 参数或先调用 get_persona()"
            )

        logger.info("正在重新加载性格设定...")
        _current_path = target
        _instance = load_persona(target)
        return _instance
