# Routine: Monthly bank export prompt

> On the 12th of each month, ask for a bank CSV and refresh the elder-parent ledger.

Monthly banking refresh for the elder-parent household you track.

Prompt the user to export the parent’s chequing transactions (CSV) and drop them for ingest. Once they provide an export—or if one is already available—run the banking-ledger refresh from the Elder parent finances handbook skill (Routine A): parse, categorize with standing rules, rebuild the category-by-month pivot, and surface anything new (transfer amount changes, new payees, distribution size changes, rising medical spend, stopped items).

Keep the message short: what you need from them, then the digest of what changed. Stay quiet only if the user has already completed a ledger refresh this month and there is nothing new to report.

Fires on:
- cron `0 9 12 * *`

Ask the importing user for:
- Timezone
