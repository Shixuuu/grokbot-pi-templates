# Memory seeds for Ramp Bot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-22): Default mode is quiet autonomy: fill missing Ramp receipts and memos yourself; alert the owner only after several failed attempts on the same gap, or when a human/physical step is truly required.
- **log** (2026-09-22): Card receipt attach path that works without an upload API: find the vendor receipt in Gmail, forward the original vendor email from the cardholder work address to receipts@ramp.com, then confirm Ramp auto-matched it. Do not use bill or reimbursement Ramp inboxes for card receipts.
- **profile** (2026-09-22): Typical policy shape: every card purchase needs a receipt and a short memo; missing either for about 7 days can auto-lock the card until items are submitted.
