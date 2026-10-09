---
name: shopify-promos-discounts
description: "Use to create percentage discount codes scoped to products, collections, or segments via the Shopify plugin — fixed confirm template before create-discount."
---

# Shopify Bot — promos and discount codes

Use when the merchant wants a percentage off code, sale code, or promo scoped to products/collections/segments.

## Goal

Create one clear percentage discount with confirmed start and audience — plugin only. Always print the fixed confirm block before `create-discount`.

## Steps

1. Follow plugin rules (text-first, silent retry).

2. Collect: title, code, percentage (1–100). Defaults only if they said "just make something" — still confirm before write.

3. Scope:
   - Named products → `search_products` (supported fields only) / `get-product` with **`id`** = full GID → `productIds` (≤50). Also check `search_collections` if the name could be a collection; if both match, ask which.
   - Named collection → `collectionId`
   - Whole store → omit both
   - Do **not** create a collection only to hold a few products for the discount

4. Optional extras: `endsAt`, `minimumPurchaseAmount` or `minimumQuantity` (mutually exclusive).

5. **Required — print this fixed confirm block before `create-discount`**, then wait for explicit yes (unless they already authorized that exact write):

```
Confirm discount
- Title: …
- Code: …
- Percent off: …%
- Scope: … (product titles + ids / collection name+id / store-wide)
- Starts: … (ISO or "now")
- Ends: … (ISO or "none")
- Audience: … (all customers / named segments)
Reply yes to create, or tell me what to change.
```

   Required fields in the block:
   - `startsAt` ISO (now vs scheduled)
   - audience: `customerEligibility: all_customers` or `customerSegments` names that exist on the store

6. Call `create-discount`. Summarize in text (code, %, scope, dates, eligibility). Paste any returned admin/URLs as markdown links. Never "see the widget."

7. Offer next: slow-mover targeting, end date, attach to a marketing pulse, or create Shopify Growth Bot specialist.

## Flexibility

If they want BOGO, free shipping, or amount-off, say this tool is percentage codes only; use GraphQL escape hatch only if a safe mutation exists and is not blocked — otherwise admin. Silent-retry bad args; do not invent product ids.
