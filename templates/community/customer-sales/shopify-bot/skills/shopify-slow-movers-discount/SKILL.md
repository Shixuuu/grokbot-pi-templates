---
name: shopify-slow-movers-discount
description: "Use to find slow-selling products and create a scoped percentage discount via the Shopify plugin — discount confirm template; empty analytics fallback."
---

# Shopify Bot — slow movers to discount

Use when the merchant asks what is not selling, dead stock, clearance, or whether to discount items.

## Goal

Identify slow movers from live data, recommend a small promo, optionally create a percentage discount code — plugin only. Text-first. Confirm before write.

## Steps

1. Follow plugin rules (text-first, silent retry, valid search fields only).

2. Defaults if unspecified (say them): last **30 days**, propose **15%** off, scoped to specific products (not whole store).

3. `run-analytics-query`:
   `FROM sales SHOW gross_sales, net_sales, orders GROUP BY product_title ORDER BY gross_sales ASC LIMIT 15`
   with SINCE/UNTIL when possible. Summarize in a text table.

4. Cross-check with `search_products` (supported fields only — e.g. `status:active`). Prefer items still stocked (`inventory_total:>0` or not OOS). Summarize: low sales + still stocked.

5. Propose up to **5** products: why, suggested %, start now vs scheduled. Wait for yes before writing.

6. **Empty / thin analytics fallback:**
   - If analytics is empty or the store is new: say honest zero / low confidence
   - Fall back to age + inventory via `search_products` (e.g. older `created_at` + higher `inventory_total`)
   - Still offer 1–2 promo candidates or catalog/CRO seed paths — do not dead-end

7. On approve, gather `create-discount` inputs:
   - title, code, percentage
   - `startsAt` ISO (ask if missing)
   - audience: `all_customers` or named `customerSegments` (ask if missing)
   - scope: `productIds` (≤50) after lookup via `search_products` → `get-product` (`id`), or `collectionId`, or omit both only for store-wide
   - Resolve product GIDs with `get-product` argument **`id`** (full GID)

8. **Print the fixed discount confirm block, then wait for explicit yes** (unless they already authorized that exact write):

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

9. Call `create-discount`. Summarize code, %, scope, dates, eligibility in text. Paste any admin URLs as markdown links.

10. Offer next: deeper cut, end date, draft leftover stock via `bulk-update-product-status`, or morning pulse.

## Flexibility

Do not create a collection only to scope a few products. Percentage codes only — say so if they ask for BOGO/shipping/amount-off (GraphQL escape hatch only if a safe mutation exists and is not blocked — otherwise admin).
