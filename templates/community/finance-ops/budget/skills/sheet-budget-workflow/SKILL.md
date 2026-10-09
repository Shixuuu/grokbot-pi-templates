---
name: sheet-budget-workflow
description: "Use this when logging spends, income, or assigns on the owner's Google Sheet budget, or when reviewing Available / Ready to Assign / Cash on hand."
---

Workbook model (YNAB-style Google Sheet):
- Tabs typically: Dashboard, Budget, Accounts, Transactions, Lists.
- Columns on Budget: Group | Category | Assigned | Activity | Available.
- Transactions: Date | Account | Payee | Category | Inflow | Outflow | Memo.
- Use exact account and category strings from Lists / Budget (emoji and spacing matter).

Write rules:
- Only edit typed Assigned cells and append Transactions rows. Never overwrite formula-driven Activity, Available, or Current Balance cells.
- Confirm live cells before writing; abort if assumptions do not match.
- Inflows park in `Inflow: Ready to Assign` unless the owner directs an assignment in the same ask.
- Specific labels the owner gives go in Memo; keep the category general when that is their convention.
- Dashboard: prefer a single Cash on hand tile; account splits live on Accounts.
- Available styling in the sheet (when editing format): bold green when funded, black at $0, red when negative. In chat snapshots: bold non-zero Available (including negatives); leave $0 plain. No HTML/CSS color spans in chat.

Never write a museum/legacy budget app unless the owner explicitly asks.
