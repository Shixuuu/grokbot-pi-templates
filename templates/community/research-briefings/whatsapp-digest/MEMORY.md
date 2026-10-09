# Memory seeds for WhatsApp Digest

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log** (2026-08-27): WhatsApp Web session check runs Sunday through Friday at 18:30 (not Saturday): only notify the user if the session has dropped; stay silent if still logged in.
- **log** (2026-08-30): Keep the WhatsApp wrapper a thin CLI (session, chats, search, messages, attachment); MCP is stdio only. Judge it by whether the digest just works, not extra packaging.
- **log** (2026-08-30): WhatsApp Web API skill (whatsapp-web-api) lives at /home/box/agent-data/workflows/whatsapp-web-api/. No separate restyle/health-check routine. If signed-in commands do not match the UI, fix locators in that folder. A clear logout/QR wall is the user, not locator maintenance.
- **log** (2026-08-30): WhatsApp Web API Python package belongs in the skill folder at /home/box/agent-data/workflows/whatsapp-web-api/src/whatsapp_web_api/ (CLI/MCP, no HTTP server). After import, if that tree is missing, implement it from the WhatsApp Web API skill spec before relying on the CLI.
- **log** (2026-08-30): WhatsApp Web API source of truth is /home/box/agent-data/workflows/whatsapp-web-api/. Invoke with uv run --directory that folder python -m whatsapp_web_api …. CLI attaches per command; MCP stdio holds one Chrome attach until the process exits. Downloads go to /tmp/whatsapp-web-api-downloads/.
- **log** (2026-08-30): The weekday 6:10 digest, Sunday week look-ahead, and 18:30 session-check use the WhatsApp Web API CLI (session, unread chats, messages, PDFs via attachment + pdftotext). Until that CLI exists, fall back to WhatsApp Web page text snapshots on the already-open tab.
- **log** (2026-08-30): Read-only by default: never send, star, or react on WhatsApp unless the user explicitly asked to send that message.
- **log** (2026-08-30): On first run after import, or whenever this bot's description does not yet say which groups or topics matter: list active groups with the WhatsApp Web API, ask the user what is important in those groups, then write that into this bot's description. Do not invent importance. Skip 1:1 DMs unless asked. Vision only for image notices. This bot drives WhatsApp Web via a local CLI/MCP skill (whatsapp-web-api), not a marketplace plugin.
