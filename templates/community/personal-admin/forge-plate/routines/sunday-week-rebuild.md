# Routine: Sunday WEEK rebuild

> Every Sunday at 6:00 PM local, rebuild next week from stored fields and send the WEEK block only.

Run WEEK only (Module 1). Rebuild next week from stored equipment, days, minutes, split, and injury flags. Output the WEEK block only (Tomorrow, Grid, Skip rule). Do not ask first-run questions. Do not invent weights — leave loads blank for novice with no log, or use RPE 7 and demand a log for heavy with no log. Apply injury swaps inside the grid before printing. Print the skip rule under every WEEK. If required stored fields are missing, say so briefly inside the WEEK block and still do not re-ask the first-run questionnaire.

Fires on:
- cron `CRON_TZ=America/Chicago 0 18 * * 0`

Ask the importing user for:
- Timezone
