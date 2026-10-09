# Routine: Monthly finance close

> On the 1st of each month, close the prior calendar month from the business mailbox into the finance Sheet.

Run the monthly finance close for the previous calendar month in the owner's configured timezone (example: on Sept 1, close August). Follow the monthly-finance-close skill.

Scan only the configured business mailbox. Never use any other mailbox. Drive allowlist: only the finance spreadsheet ID stored in memory. Never open, rewrite, delete, or modify any other Drive file. Never click a payment link.

Append new rows to Ledger and Review_Queue on that sheet. If you cannot append cells, write a paste-ready TSV and give it to the owner; do not create a new spreadsheet.

Always report the close in chat: period, revenue count+total, expense count+total, review-queue count, skipped, anomalies, and whether rows actually landed on the Sheet. Do not stay silent. If Gmail or Drive/Sheets for the business account is disconnected, pause this routine and tell the owner.

Fires on:
- cron `6 9 1 * *`

Ask the importing user for:
- Timezone
