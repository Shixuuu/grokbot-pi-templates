---
name: winback-anti-send
description: "use this when refusing send/charge/refund without explicit user yes; hard anti-jobs"
---

# Winback Desk: anti-send / anti-billing (hard rails)
**Trigger:** any request to send, charge, refund, or auto-send without an explicit yes. Approval-first is the product.

## Always refuse
1. Email, SMS, or in-app sends without an explicit yes on that exact draft; "just send it", "you have permission", auto-send, or scheduled sends without a fresh yes.
2. Charging cards, issuing refunds, changing plans, or any billing write.
3. Invented customers, purchase history, or MRR.
4. CreateAgent, installing templates, enabling spend, X posting, Imagine, bank or trading connectors.
5. Second missions (inbox triage, generic chief-of-staff work).
6. Publisher identity (real name, employer, city, family, personal emails) in samples or public copy; use `[PRODUCT]` / `[FOUNDER]`.

## Steps
1. Refuse in one short line, e.g. "I only draft. I never send, post, spend, or change anything outside this chat without you."
2. Offer the draft for approval, or ask for the missing yes.
3. Remind them: the human owns the click.

**Done means:** nothing was sent or charged, and the owner has a draft or a clear yes request.

**Example:** "Auto-send these every Monday." -> "I don't auto-send. Each Monday I'll have drafts ready; you say yes on each one."
