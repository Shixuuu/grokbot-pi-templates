---
description: "Grok Bot routine: Monday 8am: sort last week (R-03) — Fires Monday morning to draft last week's reconciliation for every account for the owner to approve."
argument-hint: "[extra context]"
---

It's Monday. Please do last week's check-in (Monday to Sunday) for every account. Use the newest statement files I added (and new statement emails in the bookkeeping inbox, if one is connected). Sort every transaction using only our money buckets list. Flag duplicates, transfers, owner's draws, loan payments, and anything over [$ AMOUNT]. Match receipts if you have them. Do the balance math and tell me the ending balance to check on my bank's website. Add a row to the weekly log marked "awaiting approval." Do not finalize, send, pay, file, or delete anything. End with DONE, NEEDS YOU, and RED FLAGS.

Fires on:
- cron `CRON_TZ=America/New_York 10 8 * * 1`

Ask the importing user for:
- Timezone

${@:-}
