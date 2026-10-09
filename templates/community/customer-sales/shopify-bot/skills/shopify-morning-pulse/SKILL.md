---
name: shopify-morning-pulse
description: "Use for a short morning store pulse — period revenue, top performers, and low stock by days-of-inventory / sales velocity via the Shopify plugin."
---

# Shopify Bot — morning pulse

Use when the merchant wants a morning check-in, daily pulse, "how's the store?", top performers + what needs restock attention, or a standing routine brief.

## Goal

Deliver a **tight headline pulse** in plain text:

1. Yesterday / period revenue
2. Top 3 products
3. ≤5 low days-of-inventory (DOI) SKUs
4. One suggested action

Low stock must be **days of inventory remaining** from sell-through / sales velocity — **not** raw unit-count thresholds alone.

## Param cheat sheet

| Tool | Argument | Value |
|------|----------|-------|
| `get-product` | **`id`** | Full GID `gid://shopify/Product/...` |
| `get-inventory-levels` | **`productId`** | Same GID form |

Silent-retry bad args. Text-first always.

## Defaults (say them)

- Revenue window: **yesterday** (or last 7d if they asked for a week); compare to prior period when useful
- Velocity lookback for DOI: **30 days**
- Low-DOI flag: **days_remaining ≤ 14** (or merchant threshold)
- Cap low-DOI list at **5** SKUs
- Cap top products at **3**

## Steps

1. Follow plugin rules. `get-shop-info` if currency/timezone unknown. Summarize shop name + currency in one line.

2. **Headline revenue** via `run-analytics-query` (pick one focused query; do not spray):
   - Yesterday-style: `FROM sales SHOW orders, gross_sales, discounts, net_sales, total_sales, average_order_value SINCE -1d UNTIL today COMPARE TO previous_period`
   - Or if they want a longer pulse: `… SINCE -7d UNTIL today COMPARE TO previous_period` with `TIMESERIES day` optional
   - Summarize in text: orders, total/net sales, AOV, vs prior. Never "see the widget."

3. **Top 3 products:**
   - `FROM sales SHOW gross_sales, net_sales, orders, net_items_sold GROUP BY product_title ORDER BY gross_sales DESC LIMIT 3` with the same SINCE/UNTIL
   - Text table: rank, title, sales, orders, units

4. **Low DOI candidates:**
   a. Coarse inventory prefilter with supported `search_products` fields only, e.g. `status:active AND tracks_inventory:true` (optionally `inventory_total:<=50` as a coarse filter — not the final low-stock rule). Summarize first page in text.
   b. For promising SKUs, `get-inventory-levels` with **`productId`** (full GID) → on-hand by location; roll up on-hand.
   c. Velocity: `FROM sales SHOW net_items_sold GROUP BY product_title, product_variant_sku SINCE -30d UNTIL today` (or inventory ShopifyQL with `inventory_units_sold` when available).
   d. Compute:

   ```
   days_remaining ≈ on_hand / (units_sold / lookback_days)
   ```

   - When `units_sold > 0`: compute DOI; flag ≤14d (or threshold).
   - When `units_sold == 0`: **velocity unknown** — fall back to `out_of_stock_somewhere` / low `inventory_total` with **low confidence**; say so explicitly.
   e. List ≤5 flagged SKUs in a text table: product/variant, on-hand, units sold (30d), days remaining, confidence.

5. **One suggested action** (pick the highest leverage):
   - Reorder / correct qty → inventory skill path (`set-inventory` only after confirm)
   - Discount a slow mover that also has high on-hand → slow-movers skill
   - Catalog copy/image fix on a top seller with weak conversion → CRO / catalog
   - If everything healthy: say "no urgent stock risk" + one growth nudge (sales pulse dig or promo)

6. Offer 2–3 next actions (full inventory dig, CRO, create Restock Bot specialist).

## Empty / thin data

- Honest zero: if revenue queries return 0 orders, say so — do not invent sales.
- Still list low-DOI or OOS fallbacks when catalog has stock risk.
- If catalog is empty: say empty; offer new-store seed / catalog create — do not dead-end.

## Output template (always fill in text)

```
Morning pulse — <shop> — <window>
• Revenue: <total_sales> on <orders> orders (AOV <aov>); vs prior: <delta>
• Top 3: 1) …  2) …  3) …
• Low DOI (≤14d or threshold): up to 5 rows — or "none flagged" / "velocity unknown, N OOS low-confidence"
• Suggested action: …
```

## Flexibility

If they only want top sellers, skip DOI. If they only want stock risk, skip referrers. Never invent channels or products. Quiet when used as a routine and there is truly nothing actionable **and** they asked for quiet — otherwise still send the short template.
