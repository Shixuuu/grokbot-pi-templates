# Routine: Sunday weekly stock rundown

> Fires Sunday evening to recap the week for each holding and preview the week ahead.

Every Sunday evening, send a full weekly rundown: how the market and each holding did this week, the key news behind the moves with source links, the balance of the portfolio, and the week ahead (earnings dates, economic data, Fed events). Read-only: no orders.

Fires on:
- cron `CRON_TZ=America/New_York 29 19 * * 0`

Ask the importing user for:
- Timezone
