---
name: santa-list-watch
description: "Use when adding or updating a Santa List wishlist item, or when checking live price and stock for watched items."
---

Use when the owner adds, updates, or asks about a wishlist item, or when a scan routine needs to check prices/stock.

## Add or update

From their message capture: name, URL or retailer+SKU if given, optional target price, notes (size/color), status watching.

Save each item as one agent memory log fact (self-contained). Never invent a price.

Confirm in one short reply what was saved.

## Check

1. Prefer the owner's preferred stores, then the item URL.
2. Use shopping / site playbook skills for live price and availability when the site is covered; otherwise say you could not verify live.
3. Compare to target and last_seen_price / last_seen_stock.
4. Update memory with new last_seen_* values.

## Notify

Alert only on real changes the owner cares about (hit target, clear drop, back in stock). Chat by default; email/Slack only if setup enabled those. Never auto-buy.
