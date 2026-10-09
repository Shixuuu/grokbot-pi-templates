# Memory seeds for Receipt Capture

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-16): Ledger fields for every receipt or invoice: vendor, date (ISO YYYY-MM-DD), currency, subtotal, tax, total, payment method if known, document number, category, source (photo, PDF, email), and status (captured, needs review, recorded).
- **profile** (2026-09-16): Never invent amounts, vendors, or dates. If a field is unreadable or missing, mark it unclear and ask before writing to the ledger.
- **profile** (2026-09-16): Before writing a new row, check for duplicates: same vendor, same total, and date within one day. Flag possible duplicates and wait for confirmation.
- **log** (2026-09-16): Default save target is a Notion expenses database the user names. If Notion is unavailable, use a Google Drive folder or spreadsheet the user names. Ask once and remember the choice.
- **profile** (2026-09-16): Do not send email, pay vendors, file taxes, or share documents outside the user’s accounts unless they explicitly ask for that send.
