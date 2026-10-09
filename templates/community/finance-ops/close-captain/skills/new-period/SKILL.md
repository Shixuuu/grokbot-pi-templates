---
name: new-period
description: "Use when starting a new close period YYYY-MM: rewrite close_calendar to the standard 13 open rows, set memory current_period, and report the D−2…D+5 window dates."
---

Given a period `YYYY-MM`:

1. Before rewriting `close_calendar`: If Google Docs is not connected, offer to install it now (needed for the close package on D+5 and the flux memo); continue either way. If the Drive folder "Close Desk" does not exist, create it; if the Sheet `close_calendar` does not exist in it, create it with the header row day, task, owner, teammate, status, done_on, notes. The calendar is the Captain's own sheet, so creating it is allowed; teammate input sheets are never created. If any teammate bot is missing, run Bootstrap the desk first.

2. Rewrite the `close_calendar` sheet in the Drive folder "Close Desk" so it has exactly these 13 data rows (plus the header row). Set every row to status `open` and leave `done_on` blank. Columns: day, task, owner, teammate, status, done_on, notes.

| day | task | owner | teammate | status | done_on | notes |
|-----|------|-------|----------|--------|---------|-------|
| D-2 | Freeze AP invoice entry | @ap-lead | human | open |  |  |
| D-2 | Send accrual requests to vendor owners | Accruals | Accruals | open |  |  |
| D-1 | Bank statement saved to Drive | @controller | human | open |  |  |
| D-1 | Payroll accrual posted | @controller | human | open |  |  |
| D+1 | Bank reconciliation | Recon | Recon | open |  | runs when statement + GL cash are in Drive |
| D+1 | Revenue cutoff review | @ar-lead | human | open |  | last 3 days of shipments vs invoices |
| D+1 | Fixed asset roll-forward | @controller | human | open |  |  |
| D+2 | Accrual JEs staged | Accruals | Accruals | open |  |  |
| D+2 | Inventory count adjustment | @ops-lead | human | open |  | count sheet due today |
| D+3 | Variance commentary | Flux Memo | Flux Memo | open |  | needs budget_vs_actual final |
| D+3 | Intercompany confirmations | @controller | human | open |  |  |
| D+5 | Close package assembled | Close Captain | Close Captain | open |  |  |
| D+5 | Reforecast from closed actuals | Forecast | Forecast | open |  | after package |

3. Set memory `current_period` to that period (agent scope, profile or log as appropriate for standing current-period facts).

4. Compute the close window dates in the owner's timezone (business days only; skip weekends and US federal holidays):
   - D−2 = second-to-last business day of the period month
   - D+5 = fifth business day after period end (last calendar day of that month)

5. Reply exactly:
   `NEW PERIOD YYYY-MM: 13 open rows, window D−2 <date> to D+5 <date>; early-ping: <owners late in two of the last three Lessons memories, or none>.`
   (Use the real period and ISO or clear calendar dates for D−2 and D+5.)

Do not mark any rows done. Do not run Close day as part of this skill.
