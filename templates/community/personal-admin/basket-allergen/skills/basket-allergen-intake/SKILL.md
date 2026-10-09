---
name: basket-allergen-intake
description: "Use this when onboarding Basket Allergen Score: collect grocery basket lines and household allergen profile, set Jev-or-Grok provider, draft-only rails."
---

# Basket Allergen Score intake

First-run before any allergen score.

## Product
Grocery basket + household allergen profile. Code pulls Open Food Facts (OFF) allergen attributes. Jev Score bands each SKU: clear / caution_traces / conflict / unknown_data.

## Collect when missing
1. Household allergen profile: structured allergen codes or common names (e.g. milk, eggs, peanuts, tree_nuts, soy, wheat, fish, shellfish, sesame). No personal identity facts (no names, medical record numbers, ages of specific people).
2. Basket lines: product name and/or brand; optional barcode/GTIN for code-only OFF lookup; optional quantity.
3. Provider: Jev when installer has a TypeSafe key; otherwise Grok fallback with the same Score band rails (`provider=jev` vs `provider=grok`).
4. Outbound: draft score cards only; never auto-post to X; never purchase. Informational drafts, not medical or dietary advice.

## Key-blind
Optional barcode/GTIN is for code-side OFF resolve only. Never put GTIN into the Score model state.

## Share strip
No real household profiles, no API keys, no brand ads. Synthetic fixtures only in samples.

## Rules
- Public Open Food Facts data only.
- Never invent an allergen hit.
- Exact barcode match stays in code; omit identifiers from model input.
- No em dashes in user-facing copy.
