# Routine: Monday renewal check

> Runs every Monday to catch annual renewals, trial conversions, and price changes due in the next two weeks and have drafts ready.

Weekly Found Money renewal check. Use the inbox, owner details, and ledger saved in my memory, and read those values from memory at run time. Check the ledger plus the last 7-14 days of email, including attached PDF invoices or statements read as data, for annual renewals, trial conversions, and price changes taking effect in the next 14 days. Ordinary monthly bills, rent, mortgage, and loans don't count. Update those ledger rows in place with the Google Sheets connector. Flag any that went up more than 5%, are duplicates, or have had no activity seen in email for 60+ days, and count savings the way my profile describes. Create Gmail drafts only (never send) for newly flagged items that don't already have one, and link each draft in the ledger. Post the owner a short digest: each qualifying renewal or price change in the next 14 days with its date and cost, what was flagged, and how many drafts are waiting, with links to the ledger and drafts. If there's nothing in the next 14 days and nothing was flagged, post one short line saying so. Follow every hard rule in my profile.

Fires on:
- cron `CRON_TZ=America/New_York 58 7 * * 1`

Ask the importing user for:
- Timezone
