---
name: skroutz-cart-preparation
description: "Use whenever preparing a Skroutz cart or shortlist — always apply έως μεθαύριο (fbs=1) and report a text list without screenshots unless asked."
---

Use this whenever searching products on Skroutz.gr, comparing shops, or adding items to the cart.

## Always-on rules

These apply on **every** Skroutz cart prep — not optional:

1. **Soon delivery only:** Only consider products/offers that pass the **έως μεθαύριο** (by day-after-tomorrow) filter. Multi-day windows such as “4–8 εργάσιμες” are not acceptable unless the user explicitly overrides.
2. **Report as a text list:** After search or cart prep, send a clear text list (name, key specs, price, seller if relevant, link). Do **not** attach screenshots unless the user asks.

## How to apply the delivery filter

1. Open the relevant Skroutz category or search results for `{product}`.
2. Turn on **έως μεθαύριο**. Prefer URL param `fbs=1` when constructing results URLs (e.g. `https://www.skroutz.gr/c/.../....html?fbs=1` or search URL + `fbs=1`).
3. Confirm the active filter chip **έως μεθαύριο** is visible before picking items.
4. On the product page, still verify the chosen merchant offer is soon-delivery — not a long business-day range.

## Cart / checkout

- Add only filtered, soon-delivery offers.
- If a preferred brand only appears outside the filter, skip it or ask the user — do not cart a slow offer to fill a quota.
- Prep the cart only; the user handles checkout unless they ask otherwise.
- Honor other constraints from the request (brand, size, capacity, max price, quantity, etc.).

## Inputs

- `{product}` / category / constraints from the user’s request.
