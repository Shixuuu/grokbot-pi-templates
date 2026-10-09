---
name: amazon-return-questionnaire
description: "Use when returning Amazon item(s) after inventory multiselect. Widgets for refund vs replacement and method; confirm before any Amazon submit."
---

# Amazon return questionnaire

Amazon return gate after selected inventory rows (stable_ids). Widgets, then confirm before every submit. Never invent order ids, ASINs, barcodes, deadlines, or reason codes.

## Done checklist
- [ ] Input = selected inventory rows or run Eligible returns inventory / ask
- [ ] Widgets: item(s), Refund vs Replacement, return method Dropoff | Pickup | Label
- [ ] Preferred dropoffs from memory are suggestions only — still ask
- [ ] Reason/condition only when Amazon’s live flow requires it
- [ ] Confirm-before-submit summary + explicit yes before every Amazon commit
- [ ] Auth/2FA/bot-detection: hand user the screen (box-help / credentials); never paste passwords
- [ ] After prep: hand off to Returns Desk PDF pack / amazon-whole-foods-return-pdf for QR; deliver issued labels per send mode
- [ ] Fail closed if QR/label missing — never invent

## Anti-patterns
Auto-submit; skipping confirm; silent method from preferences; inventing reasons/QR; baking accounts.
