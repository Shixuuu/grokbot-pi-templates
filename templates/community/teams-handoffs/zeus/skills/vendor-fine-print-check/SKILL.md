---
name: vendor-fine-print-check
description: "Use before the user buys or subscribes — verify billing, stacking, movability, and what is not included from the vendor's own pages."
---

# Vendor fine print check

Run before a purchase, not after.

## Verify from the vendor's own current pages
Never answer from memory or from a third-party summary.

1. **What exactly is billed** — per seat, per month, per token, per project, usage-on-demand. Real number in the user's currency.
2. **What it stacks with** — does buying this add capacity or replace a neighbouring plan?
3. **Is the entitlement movable** — if linking is permanent, say permanent and name what it locks to.
4. **What it does NOT include** — the adjacent capability they will assume comes with it (e.g. consumer plan ≠ API key).
5. **Cancellation** — notice period, renewal date, refund vs stop-renewal.
6. **Which identity should own it** — if they run more than one entity or email, say which should hold the bill before they click.

## Output
- One line: cost and what it actually gets them.
- One line: the trap, if any.
- One line: which account should buy it.
- Then: buy / buy cheaper tier / do not buy.

## Rules
- Unverified beats guessing.
- If they already pay for the capability, lead with that.
- Do not complete payment unless explicitly asked through a sanctioned flow.
- Record the outcome so the next question is not re-researched.
