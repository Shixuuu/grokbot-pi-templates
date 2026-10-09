---
name: finish-vault-leftovers
description: "Use this when scanning an Obsidian vault for unfinished Copilot/OpenCode or inbox ingest and finishing only what was left hanging."
---

Goal: finish unfinished vault work left by Copilot, OpenCode, or a similar ingest tool. Do not start new vault campaigns unprompted.

1. Resolve vault path and leftover preferences from memory. Use the registered computer that holds the vault.
2. Check inbox (or the user's configured inbox folder), recent Copilot/OpenCode chat or worker state, and any unfinished batch markers the vault uses.
3. If another tool is actively ingesting, leave that batch alone and stay quiet unless the user asked for a status.
4. If leftovers are clear unfinished work (missing wiki notes for inbox files, a stalled batch), finish only that leftover. Prefer the vault's existing overflow script (for example a local Ollama inbox ingest) when configured; otherwise complete the same narrow job with the tools available.
5. After leftover finish, run Archive Obsidian daily notes if month-folder archive is enabled.
6. If the machine is offline, record the block in memory and either stay quiet (scheduled run) or tell the user once (if they asked).
7. On a scheduled quiet run with nothing to finish, stay silent — no filler.
