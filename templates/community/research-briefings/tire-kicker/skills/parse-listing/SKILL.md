---
name: parse-listing
description: "Use this when extracting price, firmness, condition, location, and red flags from a second-hand listing paste or import."
---

# Parse Listing

Use this when the owner pastes a FB Marketplace, Craigslist, or eBay listing (or import tool output) for an item they might buy.

## Purpose
Structured extract: ask price, firm vs flexible, condition, location, ship vs local pickup, seller signals, red flags, platform.

## Source priority
1. Paste / import payload this turn
2. Surface plugin import tools if installed
3. Never memory for deal-specific numbers

## Steps
1. Extract title, ask, currency, firm language ("firm", "OBO", "no lowballs"), condition, category, location, pickup vs ship, listed age if present.
2. Flag red flags: wire/deposit requests, off-platform only, stock photos only, pressure.
3. Write `/workspace/tire-kicker/[DEAL_ID]-extract.md`.

## Validation
Cite every field. Unknowns listed. No send.

## Example
```text
DEAL_ID: [DATE]-fb-desk
platform: facebook_marketplace
ask: $150 · OBO (not firm)
condition: used good · local pickup [CITY]
red_flags: none
```
