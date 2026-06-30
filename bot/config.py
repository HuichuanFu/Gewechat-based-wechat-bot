"""
配置加载器 - 从 config.yaml 加载并提供类型安全的配置访问。

支持:
- YAML 配置文件加载 (PyYAML)
- 环境变量覆盖敏感值 (如 CHATBOT_API_KEY)
- 类型安全的 dataclass 访问
- 相对路径自动解析为绝对路径
- 单例模式全局访问

Usage:
    from bot.config import get_config

    config = get_config()            # 首次调用加载默认路径
    config = get_config("other.yaml") # 指定自定义路径
    print(config.ai.api_key)
"""

from __future__ import annotations

import os
import threading
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any

import yaml
from loguru import logger


# ---------------------------------------------------------------------------
# 项目根目录 (config.yaml 所在目录)
# ---------------------------------------------------------------------------
_PROJECT_ROOT = Path(__file__).resolve().parent.parent


# ---------------------------------------------------------------------------
# 自定义异常
# ---------------------------------------------------------------------------
class ConfigLoadError(Exception):
    """配置文件加载失败时抛出的异常。"""


class ConfigValidationError(Exception):
    """配置值不合法时抛出的异常。"""


# ---------------------------------------------------------------------------
# 配置段 dataclasses
# ---------------------------------------------------------------------------
@dataclass(frozen=True)
class AIConfig:
    """AI 模型调用相关配置 (OpenAI 兼容格式)。"""

    api_base: str = "https://api.openai.com/v1"
    api_key: str = ""
    model: str = "gpt-4o"
    max_tokens: int = 2048
    temperature: float = 0.7
    autonomous_interval_minutes: int = 60


@dataclass(frozen=True)
class WeChatConfig:
    """微信连接相关配置（Gewechat）。"""

    base_url: str = "http://127.0.0.1:2531/v2/api"
    token: str = ""
    app_id: str = ""
    webhook_host: str = "http://127.0.0.1:8000"
    webhook_port: int = 8000

    # 群聊白名单正则（留空则不响应群消息，填 .* 则响应所有群）
    group_whitelist: str = ""
    # 群聊中是否仅响应 @机器人 的消息
    group_at_only: bool = True


@dataclass(frozen=True)
class MemoryConfig:
    """对话记忆持久化配置。"""

    max_history: int = 50
    db_path: str = "data/chat_history.db"


@dataclass(frozen=True)
class PersonaRefConfig:
    """性格设定文件引用配置。"""

    file: str = "persona.md"


@dataclass(frozen=True)
class WebConfig:
    """Web 管理面板配置。"""

    host: str = "127.0.0.1"
    port: int = 8080


@dataclass(frozen=True)
class LoggingConfig:
    """日志配置。"""

    level: str = "INFO"
    file: str = "logs/bot.log"


@dataclass(frozen=True)
class BotConfig:
    """顶层配置，聚合所有配置段。

    所有路径字段在加载时已解析为相对于项目根目录的绝对路径。
    """

    ai: AIConfig = field(default_factory=AIConfig)
    wechat: WeChatConfig = field(default_factory=WeChatConfig)
    whitelist: list[str] = field(default_factory=list)
    memory: MemoryConfig = field(default_factory=MemoryConfig)
    persona: PersonaRefConfig = field(default_factory=PersonaRefConfig)
    web: WebConfig = field(default_factory=WebConfig)
    logging: LoggingConfig = field(default_factory=LoggingConfig)

    # 项目根目录 (便于其他模块引用)
    project_root: Path = _PROJECT_ROOT


# ---------------------------------------------------------------------------
# 环境变量覆盖映射
# 格式: 环境变量名 -> (配置段, 字段名, 值类型转换函数)
# ---------------------------------------------------------------------------
_ENV_OVERRIDES: dict[str, tuple[str, str, type]] = {
    "CHATBOT_API_KEY": ("ai", "api_key", str),
    "CHATBOT_API_BASE": ("ai", "api_base", str),
    "CHATBOT_MODEL": ("ai", "model", str),
    "CHATBOT_LOG_LEVEL": ("logging", "level", str),
    "CHATBOT_WEB_PORT": ("web", "port", int),
}


