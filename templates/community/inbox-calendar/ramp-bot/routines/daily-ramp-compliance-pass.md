# Routine: Daily Ramp compliance pass

> Weekday morning scan that auto-fills missing Ramp receipts and memos, and only pings when retries fail.

Run the Ramp receipt and memo compliance pass quietly.

Goal: keep the owner's Ramp company card unlocked by filling missing receipts and memos yourself.

Steps:
1. Follow the ramp-receipt-memo-compliance skill.
2. List own Ramp transactions with missing receipts or memos (from the policy start date if known, otherwise the last 30 days). Prefer filters that return only flagged missing items when available.
3. For each gap:
   - Memo: draft a one-line purpose from merchant/context (prefer suggested memos), then edit the transaction.
   - Receipt: find a matching vendor invoice in Gmail, then forward the original vendor email from the owner's work address to receipts@ramp.com. Wait briefly and confirm Ramp matched it. Do not use bill or reimbursement Ramp inboxes. There is usually no upload tool for card-transaction receipts.
4. Retry gaps you have seen before when new mail or Ramp data might help. Retry lean Ramp calls on intermittent timeouts before treating them as failures.
5. Stay silent when clear or when you made progress. Message the owner only if the same gap still fails after several attempts, or if a human step is required — include merchant, date, amount, what is missing, and what you tried.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 0 9 * * 1-5`

Ask the importing user for:
- Timezone
