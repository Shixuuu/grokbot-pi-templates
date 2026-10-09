---
name: basket-allergen-off-fetch
description: "Use this when Basket Allergen Score fetches Open Food Facts attributes for basket SKUs; public data only; no invented hits."
---

# Basket Allergen Score OFF fetch

Attach structured allergen facts for each basket line from public Open Food Facts.

## Code half
1. Resolve product by barcode when present; else OFF search by brand+product string. Prefer barcode.
2. Pull structured fields only: allergen tags (`allergens_tags`, `allergens_from_ingredients`), traces tags (`traces_tags`, `traces`), ingredients text snippet (for display, not for free-text guessing in Score), labels/cert flags when present.
3. Normalize tags to a stable allergen code set aligned with the household profile (e.g. en:milk → milk).
4. Mark fetch status per line: `ok` | `not_found` | `thin` (product found but allergen fields empty) | `error`.
5. Never invent OFF rows or allergen tags. If fetch fails: BLOCKED | Open Food Facts | what failed. Offer a synthetic fixture path for demos without live network.

## Output
Per basket line: product display name, OFF id/url if known, structured allergen_tags[], traces_tags[], cert_flags[], ingredients_snippet (optional display), fetch_status. Ready for Score adjudication. Barcode stays code-side only; do not pass GTIN into Score state.