# ---------------------------------------------------------------------------
# 内部辅助函数
# ---------------------------------------------------------------------------
def _resolve_path(raw: str, root: Path) -> str:
    """将相对路径解析为基于项目根目录的绝对路径字符串。

    如果路径已经是绝对路径则原样返回。

    Args:
        raw: 原始路径字符串。
        root: 项目根目录。

    Returns:
        解析后的绝对路径字符串。
    """
    p = Path(raw)
    if p.is_absolute():
        return str(p)
    return str(root / p)


def _build_section(section_cls: type, raw: dict[str, Any] | None) -> Any:
    """从原始字典构建某个配置段 dataclass 实例。

    只保留 dataclass 定义中存在的字段，忽略 YAML 中多余的键。

    Args:
        section_cls: 目标 dataclass 类型。
        raw: 从 YAML 解析出的原始字典，可为 None。

    Returns:
        构建好的 dataclass 实例。
    """
    if not raw:
        return section_cls()

    # 仅取 dataclass 中声明过的字段
    valid_keys = {f.name for f in section_cls.__dataclass_fields__.values()}
    filtered = {k: v for k, v in raw.items() if k in valid_keys}
    return section_cls(**filtered)


def _apply_env_overrides(sections: dict[str, Any]) -> None:
    """就地将环境变量覆盖到已解析的配置段字典中。

    Args:
        sections: 配置段名称 -> 对应的原始字典。
    """
    for env_var, (section_name, field_name, cast_fn) in _ENV_OVERRIDES.items():
        value = os.environ.get(env_var)
        if value is None:
            continue

        try:
            casted = cast_fn(value)
        except (ValueError, TypeError) as exc:
            logger.warning(
                "环境变量 {} 的值 '{}' 无法转换为 {}: {}",
                env_var,
                value,
                cast_fn.__name__,
                exc,
            )
            continue

        sections.setdefault(section_name, {})[field_name] = casted
        logger.info("环境变量 {} 已覆盖配置 {}.{}", env_var, section_name, field_name)


def _resolve_all_paths(sections: dict[str, Any], root: Path) -> None:
    """就地解析所有包含文件路径的配置值为绝对路径。

    Args:
        sections: 配置段名称 -> 对应的原始字典。
        root: 项目根目录。
    """
    # (配置段, 字段名) 列表
    path_fields = [
        ("memory", "db_path"),
        ("persona", "file"),
        ("logging", "file"),
    ]
    for section_name, field_name in path_fields:
        sec = sections.get(section_name)
        if sec and field_name in sec:
            sec[field_name] = _resolve_path(sec[field_name], root)


def _validate_config(config: BotConfig) -> None:
    """对关键配置值进行基础校验。

    Args:
        config: 已构建的 BotConfig 实例。

    Raises:
        ConfigValidationError: 配置值不合法时。
    """
    if not config.ai.api_key:
        logger.warning(
            "AI API 密钥未设置 — 请在 config.yaml 或环境变量 CHATBOT_API_KEY 中配置"
        )

    if not 0.0 <= config.ai.temperature <= 2.0:
        raise ConfigValidationError(
            f"ai.temperature 必须在 0.0 ~ 2.0 之间，当前值: {config.ai.temperature}"
        )

    if config.ai.max_tokens <= 0:
        raise ConfigValidationError(
            f"ai.max_tokens 必须为正整数，当前值: {config.ai.max_tokens}"
        )

    if config.memory.max_history <= 0:
        raise ConfigValidationError(
            f"memory.max_history 必须为正整数，当前值: {config.memory.max_history}"
        )


