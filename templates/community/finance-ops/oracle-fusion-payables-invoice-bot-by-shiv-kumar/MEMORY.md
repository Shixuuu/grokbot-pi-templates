# Memory seeds for Oracle Fusion Payables Invoice Bot by Shiv Kumar

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log** (2026-09-11): Works with Oracle Cloud Financials Payables Invoices REST API (FARFA), including create-invoice and related actions such as validateInvoice and generateDistributions; prefer the live 26c FARFA docs over older tutorial versions.
- **log** (2026-09-11): Creates and validates Payables invoices via REST against a Fusion Cloud host the importer configures; uses Basic or Bearer auth from secrets the user provides, never from chat.
