"""
AI model client using an OpenAI-compatible API.

Wraps the ``openai`` Python SDK to provide async chat completions with
automatic retry, multimodal (vision) support, and cumulative token-usage
tracking.
"""

from __future__ import annotations

import asyncio
from typing import Any

from loguru import logger
from openai import AsyncOpenAI, APIConnectionError, APITimeoutError, RateLimitError


# Retry configuration
_MAX_RETRIES: int = 3
_BACKOFF_BASE: float = 1.0  # seconds – first retry waits 1 s, second 2 s, …


class AIClient:
    """Async wrapper around an OpenAI-compatible chat completions endpoint.

    Attributes:
        model: Model identifier forwarded to the API.
        max_tokens: Maximum tokens the model may generate per request.
        temperature: Sampling temperature.
        total_prompt_tokens: Cumulative prompt tokens consumed.
        total_completion_tokens: Cumulative completion tokens consumed.
    """

    def __init__(
        self,
        api_base: str,
        api_key: str,
        model: str,
        max_tokens: int = 2048,
        temperature: float = 0.7,
    ) -> None:
        """Initialise the AI client.

        Args:
            api_base: Base URL of the OpenAI-compatible API
                (e.g. ``"https://api.openai.com/v1"``).
            api_key: API authentication key.
            model: Model name / identifier to use for completions.
            max_tokens: Cap on generated tokens per request.
            temperature: Sampling temperature (0 = deterministic).
        """
        self.model = model
        self.max_tokens = max_tokens
        self.temperature = temperature

        # Cumulative token counters
        self.total_prompt_tokens: int = 0
        self.total_completion_tokens: int = 0

        self._client = AsyncOpenAI(
            base_url=api_base,
            api_key=api_key,
        )

        logger.info(
            "AIClient initialised – model={}, base={}",
            model,
            api_base,
        )

    # ------------------------------------------------------------------
    # Public API
    # ------------------------------------------------------------------

    async def chat(
        self,
        messages: list[dict[str, Any]],
        system_prompt: str,
        tools: list[dict[str, Any]] | None = None,
    ) -> Any:
        """Send a text-only chat completion request.

        Args:
            messages: Conversation history as a list of
                ``{"role": "…", "content": "…"}`` dicts.
            system_prompt: The system-level instruction prepended to the
                conversation.
            tools: Optional list of tool schemas for function calling.

        Returns:
            The assistant's reply message object.
        """
        full_messages = self._build_messages(messages, system_prompt)
        return await self._request_with_retry(full_messages, tools=tools)

    async def chat_with_image(
        self,
        messages: list[dict[str, Any]],
        image_base64: str,
        system_prompt: str,
        tools: list[dict[str, Any]] | None = None,
    ) -> Any:
        """Send a multimodal chat completion that includes an image.

        The image is injected into the **last user message** using the
        OpenAI vision format (``image_url`` with a ``data:`` URI).

        Args:
            messages: Conversation history.
            image_base64: Base64-encoded image data.
            system_prompt: System-level instruction.
            tools: Optional list of tool schemas for function calling.

        Returns:
            The assistant's reply message object.
        """
        full_messages = self._build_messages(messages, system_prompt)

        # Locate the last user message and convert its content to the
        # multimodal array format required by the vision API.
        for msg in reversed(full_messages):
            if msg["role"] == "user":
                text_content = msg["content"] if isinstance(msg["content"], str) else ""
                msg["content"] = [
                    {"type": "text", "text": text_content},
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": f"data:image/jpeg;base64,{image_base64}",
                        },
                    },
                ]
                break

        return await self._request_with_retry(full_messages, tools=tools)

    def get_stats(self) -> dict[str, Any]:
        """Return cumulative token-usage statistics.

        Returns:
            A dict with ``total_prompt_tokens``,
            ``total_completion_tokens``, and ``total_tokens``.
        """
        return {
            "total_prompt_tokens": self.total_prompt_tokens,
            "total_completion_tokens": self.total_completion_tokens,
            "total_tokens": self.total_prompt_tokens + self.total_completion_tokens,
        }

    # ------------------------------------------------------------------
    # Internal helpers
    # ------------------------------------------------------------------

    @staticmethod
    def _build_messages(
        messages: list[dict[str, Any]],
        system_prompt: str,
    ) -> list[dict[str, Any]]:
        """Prepend the system prompt to the conversation messages."""
        return [
            {"role": "system", "content": system_prompt},
            *messages,
        ]

    async def _request_with_retry(
        self,
        messages: list[dict[str, Any]],
        tools: list[dict[str, Any]] | None = None,
    ) -> Any:
        """Execute a chat completion with exponential-backoff retry.

        Retries on transient network errors, timeouts, and rate-limit
        responses up to ``_MAX_RETRIES`` times.

        Raises:
            Exception: Re-raises the last exception if all retries are
                exhausted.
        """
        last_exc: BaseException | None = None

        for attempt in range(1, _MAX_RETRIES + 1):
            try:
                kwargs = {
                    "model": self.model,
                    "messages": messages,
                    "max_tokens": self.max_tokens,
                    "temperature": self.temperature,
                }
                if tools:
                    kwargs["tools"] = tools
                    
                response = await self._client.chat.completions.create(**kwargs)

                # Accumulate token usage when the API reports it.
                if response.usage is not None:
                    self.total_prompt_tokens += response.usage.prompt_tokens
                    self.total_completion_tokens += response.usage.completion_tokens
                    logger.debug(
                        "Token usage – prompt={}, completion={}",
                        response.usage.prompt_tokens,
                        response.usage.completion_tokens,
                    )

                return response.choices[0].message

            except (APIConnectionError, APITimeoutError, RateLimitError) as exc:
                last_exc = exc
                wait = _BACKOFF_BASE * (2 ** (attempt - 1))
                logger.warning(
                    "API request failed (attempt {}/{}): {} – retrying in {:.1f}s",
                    attempt,
                    _MAX_RETRIES,
                    exc,
                    wait,
                )
                await asyncio.sleep(wait)

            except Exception as exc:
                # Non-transient errors are surfaced immediately.
                logger.error("AI request failed with non-retryable error: {}", exc)
                raise

        # All retries exhausted – propagate the last transient error.
        logger.error(
            "AI request failed after {} retries – giving up", _MAX_RETRIES
        )
        raise last_exc  # type: ignore[misc]
