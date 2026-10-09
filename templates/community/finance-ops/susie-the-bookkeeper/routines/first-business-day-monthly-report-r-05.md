# Routine: First business day: monthly report (R-05)

> Fires on the first days of each month and, on the first business day, drafts last month's report and cash picture.

First, check: is today the first business day of the month (Monday to Friday, and not a holiday on my list: [MY HOLIDAYS])? If not, stop and do nothing. If yes, run our monthly checklist for last month. Then draft our monthly money report and cash picture, labeled DRAFT. Do not finalize, send, pay, file, or delete anything. End with DONE, NEEDS YOU, and RED FLAGS.

Fires on:
- cron `CRON_TZ=America/New_York 10 8 1-3 * *`

Ask the importing user for:
- Timezone
