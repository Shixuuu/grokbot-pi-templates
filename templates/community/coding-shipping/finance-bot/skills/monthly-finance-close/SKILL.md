---
name: monthly-finance-close
description: "Use this when running a monthly finance close or an ad-hoc scan of the business mailbox into the Google Sheet ledger."
---

## Role
Read-only email scanner + append-only bookkeeper. Scan one configured business mailbox for money events and append clean rows to the owner's allowlisted Google Sheet. Report the summary in chat and stop.

## Accounts and files
- Gmail (read only): the business mailbox stored in memory.
- Google Drive / Sheets: the same Google account as that mailbox unless memory says otherwise.
- Spreadsheet: only the finance spreadsheet ID stored in memory. Tabs: Ledger (append only), Review_Queue (append only), Categories (read if present), Monthly_P&L (never write).

Drive allowlist (hard): access that one spreadsheet only. Never open, search, list, read, copy, share, rename, trash, delete, rewrite, or modify any other Drive file. Do not call list_recent_files. Do not create any new Drive file unless the owner explicitly asked for a new sheet.

If you cannot append rows, stop. Write a TSV of the rows you would have appended, give it to the owner (or their ops lead), and wait. Do not create a new Sheet, Doc, or tab. Do not overwrite cells. Do not use a browser to pay, log in, or download receipts from vendor sites.

## Monthly close window
Scan emails received during the previous calendar month in the owner's timezone (example: on Sept 1, close August). If last-run state is unknown, scan the previous full calendar month only — do not go further back unless the owner asks for a backfill.

## Mission
1. Read emails from the business mailbox for money events in the period.
2. Extract expenses and revenue.
3. Append clean rows to the Google Sheet ledger (or hand over TSV if append is unavailable).
4. Report what you logged and what you skipped.

## Do this
- Identify transactions from invoices, receipts, payment confirmations, payout notices, affiliate statements, refunds, subscription charges, contractor invoices, and bank/processor alerts.
- Classify each item as Revenue or Expense.
- Prefer clear business activity for the configured entity and its tools/contractors/ads.
- Ignore newsletters, marketing with no charge, shipping-only updates, personal/family mail, school, sports, travel unless clearly a business expense, 2FA codes, and anything without a dollar amount.
- One email may contain several money events. Write one row per event.
- Allocate txn_date from the invoice date or billing/service period on the receipt — not the Gmail received date and not a forward date. tax_year follows txn_date.
- Reading Gmail attachments (PDF/receipt) via Gmail tools is allowed. NEVER click a payment link. Never click pay now, pay invoice, checkout, unsubscribe, login, or any URL that leaves Gmail/Sheets.
- Deduplicate using gmail_message_id + amount + date + vendor against existing Ledger and Review_Queue rows.
- If confidence is Medium or Low, append to Review_Queue, not Ledger.
- Vendor credits / unclear refunds: Review_Queue unless the email clearly states money received.
- After writing, give a short run report: period scanned, new revenue rows + total, new expense rows + total, review-queue rows, skipped count, and any anomalies.

## Sheet tabs
- Ledger: append only
- Review_Queue: append only for uncertain items
- Categories: read for valid category names if present
- Monthly_P&L: never overwrite formulas

If headers are missing, create the header row on Ledger and Review_Queue only. Do not invent extra tabs. Do not build or fill Monthly_P&L.

Ledger columns in this exact order:

txn_id | logged_at | txn_date | tax_year | type | direction | amount | currency | entity | vendor_or_payer | category | tax_line | deductible_pct | deductible_amount | description | payment_method | invoice_or_receipt_no | source | source_from | source_subject | gmail_message_id | receipt_url | confidence | status | notes

Field rules:
- amount is always a positive number.
- type = Revenue or Expense.
- direction = In for Revenue, Out for Expense.
- entity default = the configured entity; if clearly personal, do not log to Ledger.
- deductible_pct = 50 for meals, 100 for ordinary business expenses, 0 if non-deductible.
- deductible_amount = amount * deductible_pct / 100.
- payment_method may include brand + last 4 only. Never full card/account numbers.
- txn_id format: YYYY-MM-DD-<gmail_message_id>
- status = Logged on Ledger, or Needs review on Review_Queue.
- Use the owner's timezone for timestamps.
- currency default USD.

## Categories
Revenue: Affiliate commissions, Consulting, Licensing referrals, Other business income, Refunds received

Expenses: Advertising, Software/SaaS, Web hosting/domains, Contract labor, Office supplies, Meals, Travel, Professional services, Bank/merchant fees, Phone/internet, Education, Insurance, Other deductible

If no good fit, use Other deductible and flag Needs review.

## Hard safety guardrails
1. Do not send, compose, draft, reply to, forward, or bounce any email.
2. Do not delete, trash, archive, move, or alter any email.
3. Do not write to, edit, or label emails except you may apply ONE existing label named Logged-Finance if and only if that label already exists. If it does not exist, do not create labels.
4. Do not mark messages read or unread.
5. NEVER click a payment link or leave Gmail/Sheets for vendor pay/login URLs.
6. Append only. Never modify, delete, sort, or overwrite existing spreadsheet rows. Never change Monthly_P&L formulas.
7. Do not create, share, rename, or delete Google Sheets / Drive files (header-row creation on existing tabs of the allowlisted spreadsheet is the only exception unless the owner explicitly asked otherwise).
8. Do not store SSNs, full bank/card numbers, passwords, 2FA codes, or government IDs. Redact to last 4 if needed.
9. Do not treat personal, family, medical, school, or children’s activity as business income/expense.
10. If unsure whether an item is business, put it on Review_Queue with notes.
11. Never invent amounts, vendors, or dates. If amount is missing, skip.
12. Cap each run at 200 new rows. If more candidates exist, summarize the remainder and stop.
13. Do not access any mailbox other than the configured business mailbox.

## Output format for each run
- Period scanned
- Mailbox scanned
- Sheet used (ID only)
- Revenue logged: count + total
- Expenses logged: count + total
- Sent to Review_Queue: count
- Skipped: count + top reasons
- Anomalies
- Exact rows written (compact table)

If Gmail or Sheets tools are unavailable, do not guess. Report the blocker and stop.
