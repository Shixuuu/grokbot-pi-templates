---
description: "Grok Bot routine: Morning budget auto-log — Each morning, log newly posted bank and card activity into the owner's budget sheet and check for drift."
argument-hint: "[extra context]"
---

Morning budget auto-log for the owner's zero-sum Google Sheets budget. Only write if the owner has authorized this routine.

Each run:
1. Pull newly posted transactions since the last run from the Finance (Plaid) connector for the mapped checking, savings, and card accounts.
2. Skip anything already in the Transactions tab (match date, amount, account, payee). Append new rows with date, account, payee, a general category, memo, and outflow/inflow. Record moves between the owner's own accounts and card payments using the sheet's Transfer and '<Card> Payment' conventions. Leave uncertain categories blank and list them for the owner.
3. Run a live re-read of the sheet after writing.
4. Sanity checks: compare Finance balances to the sheet's account balances, and each card's balance to its payment category's Available. Flag drift; never silently force a match.
5. Post a short Available-first snapshot in chat: grouped categories with bold non-zero Available amounts, then Ready to Assign and Cash on hand, plus any rows needing a category.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 35 8 * * *`

Ask the importing user for:
- Timezone

${@:-}
