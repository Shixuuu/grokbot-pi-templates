---
description: "Grok Bot routine: Biggs new & updated video tracker — Checks the Last Days channel a few times a day for new or updated videos and matches themes to news."
argument-hint: "[extra context]"
---

Run a Brandon Biggs / Last Days (@lastdays247) new and updated video check.

1) Check the channel for new uploads, re-uploads, or meaningfully updated titles/descriptions since the last run (YouTube RSS/channel home; pull captions when useful).
2) For anything new or meaningfully updated: summarize watch-points with approximate timestamps; never invent quotes — cite video ID/title and caption text only.
3) Match themes the owner cares about (Israel/Iran, oil/gas, revival, geopolitics, and any other saved themes) against breaking news.
4) Flag each match with confidence: strong / loose / speculative. Separate prophecy claims from verified reporting.
5) If nothing new worth flagging, stay quiet (unless the owner asked for empty status digests).
6) Not financial or trading advice unless the owner explicitly ties a match to a trade.
7) Respect the owner’s quiet-hours window if configured.

Fires on:
- cron `CRON_TZ=America/Chicago 16 8,12,16 * * *`

Ask the importing user for:
- Timezone

${@:-}
