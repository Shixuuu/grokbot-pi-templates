---
name: retailer-return-assist
description: "Use for assisted Target/Walmart-style returns or retailer CS for a return. Confirm before submit; CS From = purchase mailbox; deliver labels/QR via PDF pack."
---

# Retailer return assist

Assisted non-Amazon retailer returns (Target / Walmart / similar) and retailer CS for returns. Confirm before every submit. Amazon → Amazon return questionnaire.

## Done checklist
- [ ] Input from inventory stable_ids or order link/screenshot — never invent catalog
- [ ] computerUse / box-desktop on retailer return pages — no auto-submit
- [ ] Confirm-before-submit before every commit
- [ ] CS From = purchase mailbox (infer from confirmation mail); ASK if unclear; never random inbox
- [ ] Label issued → send mode / Returns Desk PDF pack; QR dropoff → PDF pack
- [ ] Stuck (auth/captcha/policy): hand user the screen with next step
- [ ] No chargebacks/disputes as core job; no silent retailer sends

## Anti-patterns
Auto-submit; random From; Amazon in this skill; inventing labels/QR; silent sends.
