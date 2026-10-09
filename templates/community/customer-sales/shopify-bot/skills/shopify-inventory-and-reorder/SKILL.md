---
name: shopify-inventory-and-reorder
description: "Use for stock checks, low inventory by days-of-inventory/velocity, reorder lists, and safe quantity corrections via the Shopify plugin."
---

# Shopify Bot — inventory and reorder cues

Use when the merchant asks about stock, low inventory, reorder, out of stock, restock, or days of inventory remaining.

## Goal

Produce a short reorder list from live store data using **days of inventory (DOI) / sales velocity** when possible, and optionally correct quantities — Shopify plugin only. Text summaries always.

## Param cheat sheet (never swap)

| Tool | Argument | Value |
|------|----------|-------|
| `get-product` | **`id`** | Full GID `gid://shopify/Product/...` |
| `get-inventory-levels` | **`productId`** | Same full GID form |

Bare numeric IDs are rejected for `get-product` — `search_products` first. Silent-retry bad args; never show the failure as the merchant answer.

## Steps

1. Follow plugin rules. Call `get-shop-info` if currency/timezone unknown. Summarize shop context in text.

2. Defaults if missing (say them out loud):
   - Lookback: **30 days**
   - Low-stock flag: **days_remaining ≤ 14** (or merchant threshold)
   - Do **not** rely on raw unit-count thresholds alone when velocity is available

3. Find candidates with `search_products` using **only supported fields** (invalid fields silently return everything):
   - Examples: `status:active AND tracks_inventory:true AND out_of_stock_somewhere:true`
   - Or: `status:active AND tracks_inventory:true AND inventory_total:<=N` (N as a coarse prefilter only)
   - Populate `search_summary` with a plain-text heading (e.g. "Your low-stock tracked products")
4. Summarize the first page in text (title, status, inventory_total, id/GID). If `pageInfo.hasNextPage`, offer refine vs load more — do not auto-paginate the whole catalog.
5. For the top problem products (typically 3–8), call `get-inventory-levels` with **`productId`** = full product GID. Summarize location → available / on-hand qty in text.

6. **Sell-through / velocity (required for DOI low-stock):**
   - `run-analytics-query` for units sold in the lookback window, e.g.:
     - `FROM sales SHOW net_items_sold GROUP BY product_title, product_variant_sku SINCE -30d UNTIL today`
     - or inventory ShopifyQL when available: `FROM inventory SHOW ending_inventory_units, inventory_units_sold, sell_through_rate GROUP BY product_title, product_variant_title SINCE -30d UNTIL today`
   - Summarize in text tables — never "see the widget."

7. **Days of inventory formula:**

   ```
   days_remaining ≈ on_hand / (units_sold / lookback_days)
   ```

   - Only when `units_sold > 0` in the lookback window.
   - If `units_sold == 0`: say **velocity unknown**; fall back to `out_of_stock_somewhere` / `inventory_total` with **low confidence**.
   - Flag SKUs with `days_remaining ≤ 14` (or merchant threshold).

8. Output a reorder table in text:

   | Product / variant | On-hand | Units sold (Nd) | Days remaining | Confidence | Suggested action |
   |-------------------|---------|-----------------|----------------|------------|------------------|
   | … | … | … | … or unknown | high/low | reorder / watch / ignore |

9. **Stock correction path** (write confirm first):
   - Confirm product, location, new qty, reason.
   - `get-inventory-levels` with `productId` → then `set-inventory` with `compareQuantity` and a reason (`received`, `correction`, etc.).
   - Re-fetch and summarize live levels in text.

10. Offer 2–3 next actions (morning pulse, slow-mover discount, archive, dig into one SKU).

## Silent retry

If `get-product` / `get-inventory-levels` / search errors due to wrong arg name or bare ID: correct and retry silently. Do not narrate the failure to the merchant. Honest zero results when a correct query returns nothing.

## Flexibility

Skip deep analytics only if they explicitly want "show me zeros / OOS only" — still state that DOI was skipped. Never invent supplier POs. Never redirect to admin Inventory when these tools cover it.
