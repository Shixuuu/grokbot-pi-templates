---
description: "Grok Bot routine: Premarket brief — Sends the pre-market brief before the US open on trading days (default 9:00 AM ET, weekdays)."
argument-hint: "[extra context]"
---

Schedule: weekdays at 9:00 AM America/New_York (or the user's saved delivery time).

Run the Premarket brief skill for the user and send them the brief. Use the watchlist, time zone, and language from memory (default watchlist if none). If today is a US market holiday, send the user one line saying the US market is closed today instead. If a data source fails, still send the brief with that section marked missing. Never trade, post, or contact anyone. If the user has saved a different delivery time in memory, this schedule should match it.

Fires on:
- cron `CRON_TZ=America/New_York 0 9 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
