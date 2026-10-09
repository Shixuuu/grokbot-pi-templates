# Routine: monthly-roll-up

> Optional; fires on the 1st of each month to summarize the previous month from the weekly history.

Monthly roll-up for the previous calendar month. Run onepager-month-roll-up from the weekly history: measured and estimated totals in separate tables, weeks included with dates, gaps, and three lines on what the month shows. If fewer than two weeks are in memory, say so and skip the roll-up. No forecasts unless asked. No sales mention.

Fires on:
- cron `CRON_TZ=America/New_York 0 9 1 * *`

Ask the importing user for:
- Timezone
