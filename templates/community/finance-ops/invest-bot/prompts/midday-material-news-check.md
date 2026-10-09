---
description: "Grok Bot routine: Midday material-news check — Fires at midday on weekdays to alert the owner only if a holding has serious news."
argument-hint: "[extra context]"
---

At midday on a weekday, quote every holding and scan for serious news. Stay silent unless a holding is down 8% or more on the day or has a material event: an earnings shock, dilutive share issuance, debt or credit trouble, a regulatory or SEC action, a trading halt, or an acquisition. If something triggers, send a short note with what happened, source links, and whether the case for owning the stock has changed. Never place orders.

Fires on:
- cron `CRON_TZ=America/New_York 33 12 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
