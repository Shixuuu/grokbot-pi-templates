---
name: travel-expense-a4-workbook
description: "Use when starting or updating a travel expense log that should use the Editorial Poster black-and-white multi-currency workbook, or when the user asks to reuse the expense template."
---

# Travel expense workbook

## When
Use for trip expense dumps that should land in the Editorial Poster black-and-white multi-currency workbook (Helvetica Neue, grey = editable, one black TOTAL block per sheet). Receipts stay in local currency; totals convert to the user’s chosen report currency.

## Files
- **Blank template:** copy from agent files `Travel-Expenses-Template.xlsx` (name-scrubbed blank log).
- **Design guide:** agent files `Expense-Sheet-Design-System.md` — follow it for layout, formulas, print setup, and Numbers caveats. Do not freestyle a new design.
- **Live trip workbook:** keep the working file next to the template. Never overwrite the blank template with trip data.

## Workbook shape
- Sheet `01 Expenses`: log rows — Date, Category, Description, Notes, CUR, Amount. Report-currency column is calculated; leave its formulas alone.
- Sheet `02 Summary`: currency rates (editable grey) and category rollups. Report currency comes from the user’s remembered preference (asked on first open).
- Categories (dropdown): Transport, Accommodation, Meals & Drinks, Fees & Deposits, Other.
- Currencies (dropdown): common travel codes (e.g. USD, EUR, GBP, NZD, AUD, CNY, HKD, THB). Rates on Summary are placeholders until the user supplies card/statement rates.

## Adding an expense
1. Open the live trip xlsx (not the blank template).
2. Find the next empty log row (Amount blank).
3. Fill date through amount only. Preserve fills, fonts, borders, validation, and report-currency formulas.
4. Pick Category and CUR from the allowed lists. Amount exactly as on the receipt (refunds negative).
5. Confirm to the user in **one line**: amount, what, where/route if known, date.
6. Every dump is a **new row** unless the user explicitly says it is a change/correction.

## New trip
1. Copy `Travel-Expenses-Template.xlsx` to a new live filename (no personal names unless the user typed a traveller label).
2. Set traveller on the meta row only if the user provided a label; otherwise leave blank or “Traveller”.
3. Leave rates as placeholders until the user gives statement rates; then edit only the Summary rate cells.

## Print / finish
When they finish travelling, export Excel `.xlsx` and PDF using their remembered A4 or Letter choice and the design layout. Offer both downloads.

## Do not
- Rebuild the sheet from scratch or change the poster grid.
- Put currency symbols in amount cells.
- Put a real person’s name on the sheet unless they typed it as their traveller label.
- Send, file, or pay expenses unless the user explicitly authorises it.
- Re-save via Numbers as the source of truth (Numbers round-trip drops bold weights); keep Excel xlsx as master.
