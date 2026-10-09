---
name: run-settlement-check
description: "Use when checking a settlement_YYYY-MM period for actual contribution, margin movers vs plan, flags, and recommendations."
---

Inputs are in Google Drive folder **SKU Doctor**:

- `sku_inputs` (Sheet): plan assumptions
- `settlement_YYYY-MM` (Sheet): one row per SKU per period with `units_sold`, `gross_sales_usd`, `referral_fees_usd`, `fulfillment_fees_usd`, `refunds_count`, `refund_cost_usd`, `ad_spend_usd`

## Prep

If tab `plan_calc` is missing from `sku_inputs`, run skill **Rebuild landed cost** first.

## Per SKU

Landed from `plan_calc` (or rebuild). Then:

- `actual contribution (settlement) = (gross_sales_usd − referral_fees_usd − fulfillment_fees_usd − refund_cost_usd − ad_spend_usd) ÷ units_sold − landed`
- `avg price = gross_sales_usd ÷ units_sold`
- `actual margin % = actual contribution ÷ avg price`
- `plan margin %` from `plan_calc`
- `delta pts = actual margin % − plan margin %` (margin movers: worst first)

Money to the cent; margins to 0.1 pt. No adjectives.

## Flags and recommendations

Flag any SKU with actual margin % below `min_margin_pct` from `sku_inputs`.

Exactly one recommendation per flagged SKU, with the number: `raise price to $X` | `cut ad spend to $Y/unit` | `renegotiate FOB to $Z` | `pause SKU`. Pick the option that needs the smallest change from today.

Price to restore floor (when relevant):

`price to restore floor = (landed + fulfillment fee/unit + refund cost/unit + ad spend/unit) ÷ (1 − referral_fee_pct/100 − min_margin_pct/100)`

Use settlement per-unit fulfillment = `fulfillment_fees_usd ÷ units_sold`, refund cost/unit = `refund_cost_usd ÷ units_sold`, ad spend/unit = `ad_spend_usd ÷ units_sold`.

## Write

Write a new tab **results_YYYY-MM** in that settlement sheet with columns:

`sku`, `units`, `avg price`, `landed`, `contribution/unit`, `margin %`, `plan margin %`, `delta pts`, `flag`, `recommendation`

Append a dated summary to Google Doc **SKU Doctor — log**. Create nothing else.

## Reconcile

Before reporting: sum of `gross_sales_usd` in your results must equal the settlement total to the cent. If not, say `RECONCILE FAIL` and stop.

Ask before sending anything outside this chat. Never email suppliers, never touch a marketplace listing.

## End

`RESULTS <period>: <n> SKUs, <k> under floor (<list>), <j> negative (<list>), reconcile OK.`
