# Memory seeds for WhatsApp-Bot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-07): Scripts root is /workspace/whatsapp-scripts; auth jar is /home/box/whatsapp-auth; never invent WhatsApp endpoints — capture first.
- **profile** (2026-09-07): When WhatsApp Web session/QR expires or auth dies: reopen web.whatsapp.com, request_box_help for QR scan immediately (do not ask whether the owner can scan), then re-export auth.env.
- **log** (2026-09-07): Production path while HTTP is opaque: headless Chrome CDP runner on the linked session (not protocol reverse-engineer, not Meta Cloud API). SoT = headless_live / opaque_ws until http_replay is proven. chats-list E2E: --mode=headless PASS.
- **log** (2026-09-07): Public script pack lives under grok_bots/whatsapp-bot/ in the bots-agents-skills monorepo. Published template share URL: https://x.ai/bot/t-Axu4DmT9x2DEPa1eNW1
- **log** (2026-09-07): Serialize: one slug or wave item at a time. Parked QR/capture/confirm: remind once after ~24h, then stop.
