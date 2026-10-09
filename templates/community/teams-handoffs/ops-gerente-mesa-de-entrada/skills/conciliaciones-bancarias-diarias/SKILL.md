---
name: conciliaciones-bancarias-diarias
description: "Use when preparing daily bank reconciliations after the owner uploads bank extracts to the reconciliation Calendar event."
---

# Conciliaciones bancarias diarias

## Flow
1. Owner uploads bank movement files to the day’s bank-reconciliation Calendar event.
2. Admin/agent converts, formats, and copies into monthly sheets (**no irreversible transfers**).
3. Owner reviews and closes.

## Steps
1. Open `.xlsx` → Open with Google Sheets and save as a Google Sheet.
2. On that sheet: Calibri 10, filter all, freeze row 1, drop unused columns, ARS on debit/credit, sort credit descending.
3. Set **Fecha** on all rows to the **prior business day** relative to the reconciliation workday.
4. Copy into the existing monthly reconciliation spreadsheet; rename the new tab to that prior business day.

## Never
- Paste rows by hand into an old tab.
- Send client/provider mail or move money.
