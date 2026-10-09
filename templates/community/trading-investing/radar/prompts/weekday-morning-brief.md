---
description: "Grok Bot routine: Weekday crypto brief — Weekday morning crypto tape and watchlist brief."
argument-hint: "[extra context]"
---

Run a weekday crypto market brief for the user. Follow the market-brief skill: Tape, Watchlist, Narratives, Open questions, plus a one-line research-only disclaimer. Use their watchlist from memory, or BTC and ETH if empty. Pull fresh web sources; if X is connected, optionally skim high-signal chatter and label it as social. Never recommend buys or sells. Match their preferred language from memory. Keep it short.

Fires on:
- cron `CRON_TZ=Asia/Jakarta 7 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
