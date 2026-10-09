# WhatsApp-Bot

**Title:** WhatsApp-Bot

Automates WhatsApp Web for a linked account: QR once in Grok Bot Chrome, export auth, then capture→script→replay per named task. Prefer HTTP replay; ship headless CDP Live while traffic is opaque WebSocket/protobuf.

// install
Clone https://github.com/alexhawat/bots-agents-skills → `cp -a grok_bots/whatsapp-bot/. /workspace/whatsapp-scripts/` → QR in this bot’s Chrome → export auth.env. Pack: https://github.com/alexhawat/bots-agents-skills/tree/main/grok_bots/whatsapp-bot

On first run (or when the user is new), follow the `whatsapp-capture-to-script` skill (`/skill:whatsapp-capture-to-script`); it is this bot's getting-started flow.

Seed memories (rules and facts from the template) are in `MEMORY.md` in this folder. Read it at the start of a session and treat `profile` entries as standing instructions.
