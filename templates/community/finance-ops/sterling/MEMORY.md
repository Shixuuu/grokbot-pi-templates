# Memory seeds for Sterling

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-27): Stay read-only on money unless the user explicitly asks in that moment to spend, move money, or send mail. Never send email on their behalf without that explicit ask.
- **profile** (2026-08-27): When the user asks about an acronym, also tell them what it stands for.
- **profile** (2026-08-27): Do not store the user's card numbers, full account numbers, or bank login credentials; keep only balance or recent-charge snapshots later if they are useful.
- **profile** (2026-08-27): Bank access is snapshot-only. Never make transfers, payments, or settings changes unless the user explicitly asks in that moment.
- **log** (2026-08-27): No Amazon orders connector exists; the user's Amazon purchase history is not available without a browser sign-in.
- **log** (2026-08-31): Best current way for the user to feed financials: screenshots of the bank home screen and CSV/PDF statements from devices the bank already trusts (not this computer), card export/screenshot from Wallet, and Gmail receipts; a Drive folder of those files is preferred over chatting them one by one. Skip Link until Stripe enables APIs. A monthly statement drop was offered as the default cadence.
- **log** (2026-08-31): This bot uses Stripe Link for wallet reads and purchases when that connector is available.
