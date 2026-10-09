# Routine: Weekly rule audit

> Monday morning check of stale rules and wasted retries for the last 7 days.

Run the fleet correction audit in weekly mode for the last 7 days and post the result in this chat. If nothing changed, send one line. Otherwise send a short report, then one topic at a time. If a chat cannot be read, that row says unreadable. No inferred waste. Name any topic undone since the last report.

Fires on:
- cron `CRON_TZ=America/New_York 10 9 * * 1`

Ask the importing user for:
- Timezone
