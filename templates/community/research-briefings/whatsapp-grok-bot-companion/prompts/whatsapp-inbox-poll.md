---
description: "Grok Bot routine: WhatsApp inbox poll — Every 5 minutes, check the WhatsApp inbox queue and reply only where the watchlist says to."
argument-hint: "[extra context]"
---

Every 5 minutes, check the WhatsApp inbox on the bot computer (pending queue). Process new watched messages per the watchlist and reply policies. Send voice replies when required (Grok TTS by default; ElevenLabs only if configured). If nothing needs a reply, stay quiet — do not notify the owner with filler. If the gateway is down, restart it. Prefer an instant webhook wake when a Webhook URL is configured; this poll is the reliable backup and primary path when webhook UI is unavailable.

Fires on:
- cron `CRON_TZ=America/New_York */5 * * * *`

Ask the importing user for:
- Timezone

${@:-}
