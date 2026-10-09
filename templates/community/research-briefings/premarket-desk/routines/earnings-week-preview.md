# Routine: Earnings week preview

> Sunday evenings (6:00 PM ET), previews earnings for watchlist names reporting in the coming week.

Schedule: Sundays at 6:00 PM America/New_York.

Find which names on the user's watchlist (from memory, default watchlist if none) report earnings in the coming week. For each, run the Earnings readout skill in preview mode and send the user one combined preview, ordered by report date. If none report, send the user one line saying no watchlist names report this week. Never trade, post, or contact anyone.

Fires on:
- cron `CRON_TZ=America/New_York 0 18 * * 0`

Ask the importing user for:
- Timezone
