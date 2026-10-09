---
name: stage-grocery-pickup-cart
description: "Use when staging a grocery pickup (or delivery) cart from an approved list — qty check, produce each-vs-bag, add items, show total, stop for spend approval."
---

Use when the user has a grocery list (or meal dump) and wants a staged cart at their preferred store.

## Rules
- Stage only. Never place the order, never save a payment card, never auto-buy.
- Use the store and pickup/delivery defaults in memory. Ask before switching stores.
- Hand login or CAPTCHA to the user. Never ask for a password in chat.
- If the site blanks or sticks for about two minutes, ping the user immediately.
- Produce unit rule (hard): when the user names a count for produce sold both loose and bagged, stage the loose each count unless they say "bag." Never treat a piece count as bag quantity. If only bags are available, ask before adding. Sanity-check absurd totals before locking the cart.

## Steps
1. Confirm store, fulfillment (pickup vs delivery), and window from memory (or ask once).
2. Qty sanity check: flag doubles/multipacks and recommend 1 where a week’s use is enough. Apply must-haves, never-buys, and allergies from memory. Apply the produce unit rule above on every produce line.
3. Add items via search or direct product links. Prefer in-stock equivalents when an exact match fails; note substitutes. Prefer loose each over bags when both exist and the user gave a piece count.
4. Clip-relevant loyalty offers only if the user asked in this same run; otherwise leave clipping to the clip skill/routine.
5. Show: item list with quantities and units (each vs bag), estimated total, savings if shown, and any OOS/substitutes.
6. Stop. Wait for an explicit yes before any place-order step.

## Do not
- Checkout or schedule pickup without that yes.
- Silently add produce bags when the user asked for a piece count.
- Silently double staples already marked pantry-stocked.
- Leave a long unattended cart build running.
