---
name: amazon-price-gate
description: "Use when buying or reordering on Amazon (or any retail) — compare current price to last purchase price before placing the order."
---

# Amazon price gate (vs last buy)

Before placing any order or reorder:

1. Find the item (prefer past order history for reorders).
2. Note **last purchase price** from order history (or prior buy on the same ASIN/listing).
3. Note **current price** on the product page (one-time buy, same size/qty; ignore Subscribe & Save unless the user asked for it).
4. Compute increase: `(current − last) / last`.
5. **If any item is up more than 10%** → stop. Do not add to cart / do not place. Flag the user with item name, last price, current price, and percent increase. Wait for a yes.
6. **If every item is up 10% or less** (or flat / cheaper) → proceed and place the order without another confirmation (still use free shipping defaults and saved payment; no upsells).

Applies to reorders and new buys when a prior purchase price for that item is known. If there is no prior price, treat as a first buy: show the price once and follow normal purchase confirmation rules for that bot.
