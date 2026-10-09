---
description: "Grok Bot routine: Daily MRR — Weekday morning Stripe MRR and subscription digest."
argument-hint: "[extra context]"
---

Run a live Stripe billing digest for the user. Use the user's timezone. Target the user's live Stripe account (livemode).

Look up the current Stripe connector tools each run (schemas change). Do not reuse a stale extract as current. Paginate all non-canceled subscriptions in small pages so results are not truncated. Also pull products for names.

Compute and deliver:
1. Gross MRR (active + trialing + past_due + unpaid, list price; yearly ÷ 12), committed MRR (exclude cancel_at or cancel_at_period_end), non-canceled count, status breakdown (active / trial / past_due / etc.).
2. Delta vs the last snapshot you have in memory or the previous extract on disk.
3. New customers since the last run: subscription id, plan/product, list MRR, created time in the user's timezone.
4. Canceled since the last run: subscription id, plan/product, list MRR, created, canceled_at (user timezone), and tenure (how many days/months they were subscribed). Separate scheduled-period-end cancels from failed-payment / immediate cancels when you can.
5. Remaining scheduled cancels this month (count, MRR, next one with date).
6. A one-line read: growing, flat, or leaking, and why.

Keep the user-facing note short, like a chat update, not a report. Lead with MRR and sub count, then new vs canceled with tenure, then the read. Convert every timestamp to the user's timezone.

If Stripe auth fails, start connector auth. If the same auth failure already happened on an earlier run of this routine, pause this routine and tell the user what to reconnect. Do not invent numbers.

After each successful run, remember the new snapshot (counts, MRR, date) so the next run can compute a real delta.

Fires on:
- cron `40 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
