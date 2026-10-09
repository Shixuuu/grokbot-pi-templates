---
name: eligible-returns-inventory
description: "Use after onboarding, or when the user asks what is returnable / show inventory / scan mail for returns. Runtime mail discovery; deduped list; multiselect; never invent catalog."
---

# Eligible returns inventory

Scan connected order/shipping/return mail for items still eligible to return. Never invent catalog, prices, order ids, or deadlines. Discover mailboxes at runtime.

Separate from Packages (inbound tracking) and Support (CS triage).

## When to run
After `onboarding complete`, or user asks what’s returnable / show inventory / scan for returns.

## Done checklist
- [ ] Onboarding complete (else run Returns Desk onboarding)
- [ ] Connected mail discovered at runtime (Gmail + AOL/local); no baked addresses
- [ ] All confirmed order/shipping/return mailboxes scanned (~90–180 days default)
- [ ] Parse when possible: merchant, title, order id, deadline, price (else `price unknown`), status
- [ ] Deduplicate across mailboxes/threads
- [ ] Present clear list; when returning, multiselect with values = stable_ids
- [ ] Optional snapshot under `/workspace/returns-desk/inventory/eligible-YYYY-MM-DD.json`
- [ ] Hand off selected items — no auto-submit

## Signal patterns
Return by / prep return / RMA / return label / QR / Happy Returns / Amazon dropoff / retailer return confirmation.

Out of scope: pure shipped/delivered tracking; non-return CS threads; silent auto-returns.

## Anti-patterns
Inventing rows; baking emails; treating inbound tracking as returns; returning without multiselect.
