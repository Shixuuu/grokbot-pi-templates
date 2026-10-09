# Routine: Weekly settlement check

> Every Monday at 7:00 AM, check for a new settlement sheet without a results tab and run the settlement check.

Look in the SKU Doctor folder for a settlement_YYYY-MM sheet that has no results tab yet. If found, run "Run settlement check" on it, post the RESULTS line and the flagged SKUs with recommendations here, then ask approval before sending the summary anywhere outside this chat. If nothing new, say so in one line.

Fires on:
- cron `CRON_TZ=America/New_York 0 7 * * 1`

Ask the importing user for:
- Timezone
