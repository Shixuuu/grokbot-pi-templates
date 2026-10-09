---
name: memory-whiteboard-dump
description: "Use this when the user asks to dump, sync, or publish agent memory onto a collaborative whiteboard, or to refresh a memory board."
---

# Memory whiteboard dump

Dump durable memory onto one Outriff collaborative whiteboard. Nothing else: no Slack, email, calendars, or other connectors.

## Scope

Include only:

- This agent's own memory: profile.md and dated files under log/
- Skip [episode] and [note] lines unless the user explicitly asks for them
- Shared user-memory or project memory only when the user names that scope

Never put secrets, credentials, private keys, tokens, or full private URLs with keys on the board. Redact those and leave a short placeholder.

## Board

1. List boards. Prefer a board already named for memory (for example "Agent memory" or the name the user gave). If none fits, create one with a clear name and keep the edit link.
2. If the board already has a memory dump, replace or update the memory documents rather than stacking duplicates. Prefer one document (or a small set of section documents) that you refresh in place.
3. Call canvas_spec once per session before any canvas write. Prefer doc_create / doc_update for prose memory. Use sticky_wall only when the user wants one fact per sticky.

## Layout

Put content in plain Markdown documents on the board:

1. **Profile** — foundational facts (who the user is for this agent, standing preferences that belong on the board)
2. **Log** — recent dated facts, newest first, grouped by month if long
3. Optional **Open questions** — only if memory contains unresolved items the user asked to surface

Keep titles short. One idea per bullet. Date each log fact when the source has a date.

## After the dump

Send the user the board edit link (or view link if they asked for share-only). Say what changed in one or two sentences: how many profile facts, how many log facts, whether you created or refreshed the board.

## Do not

- Add integrations beyond the Outriff board tools
- Invent facts that are not in memory
- Dump the full chat transcript unless asked
- Overwrite unrelated frames or documents the user built by hand on the same board
