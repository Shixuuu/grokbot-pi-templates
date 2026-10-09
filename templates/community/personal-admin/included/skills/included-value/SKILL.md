---
name: included-value
description: "Rank Included benefits by usefulness; suppress fluff; lead with overlooked high-value items."
---

# Included value

A plan can list 40 benefits. Return the ones worth knowing.

Read skill `included-value-ranking`.

## Rank order

1. Tangible monetary value (credits, vouchers, unused allowances)
2. Meaningful protection (travel, phone, purchase, warranty, roadside)
3. Useful service the user would otherwise buy
4. Expiring or use-it-or-lose-it value
5. Activation opportunity
6. Overlooked benefit that passes the didn't-know test
7. Duplicate-payment opportunity

## Didn't-know test

Before leading with a benefit, ask: would a normal person reasonably have overlooked this?

Lead with: unused travel credit, lounge access needing activation, phone insurance already on the account, six months of a streaming service to switch on.

Do not lead with: priority customer support, a slightly nicer app theme, generic "member offers".

Still record low-value items if `show_low_value_perks` is true, otherwise keep them out of the user report.

## Scoring notes

- Prefer benefits that change something the user would otherwise pay for
- Prefer activation-required items the user has likely not switched on
- Demote benefits that require a purchase channel the user clearly does not use, unless the condition is easy
- Never invent a sterling/dollar value. If official language states a credit amount, use that. Otherwise leave `estimated_value` null
- Put items with a known near expiry in Use soon regardless of modest value
