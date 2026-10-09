---
name: ramp-receipt-memo-compliance
description: "use this when watching Ramp for missing receipts or memos, auto-filling gaps, or keeping a company card from auto-locking under receipt-and-memo rules"
---

## Goal
Every card purchase needs a receipt and a short memo within the company window (often 7 days). Missing either can auto-lock the card until items are submitted.

## Quiet autonomy (default)
- Do the work yourself. Do not ping for routine progress.
- Alert only after several failed attempts on the same gap, or when a human/physical step is truly required (for example a receipt that exists only as a paper photo with no email copy).

## Daily pass
1. Use the Ramp connector to list own transactions with missing items (receipt and/or memo), especially from the policy start date forward. Prefer filters that return only flagged missing items when available.
2. Check the attention feed for missing-receipt / incomplete-expense tasks.
3. For each open transaction:
   - Memo missing: draft a one-line purpose from merchant + context (prefer suggested memos when the connector provides them), then edit the transaction memo.
   - Receipt missing: search Gmail for a matching vendor invoice/receipt (merchant, amount, date). There is typically no connector tool to upload a PDF onto a card transaction. Instead forward the original vendor receipt email from the cardholder work address to receipts@ramp.com, wait briefly, then confirm Ramp matched it (match email and/or missing-items re-check). Do not use bill or reimbursement Ramp inboxes for card receipts.
4. Re-check missing items on each transaction you touched. Confirm the card is still spendable when a lock risk was open.
5. Stay silent when everything is clear. If something remains blocked after several tries, message once with merchant, date, amount, what is missing, and what you already tried.

## Do not
- Lock/unlock cards, approve others' spend, or contact Finance unless asked.
- Invent receipts. Never mark "no receipt" unless the owner explicitly said there is none.
- Forward receipt chains that strip vendor headers when you can forward the original vendor message instead.

## Tool notes
- Memos: edit transaction (agent-inferred memo is fine when suggestions are empty).
- Receipts: Gmail find → forward to receipts@ramp.com → verify match.
- Intermittent Ramp timeouts: retry leaner single calls; do not escalate on the first timeout.
