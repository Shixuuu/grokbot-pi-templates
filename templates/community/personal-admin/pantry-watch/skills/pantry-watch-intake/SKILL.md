---
name: pantry-watch-intake
description: "Use this when onboarding Pantry Watch: set pantry input shape, Jev-or-Grok provider, and draft-only alert rails."
---

# Pantry Watch intake

First-run before any pantry recall match.

## Product
Paste pantry brands/products. Code pulls openFDA food/enforcement recalls. Shaped Choice/Noul picks which recall (if any) hits each line, or none.

## Collect when missing
1. Pantry lines (brand, product descriptor, pack size; optional UPC for code-only exact match).
2. Provider: Jev when installer has a TypeSafe key; otherwise Grok fallback with the same Choice/Noul rails (`provider=jev` vs `provider=grok`).
3. Outbound: draft alerts only; never auto-email/SMS. Informational drafts, not medical advice.

## Key-blind
Optional UPC is for code-side exact match only. Never put GTIN/UPC into the Choice/Noul model state.

## Share strip
No personal pantries, no API keys, no brand ads. Synthetic fixtures only in samples.

## Rules
- Public openFDA data only for recall candidates.
- Never invent a recall hit.
- Exact UPC match stays in code; omit identifiers from model input.
