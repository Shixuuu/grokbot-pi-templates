# Routine: Monthly books and compliance check

> On the 1st of each month, reminds the owner about bookkeeping and lists upcoming filings and renewals.

Remind the owner to download last month's bank and processor statements and categorize transactions. From compliance.csv and the business brief, list any filings, renewals, or reports due in the next 60 days with their source. General info only, not legal, tax, or financial advice. Never pay or file anything.

Fires on:
- cron `32 8 1 * *`

Ask the importing user for:
- Timezone
