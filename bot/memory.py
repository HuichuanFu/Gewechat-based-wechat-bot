"""
Conversation memory manager using async SQLite.

Provides persistent storage for chat history with automatic truncation
to keep memory bounded. Each user's conversation is stored independently.
"""

from __future__ import annotations

from typing import Any

import aiosqlite
from loguru import logger


class MemoryManager:
    """Manages per-user conversation history in a SQLite database.

    Attributes:
        db_path: Path to the SQLite database file.
        max_history: Maximum number of messages to retain per user.
    """

    def __init__(self, db_path: str, max_history: int = 50) -> None:
        """Initialise the memory manager.

        Args:
            db_path: Filesystem path for the SQLite database.
            max_history: Maximum messages kept per user. Oldest messages
                are deleted automatically when this limit is exceeded.
        """
        self.db_path = db_path
        self.max_history = max_history

    # ------------------------------------------------------------------
    # Database lifecycle
    # ------------------------------------------------------------------

    async def init_db(self) -> None:
        """Create the conversations table if it does not already exist."""
        async with aiosqlite.connect(self.db_path) as db:
            await db.execute(
                """
                CREATE TABLE IF NOT EXISTS conversations (
                    id        INTEGER  PRIMARY KEY AUTOINCREMENT,
                    user_id   TEXT     NOT NULL,
                    role      TEXT     NOT NULL,
                    content   TEXT     NOT NULL,
                    msg_type  TEXT     NOT NULL DEFAULT 'text',
                    timestamp DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
                )
                """
            )
            # Index speeds up per-user queries and truncation look-ups.
            await db.execute(
                """
                CREATE INDEX IF NOT EXISTS idx_conversations_user_id
                ON conversations (user_id)
                """
            )
            await db.commit()
        logger.info("Memory database initialised at {}", self.db_path)

    # ------------------------------------------------------------------
    # Message operations
    # ------------------------------------------------------------------

    async def add_message(
        self,
        user_id: str,
        role: str,
        content: str,
        msg_type: str = "text",
    ) -> None:
        """Store a single message and auto-truncate if needed.

        Args:
            user_id: Unique identifier of the user / conversation partner.
            role: Message role – typically ``"user"`` or ``"assistant"``.
            content: The message body.
            msg_type: Content type label (e.g. ``"text"``, ``"image"``).
        """
        async with aiosqlite.connect(self.db_path) as db:
            await db.execute(
                """
                INSERT INTO conversations (user_id, role, content, msg_type)
                VALUES (?, ?, ?, ?)
                """,
                (user_id, role, content, msg_type),
            )
            await db.commit()

            # --- Auto-truncate oldest messages beyond *max_history* ---
            await self._truncate(db, user_id)

        logger.debug(
            "Stored {} message for user {} (type={})", role, user_id, msg_type
        )

    async def get_history(
        self,
        user_id: str,
        limit: int | None = None,
    ) -> list[dict[str, Any]]:
        """Return conversation history for a user, oldest-first.

        Args:
            user_id: The user whose history to retrieve.
            limit: Optional cap on the number of messages returned.
                Defaults to ``max_history`` when *None*.

        Returns:
            A list of dicts with keys ``role``, ``content``, ``msg_type``,
            and ``timestamp``.
        """
        effective_limit = limit if limit is not None else self.max_history

        async with aiosqlite.connect(self.db_path) as db:
            db.row_factory = aiosqlite.Row
            cursor = await db.execute(
                """
                SELECT role, content, msg_type, timestamp
                FROM conversations
                WHERE user_id = ?
                ORDER BY id ASC
                LIMIT ?
                """,
                (user_id, effective_limit),
            )
            rows = await cursor.fetchall()

        return [
            {
                "role": row["role"],
                "content": row["content"],
                "msg_type": row["msg_type"],
                "timestamp": row["timestamp"],
            }
            for row in rows
        ]

    async def clear_history(self, user_id: str) -> None:
        """Delete all stored messages for a given user.

        Args:
            user_id: The user whose history should be erased.
        """
        async with aiosqlite.connect(self.db_path) as db:
            await db.execute(
                "DELETE FROM conversations WHERE user_id = ?",
                (user_id,),
            )
            await db.commit()
        logger.info("Cleared conversation history for user {}", user_id)

    # ------------------------------------------------------------------
    # Aggregate queries
    # ------------------------------------------------------------------

    async def get_all_users(self) -> list[str]:
        """Return a list of all user IDs that have chat history."""
        async with aiosqlite.connect(self.db_path) as db:
            cursor = await db.execute(
                "SELECT DISTINCT user_id FROM conversations ORDER BY user_id"
            )
            rows = await cursor.fetchall()
        return [row[0] for row in rows]

    async def get_stats(self) -> dict[str, Any]:
        """Return high-level statistics about the stored conversations.

        Returns:
            A dict containing at least ``total_messages``,
            ``total_users``, and ``oldest_message`` /
            ``newest_message`` timestamps.
        """
        async with aiosqlite.connect(self.db_path) as db:
            cursor = await db.execute("SELECT COUNT(*) FROM conversations")
            total_messages: int = (await cursor.fetchone())[0]  # type: ignore[index]

            cursor = await db.execute(
                "SELECT COUNT(DISTINCT user_id) FROM conversations"
            )
            total_users: int = (await cursor.fetchone())[0]  # type: ignore[index]

            cursor = await db.execute(
                "SELECT MIN(timestamp), MAX(timestamp) FROM conversations"
            )
            row = await cursor.fetchone()
            oldest = row[0] if row else None  # type: ignore[index]
            newest = row[1] if row else None  # type: ignore[index]

        return {
            "total_messages": total_messages,
            "total_users": total_users,
            "oldest_message": oldest,
            "newest_message": newest,
        }

    # ------------------------------------------------------------------
    # Internal helpers
    # ------------------------------------------------------------------

    async def _truncate(self, db: aiosqlite.Connection, user_id: str) -> None:
        """Delete the oldest messages when a user exceeds *max_history*.

        This is called automatically after every :meth:`add_message`.
        """
        cursor = await db.execute(
            "SELECT COUNT(*) FROM conversations WHERE user_id = ?",
            (user_id,),
        )
        (count,) = await cursor.fetchone()  # type: ignore[misc]

        if count > self.max_history:
            overflow = count - self.max_history
            await db.execute(
                """
                DELETE FROM conversations
                WHERE id IN (
                    SELECT id FROM conversations
                    WHERE user_id = ?
                    ORDER BY id ASC
                    LIMIT ?
                )
                """,
                (user_id, overflow),
            )
            await db.commit()
            logger.debug(
                "Truncated {} oldest messages for user {}", overflow, user_id
            )
