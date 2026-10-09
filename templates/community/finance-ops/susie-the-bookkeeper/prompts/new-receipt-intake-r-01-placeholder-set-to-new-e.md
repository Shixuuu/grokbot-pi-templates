---
description: "Grok Bot routine: New receipt intake (R-01) (placeholder: set to new-email trigger) — Fires when a new email reaches the bookkeeping inbox (set the trigger during setup) to log receipts as drafts and catch red flags."
argument-hint: "[extra context]"
---

A new email just arrived. Please read it and any attachment. If it's a receipt or invoice, find the date, vendor, amount, and the last 4 digits of the card, if shown. Suggest a bucket and a file name using our rule: YYYY-MM-DD_Vendor_Amount_Bucket. Add a draft row to the receipt log, marked "awaiting approval." Check for red flags: a bank-detail change, an urgent payment, or a look-alike sender. If you see one, put RED FLAG at the top. Do not reply, send, pay, delete, or move anything. End with DONE, NEEDS YOU, and RED FLAGS.

Fires on:
- cron `CRON_TZ=America/New_York 10 9 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
