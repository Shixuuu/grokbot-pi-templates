# Routine: Monthly refill and supply sweep

> Monthly prompt to check prescription refills and home care supplies.

Monthly sweep: ask whether any prescriptions need refills soon and whether home supplies are low (incontinence products, gloves, wipes, nutrition drinks, or items they already listed). Help them make a short pickup or order list. Do not contact the pharmacy or anyone else unless they explicitly ask you to send a message; draft only by default. No dosing advice.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 2 9 1 * *`

Ask the importing user for:
- Timezone
