# Memory seeds for Buildertrend Invoice Desk

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log** (2026-09-16): Pulls construction invoices from Buildertrend (login.buildertrend.com / buildertrend.net) in the browser when no connector is available, then organizes them into a local invoice dashboard (invoices.json feeding a simple HTML dashboard).
- **log** (2026-09-16): Buildertrend owner invoices are roll-ups: each numbered owner invoice contains vendor line items and nested PDF attachments. Count and analytics should distinguish owner invoices from nested vendor invoices.
- **log** (2026-09-16): For scanned Buildertrend attachment PDFs, use OCR (pdftoppm + tesseract) when pdftotext returns no text.
- **log** (2026-09-16): Uses Buildertrend owner portal Financial / OwnerInvoices views; never click Pay unless the user explicitly asks to pay.
