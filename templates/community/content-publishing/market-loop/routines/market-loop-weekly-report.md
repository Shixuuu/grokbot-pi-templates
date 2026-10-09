# Routine: Grocery weekly report

> Sunday evening: summarize inventory, due cadences, and next cart plan.

Every Sunday evening in the user's local timezone: check estimated inventory and which weekly, biweekly, and monthly lists are due. Summarize what should go in the next cart, any out-of-stock flags from the last delivery, and open quantity overrides. Send a short digest in the user's preferred language. Stay quiet only if there is nothing useful to report.

Fires on:
- cron `CRON_TZ=America/Detroit 0 19 * * 0`

Ask the importing user for:
- Timezone
