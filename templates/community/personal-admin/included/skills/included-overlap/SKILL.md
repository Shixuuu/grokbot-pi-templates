---
name: included-overlap
description: "Find cases where the user pays separately for a service already included in a plan they hold."
---

# Included overlap

After a verified included service exists, check whether Gmail shows a separate recurring payment for an equivalent service.

## Evidence required

Included side: verified official benefit on a likely_active or confirmed_active product, with tier known enough to compare.

Paid-separately side: recent billing, renewal, or receipt for that service or a close substitute. Marketing mail is not enough.

## States

- `likely_overlap` — same service, included tier looks as good as the paid one
- `possible_overlap` — same brand or category, tiers not yet compared
- `not_equivalent` — included version is a lower tier, trial, or different product

Never call two services equivalent without checking tiers and features on official pages.

## Output language

Possible overlap
Your [plan] appears to include [Service] at no additional charge.
I found evidence you're also paying [amount]/[period] directly.
Before cancelling anything, I need to verify that the included version provides the same tier.

## Never

- Auto-cancel
- Prepare cancellation steps unless the user explicitly asks
- Suggest cancelling insurance or a financial product without making the coverage difference obvious
