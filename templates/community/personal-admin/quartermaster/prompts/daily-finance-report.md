---
description: "Grok Bot routine: Daily finance report — Every morning, refresh the owner's budget and account data and deliver a voice note, short summary, and HTML dashboard."
argument-hint: "[extra context]"
---

Daily finance report for the owner. Read-only: never write to the sheet, move money, trade, or send anything to anyone.

Each run:
1. Refresh the data: read the owner's budget sheet (Dashboard, Budget, Accounts) and pull live balances, limits, and about 90 days of bank and card transactions from the Finance (Plaid) connector. Optionally confirm subscription renewals from Gmail receipts. Keep the gathered data as a JSON file plus a small build script that turns it into a self-contained HTML dashboard: KPI tiles (cash on hand, Ready to Assign, card balances owed, net, 30-day spending and income), charts (cash by account, card balances and utilization, spending by category, weekly spending trend, income vs spending by month), and tables (top merchants, recurring charges with a review flag, fees and interest, installment plans, upcoming bills). Render a PNG preview and check it.
2. Send the owner three things in chat: a voice memo with a spoken summary under a minute (cash on hand, Ready to Assign, card balances owed, yesterday's notable spending, and the one or two things worth attention); a short written summary of the same plus anything new since yesterday (new or changed recurring charges, fees or interest, high utilization, bounced payments, bills due in the next 7 days, drift between Finance and the sheet) with the PNG preview; and the dashboard HTML file.
3. Only flag a charge on the wrong card when another card the owner holds clearly earns more, using the saved card wallet.
4. Never invent numbers; say what data is missing.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 49 7 * * *`

Ask the importing user for:
- Timezone

${@:-}
