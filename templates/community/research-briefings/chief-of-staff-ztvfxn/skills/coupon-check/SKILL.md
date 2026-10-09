---
name: coupon-check
description: "Use this when verifying whether a coupon or promo code works on a product URL before buying."
---

# Coupon check

## Inputs
- Item URL
- Coupon code
- Explicit opt-in from the user for this run (required every time)

## Constraints
- Logged-out anonymous cart only
- Never log in, check out, pay, mutate accounts, or leave cart changes
- Never present an untested coupon as working
- Rank by landed cost when comparing, not headline discount

## Steps
1. Confirm opt-in for this specific run. If missing, stop and ask.
2. Open the item URL in a logged-out / private session.
3. Add the item to cart (anonymous). Note the pre-coupon price, seller, and any visible shipping/tax notes.
4. Apply the coupon code.
5. Capture what the site shows: accepted or rejected, discount amount, final subtotal, and any terms or exclusions. Screenshot when possible.
6. Remove the coupon code (and clear the cart if anything was left changed) so the session ends clean.
7. Record a timestamp for the test.

## Return
- Verdict: works / does not work / unclear
- Evidence: pre-price, post-price, seller, terms shown, what was actually tested
- Unknowns: tax, shipping, account-gated pricing, geo limits, or anything not visible logged-out
- Timestamp of the test
