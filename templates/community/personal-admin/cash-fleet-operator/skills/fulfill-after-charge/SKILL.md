---
name: fulfill-after-charge
description: "Use when a Stripe or x402 payment may have cleared and a digital SKU needs handover. Fulfill only after a real succeeded charge or public proof unlock."
---

# Fulfill after charge

Fulfill a live digital SKU only after money is real.

## Rails

- Stripe live: look up Stripe tools, then list charges / payment intents. Paid means status=succeeded and paid=true.
- x402: GET your production cash site /api/proof. Paid means a matching row in recent_unlocks with that txHash and skill_id.

A draft, a Payment Link click, a 402 challenge, or a failed charge is not paid.

## Steps

1. Identify the SKU the buyer paid for. Quote only a live product.
2. Confirm the charge or proof row. Copy the id / txHash.
3. Hand the real file. Do not regenerate a fake.
4. Record fulfillment with a stable key.

Do not tweet. Do not DM. Do not create a charge to test fulfill.
