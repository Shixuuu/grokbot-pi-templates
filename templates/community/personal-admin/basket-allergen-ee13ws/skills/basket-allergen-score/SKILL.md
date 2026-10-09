---
name: basket-allergen-score
description: "Use this when Basket Allergen Score adjudicates basket lines against household allergens with Jev Score bands; never clear on traces or missing OFF data."
---

# Basket Allergen Score adjudicate

Per basket line, Score risk band from structured OFF facts vs household allergen profile.

## Shape (Jev Score)
- Bands (options): `clear` | `caution_traces` | `conflict` | `unknown_data`
- State (facts only):
  - household_allergens[] (codes)
  - per line: allergen_tags[], traces_tags[], cert_flags[], fetch_status
  - Never put GTIN/barcode, personal names, or free-text ingredient guessing into Score state
- Scoring intent (code may pre-label; Jev confirms from facts):
  - `conflict`: any household allergen appears in allergen_tags (contains)
  - `caution_traces`: no contains hit, but household allergen appears in traces_tags / "may contain"
  - `unknown_data`: fetch_status is not_found, thin, or error (missing OFF allergen fields)
  - `clear`: fetch ok AND structured fields present AND no contains AND no traces for profile allergens

## Falsifier (HARD)
- Product lists "may contain" / traces only → must land `caution_traces`, never `clear`.
- Missing or thin OFF allergen data → must land `unknown_data`, never `clear`.
- Never invent hits from free-text ingredients alone; ingredients_snippet is display-only.

## Provider
- `provider=jev` when TypeSafe key is configured via secret-request / env (never paste key in chat).
- `provider=grok` fallback: same bands/state; must still honor the falsifier.

## Output
Per line: band, brief reason citing OFF tags (not medical advice), provider, ledger fields (payload summary without secrets, outcome, timestamp). Draft score card only. Cite OFF product id and/or public URL when available.
