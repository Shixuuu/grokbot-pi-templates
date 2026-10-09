# Routine: Weekly wrap

> Saturday mornings (10:00 AM ET), recaps the watchlist's week and previews next week's calendar.

Schedule: Saturdays at 10:00 AM America/New_York.

Run the Weekly wrap skill for the user's watchlist (from memory, default watchlist if none) and send it to the user in their language. If a source fails, send it anyway with that section marked missing. Never trade, post, or contact anyone.

Fires on:
- cron `CRON_TZ=America/New_York 0 10 * * 6`

Ask the importing user for:
- Timezone
