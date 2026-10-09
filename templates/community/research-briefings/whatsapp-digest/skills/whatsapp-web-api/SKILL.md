---
name: whatsapp-web-api
description: "Use this when reading or sending WhatsApp via the already-open web.whatsapp.com tab, including PDF/document attachments. Call this CLI/MCP instead of clicking WhatsApp yourself. After import, implement the Python CLI in this skill folder if it is missing."
---

Call this wrapper instead of driving the web.whatsapp.com tab yourself. Code lives in this skill folder. A job holds one Chrome attach, runs commands, then drops it. CLI is one-shot (attach, command, detach). MCP (`stdio`) keeps the attach until the process exits. Never close Chrome.

## How

Prefix:

```
uv run --directory /home/box/agent-data/workflows/whatsapp-web-api python -m whatsapp_web_api
```

Commands (JSON on stdout, non-zero on error): `session`, `chats [--filter all|unread|favourites|groups]`, `communities`, `community-groups NAME`, `search Q`, `chat NAME`, `messages NAME [--limit 40]`, `attachment NAME QUERY`, `send NAME TEXT`, `react NAME QUERY EMOJI`, `stdio` (MCP).

Reuse the already-open WhatsApp Web tab. Never open a second. Leave it open. Pin if possible. On the QR wall, keep Stay logged in / Keep me signed in checked. CLI and MCP stdio only.

## Tools

1. `session` / `get_session` — signed in vs QR
2. `chats` / `list_chats` — filter `all` | `unread` | `favourites` | `groups` (`favorites` alias)
3. `communities` / `list_communities` — Communities panel, then back to Chats
4. `community-groups` / `list_community_groups` — announcement + groups for one community (name)
5. `search` / `search_chats` — fill search, scrape, clear
6. `chat` / `get_chat` — header. Opening **marks read**. Response includes `marked_read: true`
7. `messages` / `list_messages` — pane. Opening **marks read**. Newest first. Documents include `type`, `filename`, `caption`, `pages`, `size`. `text` is caption or filename.
8. `attachment` / `download_attachment` — filename or caption snippet. Clicks the document card, waits for Chrome download, returns `path` + `filename`. Files land under `/tmp/whatsapp-web-api-downloads/`. Then extract PDFs with pdftotext/poppler. Images: vision only for notices.
9. `send` / `send_message` — only when the caller asked to send
10. `react` / `react_to_message` — only when asked

Identify chats by on-screen name. Exact, then startswith, then contains. Collisions return `{ok:false, candidates:[...]}`. Names with `/` are valid.

## Do not

- Open a second tab or close Chrome
- Send, star, or react unless asked
- Treat QR/logout as a locator bug
- Use Baileys, whatsapp-web.js, Store, IndexedDB, cookies, tokens, or hashed CSS
- Run a restyle/health-check probe

Read-only by default. Never send, star, or react unless the user explicitly asked to send that WhatsApp message.

## Setup (first import)

Templates pack this recipe, not a live Python tree. After import, if `src/whatsapp_web_api/driver.py` is missing next to this skill, implement the package in `/home/box/agent-data/workflows/whatsapp-web-api/` from the spec below (hand it to a coding agent if needed). Then run: `uv run --directory /home/box/agent-data/workflows/whatsapp-web-api python -m whatsapp_web_api session`.

Until that CLI exists, digest runs may fall back to WhatsApp Web page text snapshots on the already-open tab. Do not invent a protocol client.

If WhatsApp Web is not open, open https://web.whatsapp.com/ once, reuse that tab, and pin it. On a QR wall: check Stay logged in, then hand the computer to the user to scan. Do not guess credentials.

On first run (or whenever this bot description does not yet name which groups or topics matter): `chats --filter groups` (and `communities` if useful), show the user the active groups, ask what is important in them, then write that into this bot description. Do not invent importance.

### Package to write

- Layout: `pyproject.toml` plus `src/whatsapp_web_api/` (`__init__.py`, `__main__.py`, CLI, locators, models, optional MCP stdio).
- Invoke with the prefix in How. JSON on stdout, non-zero on error. Commands and fields as in Tools.
- Attach to the already-open WhatsApp Web tab in Chrome. One attach per CLI command; MCP stdio holds one attach until the process exits. Never open a second tab. Never close Chrome.
- Locators are on-screen names and roles, not hashed CSS. Keep this UI-shaped API if WhatsApp restyles.
- Downloads land under `/tmp/whatsapp-web-api-downloads/`.
- `send` / `react` only when the caller asked.

## Maintenance

When commands do not reliably return the expected results (signed in, but missing chats, empty or stale message lists, search misses what is on screen, a name found in search will not open, attachments not retrieved), run maintenance: fix the Python locators in this folder so the commands match the current WhatsApp Web UI. Keep this UI-shaped API. Do not switch to a protocol client. A clear QR/logout wall is not a locator bug.
