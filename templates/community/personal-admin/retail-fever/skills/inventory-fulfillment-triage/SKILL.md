---
name: inventory-fulfillment-triage
description: "Use this when the Shopify storefront shows Sold out or add-to-cart fails even though Admin inventory looks fine — usually a POD location or ignored-fulfillment issue."
---

# Inventory / fulfillment triage

Diagnose and fix sold-out or non-fulfillable POD catalog issues.

## Common root causes

1. Quantity tracking on with **0** at the POD fulfillment location while the shop location shows high stock — storefront sells from the fulfillment location.
2. POD items marked **fulfillment ignored / disabled** after a Shopify import.
3. Unpublished variants, missing options, or draft products.
4. Channel not published to Online Store.

## Steps

1. Pick a failing SKU from the storefront and compare Admin inventory per location.
2. Confirm the POD app location is the selling location for those variants.
3. Stock available quantity at the POD location (POD-safe high available is fine when untracked-style selling is intended).
4. In the POD partner dashboard / API, enable fulfillment for synced products (clear ignore flags).
5. Re-test storefront add-to-cart for several color×size combos.
6. Report what was wrong in plain language and what remains.

Never print API tokens or paste secrets into chat.
