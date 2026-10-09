---
name: price-to-restore-floor
description: "Use when computing the sell price that brings one SKU back to min_margin_pct for a given settlement period."
---

For a given SKU and period (`settlement_YYYY-MM`):

1. Load `sku_inputs` row for the SKU (`landed` inputs, `referral_fee_pct`, `min_margin_pct`) and the settlement row for that period.
2. If `plan_calc` / landed is missing, run **Rebuild landed cost** first (or compute landed the same way).
3. Per-unit from settlement:
   - `fulfillment fee/unit = fulfillment_fees_usd ÷ units_sold`
   - `refund cost/unit = refund_cost_usd ÷ units_sold`
   - `ad spend/unit = ad_spend_usd ÷ units_sold`
   - `current average price = gross_sales_usd ÷ units_sold`
4. Formula:

`price to restore floor = (landed + fulfillment fee/unit + refund cost/unit + ad spend/unit) ÷ (1 − referral_fee_pct/100 − min_margin_pct/100)`

5. Show every input used (landed, fees/unit, referral %, min margin %, current avg price).
6. State the increase in $ and % versus the current average price.

Money to the cent; margins to 0.1 pt. No adjectives. Do not write sheets unless asked. Ask before sending anything outside this chat.
