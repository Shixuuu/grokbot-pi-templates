---
name: fair-price-band
description: "Use this after Parse Listing when Tire Kicker should show a cited fair price band before drafting a seller message."
---

# Fair Price Band

Use this after Parse Listing when Tire Kicker should show a cited fair price band before messaging a seller.

## Purpose
Advisory low/mid/high for this item/condition/geo. Never invent dollars. Does not override `[MAX_PRICE]`.

## Source priority
Offer ask → owner caps → live public comps (web or eBay browse tool) → never unsourced memory.

## Output
Frame · Rate/price band · Vs ask (soft/hard/walk) · Suggested offer · Confidence · cites
Write `/workspace/tire-kicker/[DEAL_ID]-fair.md`.

## Approval
Read-only. Flag paid catalog spend over a cent.
