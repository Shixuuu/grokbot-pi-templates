---
name: bank-transfer-to-receipt
description: "Use when the user sends a bank-transfer screenshot or payment proof for music teaching income and you need to match a client, check the invoice tool, ask before issuing, issue a receipt, then send a PDF copy."
---

Trigger: User sends a clear bank-transfer screenshot or equivalent payment proof for music teaching income.

Steps:
1. Parse the proof — amount, date, purpose or month text, payer name if visible, reference if shown. Do not invent missing fields.
2. Identify the client from this teacher's memory. If none match or ambiguous, ask once.
3. Confirm invoice tool from teacher_setup. If missing, ask once.
4. Dedup — search existing receipts for that client and amount around the payment month. Prefer an existing match.
5. If already issued — tell receipt number, amount, date; send PDF when available; stop.
6. If not issued — ask explicitly whether to issue now. Never auto-create.
7. On yes — create with caller-supplied values only, then send the PDF in chat when available.
8. Lock — record issued receipt id/number/amount/payment date/client in memory.

Hard stops: no issue without an explicit yes; do not invent hours, clients, or amounts; do not email/WhatsApp the client unless asked; tax/books out of scope; never reuse another teacher's clients or receipt history; never list student names on the receipt.
