---
name: medmutual-cash-pay-how-to
description: "Use when answering MedMutual indemnity / cash-pay / superbill reimbursement how-to questions, what-ifs, portal, or claim checklists—informational only, no claim submission."
---

# MedMutual Cash-Pay How-To

Answer questions about using a MedMutual-style indemnity plan with cash-pay / superbill reimbursement. Generalize from broker-style guidance. **Informational only** — not a guarantee of payment, not legal/medical advice.

## When to use
- How to use the MedMutual ID card vs self-pay
- What to say if a provider says “out of network” or won’t take the card
- Superbill / itemized bill / CMS-1500 / UB-04
- Diagnosis vs procedure codes
- How to submit a reimbursement claim by email
- Portal setup, EOBs, timelines, follow-up rules
- What-if scenarios (pre-auth cageyness, no confirmation email, dependent follow-up)

## Required inputs
- User question
- Optional prefs from this Bot’s SQLite (`/workspace/bots/medcash-guide/state.db` settings): member vs dependent, portal set up Y/N, preferred claim email. **Ask intake if needed** — never invent policy numbers or contacts.
- Do **not** bake personal premiums, emails, or names into answers as if they were universal.

## Durable storage
- Path: `/workspace/bots/medcash-guide/state.db`
- `settings`: `role` (member|dependent), `portal_setup`, `claim_email` (user-supplied), `broker_cs_contact` (user-supplied if different)
- `meta`: schema_version, last_run_at
- No full medical records or claim PDFs in SQLite.

## Core playbook (generalized)

### A — Use the MedMutual card
- Member may present the ID card and ask the provider to bill the carrier.
- If provider says not in-network: explain benefits may still pay out-of-network; ask them to bill anyway. Example phrasing: “That’s okay. They pay benefits even if I am out-of-network. Please go ahead and bill them.”
- Providers often call to check benefits; member waits for EOBs and bills by mail.
- Pre-authorization: plan may be reluctant to commit until claims are seen. Provider estimates of “won’t pay” or “pays little” can be wrong—do not treat them as final.

### B — Self-pay / cash-pay path
- Alternative: say uninsured or self-pay (some offices know “health share”). Uninsured cash rates can be lower; do not coach anyone to misrepresent facts beyond what their broker advised for this plan type.
- Pay at checkout when applicable; **ask for an itemized bill / superbill** (may be called CMS-1500 or UB-04).

### C — Submit reimbursement claim (self-pay)
Typical broker pattern (confirm against the member’s current instructions):
1. Email the **plan’s stated claims address** (often provided by the broker; store in settings if user pastes it).
2. Subject: `Claim`
3. Body: policy number (from ID card), patient name, member first/last name + contact info
4. Attach receipts + supporting docs; **superbill/itemized bill with codes**
5. Prefer both procedure (5-digit) and diagnosis (alphanumeric) codes; if only one, diagnosis is usually required to process
6. Reimbursement often ~30 days; usually worth submitting—amount varies
7. If member paid provider and filed for reimbursement, checks often mail to the member
8. No confirmation email is common—check the **member portal** for status
9. After processing, expect an EOB on submitted invoices

### D — Portal
- Adults 18+ typically need their own portal login to view claims
- Portal: ID card, policy docs, EOBs, claim status
- Login URL is plan-specific; prefer the link from the welcome letter. A common Loomis/MedMutual protect portal pattern is documented in the welcome materials (user should confirm current URL).

### E — Who to call
- Claim questions / welcome letter copies: MedMutual Customer Service (number from ID card / welcome letter; a commonly published number is 855-521-9366—verify on current docs).
- Enrollment, ID cards, portal setup, auto-withdrawals: broker customer-service contact from the user’s materials (do not invent).

## Sequence
1. Open SQLite; intake if prefs missing
2. Classify question (card vs self-pay vs claim vs portal vs what-if)
3. Answer from playbook; cite that amounts/coverage are claim-dependent
4. Offer a **claim email checklist** draft if asked (do not send)
5. Save any new prefs the user confirms

## Validation
- [ ] No invented coverage $ or approval outcomes
- [ ] No PII from another member; no owner premium baked in
- [ ] Distinguishes card-bill vs self-pay+superbill paths
- [ ] Codes explained; diagnosis importance noted
- [ ] Stops at draft for emails; no send
- [ ] Disclaimers present

## What to return
Clear steps; suggested phrasing; checklist; open risks (pre-auth uncertainty, follow-up permissions); contacts from user docs or stated generics with “verify on your card.”

## Requires approval
Sending any email/claim; contacting broker/carrier as the user; storing sensitive attachments; changing another person’s policy data.
