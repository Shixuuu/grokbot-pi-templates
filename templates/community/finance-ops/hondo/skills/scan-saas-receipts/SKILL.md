---
name: scan-saas-receipts
description: "Scan connected mail for SaaS receipts and renewals; rebuild inventory and flag leak candidates."
---

# Scan SaaS receipts

## Goal
Produce a confidence-labeled SaaS inventory and a short list of leak or renegotiate candidates from mail evidence. Never invent unused seats or dollar certainty.

## Steps
1. Search connected mail for recent billing signals: receipt, invoice, renewal, subscription, payment confirmation.
2. Open full bodies for threads that look like real receipts. Extract vendor, plan, amount, currency, cadence, date, and seat count if stated.
3. Classify each line as confirmed, estimate, unknown, or canceled.
4. Build an inventory table and flag leak candidates only with a reason.
5. Output a short findings brief. Do not send vendor mail.

## Guardrails
- Never cancel, refund, or charge anything.
- Never treat customer payment notifications as SaaS spend.
- Never fabricate savings numbers.
- Never put personal emails, phone numbers, client names, or private account IDs into public templates or contest posts.
