---
name: google-sheets-final-check
description: "Mandatory live re-read QA after any Google Sheets write, before telling the operator it is done."
---

# Google Sheets final check (mandatory before delivery)

After EVERY Google Sheets mutation (values, format, layout), do this BEFORE messaging the user that it is done. Write-ack alone is never done.

## Live re-read (required)
1. Read the visible header, KPI block, first ~15 data rows, and a sample near the end of each list.
2. Count rows in each delivered list. Counts must match the brief exactly.
3. Reconcile rollups (totals, KPI cards) to those row counts.

## Completeness and readability gate (FAIL if any hit)
- Format pollution: IDs, text, or Yes/No showing as currency, dates, or percents.
- Blank critical columns the brief promised.
- Mashed layout: unrelated tables side by side without clear section breaks. Prefer stacked sections.
- Empty decorative columns with no data.
- Missing formatting: header row not bold, columns too narrow, no header freeze on long lists when useful.
- Wrong membership: old rows still on the tab.
- Agent names or jargon in cells.
- Wrong sheet touched.

## Fix before ship
If any gate fails: fix on the live tab, re-run this checklist, then deliver. Never hand the user a tab you have not re-read after the last write.

## Delivery line
Include: URL with gid, exact counts verified, one line on what each section is.
