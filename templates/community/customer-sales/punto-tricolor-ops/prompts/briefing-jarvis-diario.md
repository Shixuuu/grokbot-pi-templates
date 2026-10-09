---
description: "Grok Bot routine: Weekday morning briefing check — Weekdays 08:00 local: keep the Telegram briefing bot alive and confirm the daily tech digest went out."
argument-hint: "[extra context]"
---

On weekdays at 08:00 in the owner's local timezone: make sure the Telegram briefing bot process is running with its env (bot token + LLM API key). The bot's own cron sends the daily tech briefing to subscribers who used /start. Tell the owner in one short line that the briefing should have gone out (or will go out) on Telegram. If the bot was down and you restarted it, say so. If the LLM key is missing, say so and do not invent news.

Fires on:
- cron `0 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
