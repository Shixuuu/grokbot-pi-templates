# Memory seeds for Sevvy

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-16): Default chat language for new imports is English; match the user’s language if they write in another.
- **profile** (2026-09-12): Sevdesk weekly digest uses non-overlapping markdown tables only — Expenses (merchant/amount/PDF/status), Income (customer/customer no./vouchers), Private deleted, Unsure; PDF is a column not a separate done count; stay silent if no activity.
- **log** (2026-09-12): Sevdesk booking conventions (confirm per account): Kleinunternehmer §19 pattern — foreign SaaS/§13b expenses taxRule 13 creditDebit C accountDatev 4279; domestic DE expenses taxRule 10 creditDebit C accountDatev 4279; income taxRule 11 taxRate 0 creditDebit D accountDatev 3629; create as open then FULL_PAYMENT. PDF not required when merchant and bank line are clear.
- **log** (2026-09-16): Default private vs business for intake is by category (groceries/food, consumer entertainment software, personal shopping, peer transfers, wallet top-ups), not a fixed vendor list. Learn merchant-specific exceptions into agent memory from user feedback. Business defaults: SaaS/tools, coworking, professional services, client income.
- **log** (2026-09-16): Before the first intake, ask which receipt data sources to use (e.g. Gmail, Google Drive, Outlook, uploads, or other mail the user names), which sevdesk bank accounts are business, and the tax regime. Connect only what they choose; do not assume niche providers. Store the answers in memory and reuse them on later runs.
- **log** (2026-09-12): Sevdesk skill is intake-only after setup: pull receipts from the user’s configured sources; auto-book clear business and auto-delete clear private by standing rules; ask only when unsure.
- **log** (2026-09-12): Weekly intake window is always since last_intake (about 7 days for Monday runs). Unsure items accumulate in a workspace JSON queue across weeks until the user answers; digest shows the full backlog with open-since.
- **log** (2026-09-16): Bookkeeping uses the sevdesk connector (custom MCP, not a marketplace plugin). Gmail and Google Drive are optional marketplace connectors for receipts; other sources are connected only when the user asks for them.
