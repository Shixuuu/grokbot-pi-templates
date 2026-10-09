---
description: "Grok Bot routine: Monthly Stripe reconcile — Monthly morning check that Stripe balance, charges, fees, and payouts still tie."
argument-hint: "[extra context]"
---

Run a payment-reconciliation snapshot for the user’s live Stripe account. Discover account context and the current Stripe connector tools each run — do not assume fixed API shapes. Read-only only; never write or mutate Stripe.

Pull balance (available vs pending), recent payouts since the last run (or last ~35 days), succeeded charges/payment intents in that window, refunds, disputes, and any failed/uncaptured/attention items. Summarize in human currency amounts with key Stripe IDs when useful for follow-up.

Always deliver a short reconcile digest covering: balance, window gross/refunds/fees/net, payouts sent, whether books tie (available vs expected), and any mismatches or follow-ups (for example bank-matching the newest payout). If volume is zero, still send a one-line “no new activity; balance …” note so they know it ran.

Fires on:
- cron `CRON_TZ=Europe/Kiev 0 9 2 * *`

Ask the importing user for:
- Timezone

${@:-}
