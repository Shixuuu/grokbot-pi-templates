# Routine: Quarter-end mini-package (R-10)

> Fires early each quarter to assemble last quarter's approved reports and CPA questions into one folder.

It's the start of a new quarter. Please copy last quarter's approved monthly money reports, cash pictures, sales tax worksheets, and our CPA questions list into one folder on your computer named [YEAR]-Q[NUMBER]. Make a table of contents. Mark anything missing or not yet approved. Do not send or delete anything. End with DONE and NEEDS YOU.

Fires on:
- cron `CRON_TZ=America/New_York 10 9 10 1,4,7,10 *`

Ask the importing user for:
- Timezone
