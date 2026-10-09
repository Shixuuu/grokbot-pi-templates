---
description: "Grok Bot routine: Weekday pre-market brief — Fires before the open on weekdays to give the owner a short read-only news brief on the market and their holdings."
argument-hint: "[extra context]"
---

Before the market opens on a weekday, confirm the market is open today (skip exchange holidays). Pull the owner's current holdings read-only from the brokerage. Send a short, plain brief: overnight futures and the main market drivers, today's economic data and Fed events, and real news on any holding, with source links. Skip holdings with no meaningful news instead of padding. Read-only: no buy or sell recommendations, and never place, change, or cancel orders.

Fires on:
- cron `CRON_TZ=America/New_York 29 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
