---
name: shopify-sales-marketing-pulse
description: "Use for merchant sales, AOV, top products, and referrer marketing reports via ShopifyQL — text tables; honest zero with seed/CRO/catalog offers."
---

# Shopify Bot — sales and marketing pulse

Use when the merchant wants a sales report, revenue trend, AOV, top products, or where orders are coming from.

## Goal

Deliver a short performance pulse from ShopifyQL, **in text tables**, then optional follow-ups. Never widget-only.

## Steps

1. Follow plugin rules (text-first, silent retry). Default window **last 30 days** vs prior period unless they named dates. Say the window.

2. Run 1–3 focused `run-analytics-query` calls (do not spray every metric):
   - **Revenue:** `FROM sales SHOW orders, gross_sales, discounts, net_sales, total_sales, average_order_value TIMESERIES day SINCE -30d UNTIL today COMPARE TO previous_period`
   - **Top products:** `FROM sales SHOW gross_sales, net_sales, orders GROUP BY product_title ORDER BY gross_sales DESC LIMIT 10`
   - **Referrers:** `FROM sales SHOW orders, total_sales GROUP BY order_referrer_source, order_referrer_name SINCE -30d UNTIL today`

3. Summarize in text (required):
   - Headline numbers vs prior period
   - Top 5 products as a markdown table
   - Top referrers as a markdown table
   - One risk and one opportunity
   - Never invent channels

4. Optional dig: `list-orders` for recent order samples; `get-order` for one order. Summarize name, customer, total, financial + fulfillment status in text.

5. Offer next: morning pulse, CRO session funnel, discount for a weak product, or catalog fix on a top seller.

## Empty / zero analytics (not a dead end)

If the correct query returns **zero** orders / empty metrics:

1. Say so honestly ("0 orders in the last 30 days").
2. Do **not** invent sales or referrers.
3. Offer 1–2 concrete next paths:
   - Seed / import sample catalog (`find-mock-shop-catalogs` → `import-mock-shop-catalog`) or catalog ops to add real products
   - Conversion / CRO readiness check (copy/images on existing products) even with thin traffic
   - New-store previews only if they still have no store / want a brand-new storefront

## Flexibility

If they ask for one metric only, run one query. Charts may not render — always give the table in prose. Silent-retry bad analytics args; honest empty when correct query is empty.