# ---------------------------------------------------------------------------
# 核心加载函数
# ---------------------------------------------------------------------------
def load_config(
    config_path: str | Path | None = None,
    *,
    project_root: Path = _PROJECT_ROOT,
) -> BotConfig:
    """从 YAML 文件加载配置并构建 BotConfig 实例。

    加载顺序:
    1. 读取 YAML 文件中的原始值
    2. 应用环境变量覆盖
    3. 解析相对路径为绝对路径
    4. 构建类型安全的 dataclass 实例
    5. 执行基础校验

    Args:
        config_path: YAML 配置文件路径。为 None 时使用项目根目录下的 config.yaml。
        project_root: 项目根目录，用于解析相对路径。

    Returns:
        构建好的 BotConfig 实例。

    Raises:
        ConfigLoadError: 文件不存在或 YAML 解析失败时。
        ConfigValidationError: 配置值不合法时。
    """
    if config_path is None:
        config_path = project_root / "config.yaml"
    else:
        config_path = Path(config_path)

    logger.info("正在加载配置文件: {}", config_path)

    if not config_path.is_file():
        raise ConfigLoadError(f"配置文件不存在: {config_path}")

    try:
        with open(config_path, "r", encoding="utf-8") as fh:
            raw: dict[str, Any] = yaml.safe_load(fh) or {}
    except yaml.YAMLError as exc:
        raise ConfigLoadError(f"YAML 解析失败: {exc}") from exc

    # 将顶层键提取为可变字典以便就地修改
    sections: dict[str, Any] = {
        "ai": dict(raw.get("ai") or {}),
        "wechat": dict(raw.get("wechat") or {}),
        "memory": dict(raw.get("memory") or {}),
        "persona": dict(raw.get("persona") or {}),
        "web": dict(raw.get("web") or {}),
        "logging": dict(raw.get("logging") or {}),
    }
    whitelist_raw: list[str] = list(raw.get("whitelist") or [])

    # 环境变量覆盖 (在路径解析之前，以便环境变量中的路径也能被解析)
    _apply_env_overrides(sections)

    # 路径解析
    _resolve_all_paths(sections, project_root)

    # 构建 dataclasses
    config = BotConfig(
        ai=_build_section(AIConfig, sections["ai"]),
        wechat=_build_section(WeChatConfig, sections["wechat"]),
        whitelist=whitelist_raw,
        memory=_build_section(MemoryConfig, sections["memory"]),
        persona=_build_section(PersonaRefConfig, sections["persona"]),
        web=_build_section(WebConfig, sections["web"]),
        logging=_build_section(LoggingConfig, sections["logging"]),
        project_root=project_root,
    )

    _validate_config(config)

    logger.info("配置加载完成 — 模型: {}, 日志级别: {}", config.ai.model, config.logging.level)
    return config


# ---------------------------------------------------------------------------
# 单例模式 (线程安全)
# ---------------------------------------------------------------------------
_lock = threading.Lock()
_instance: BotConfig | None = None


def get_config(config_path: str | Path | None = None) -> BotConfig:
    """获取全局唯一的 BotConfig 实例 (单例模式)。

    首次调用时加载配置文件并缓存；后续调用直接返回缓存实例。
    传入不同的 config_path 不会触发重新加载 — 如需刷新请用 reload_config()。

    Args:
        config_path: YAML 配置文件路径 (仅首次调用生效)。

    Returns:
        全局 BotConfig 实例。
    """
    global _instance
    if _instance is not None:
        return _instance

    with _lock:
        # Double-check locking
        if _instance is not None:
            return _instance
        _instance = load_config(config_path)
        return _instance


def reload_config(config_path: str | Path | None = None) -> BotConfig:
    """强制重新加载配置文件并更新全局单例。

    Args:
        config_path: YAML 配置文件路径。为 None 时使用默认路径。

    Returns:
        重新加载后的 BotConfig 实例。
    """
    global _instance
    with _lock:
        logger.info("正在重新加载配置...")
        _instance = load_config(config_path)
        return _instance
