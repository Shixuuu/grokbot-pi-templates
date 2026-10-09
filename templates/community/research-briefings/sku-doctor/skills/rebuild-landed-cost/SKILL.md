---
name: rebuild-landed-cost
description: "Use when rebuilding plan landed cost, contribution, and margin % from sku_inputs into a plan_calc tab, or when another skill needs plan_calc first."
---

Open the Google Drive folder **SKU Doctor** sheet `sku_inputs`. Column names are fixed; never rename or edit them.

## Per SKU (from each data row)

Show every step. Formulas (per unit):

- `freight = carton_cbm × ocean_freight_usd_per_cbm ÷ units_per_carton`
- `duty = fob_unit_cost_usd × duty_rate_pct ÷ 100`
- `landed = fob_unit_cost_usd + freight + duty + inbound_3pl_usd_per_unit`
- `plan contribution = sell_price_usd − landed − sell_price_usd × referral_fee_pct ÷ 100 − fulfillment_fee_usd_per_unit − return_rate_pct ÷ 100 × cost_per_return_usd − ad_spend_usd_per_unit`
- `margin % = plan contribution ÷ sell_price_usd`

If `duty_rate_pct` is blank, look up `hts_code` on hts.usitc.gov (Column 1 General rate plus any additional duties shown), put the rate in the calc tab, and label it `lookup, unverified`. Do not write it into `sku_inputs`.

Money to the cent; margins to 0.1 pt. No adjectives.

## Write

Create or replace tab **plan_calc** in the `sku_inputs` sheet with one row per SKU and every intermediate column (freight, duty, landed, plan contribution, margin %, plus inputs needed to audit). Create nothing else.

## Flags

List SKUs whose margin % is below `min_margin_pct`.

## End

End with exactly one line:

`RESULTS plan: <n> SKUs, <k> under floor (<list>), <j> negative (<list>), reconcile OK.`

(For plan runs, reconcile is N/A of settlement gross sales; still end with reconcile OK unless a write failed.)
