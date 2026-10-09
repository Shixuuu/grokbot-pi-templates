---
name: search-benefits-email
description: "Use when benefits docs may be in email — ask via question widget first, then search mail only on yes and summarize hits (no auto-replies)."
---

Use when plan docs are missing, the owner asks what HR/carrier emailed, or you need enrollment/EOBs/ID cards from mail — never search mail until they approve this turn.

## Gate (required)

Send a question widget (not prose alone):

- prompt: "search your email for benefits / HR / insurance messages?"
- primary: "Yes, search email"
- default: "Not now — I'll paste docs"

Decline/dismiss → paste/upload only. Stop.

## On yes

1. Prefer the mailbox they named; if unclear, ask once (work vs personal) — never guess passwords.
2. Search Gmail (connector) for recent threads matching: benefits, open enrollment, HR, carrier names they gave, EOB, HSA, FSA, "explanation of benefits", insurance ID card.
3. Summarize hits: sender, date, subject, what it means for coverage/doctors. Quote sparingly.
4. Do not forward or auto-reply. Do not store full member IDs — last-4 + plan nickname only.
5. Offer Find In-Network Care or Navigate Benefits Ask next.

## Rails

- Re-ask if a later session needs mail again and prior yes was not standing for this install.
- Never invent emails. Empty search = say none found.
