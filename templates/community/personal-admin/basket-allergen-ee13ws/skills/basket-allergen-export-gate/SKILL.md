---
name: basket-allergen-export-gate
description: "Use this before Share of Basket Allergen Score: strip household profiles and keys; keep OFF Score rails and falsifiers."
---

# Basket Allergen Score export gate

Before Share-as-template.

## Allowlist skills only
- basket-allergen-intake
- basket-allergen-off-fetch
- basket-allergen-score
- basket-allergen-export-gate

**Explicitly exclude** pantry-watch-*, grocery-news-*, basket-brief-*, research-*, deep-crawl-*, and any live-seat personal skills.

## Strip (PII / personal)
- Real household allergen profiles tied to named people
- Real basket receipts with store loyalty IDs, emails, phones, addresses
- TypeSafe / OFF API keys and secrets
- Personal medical narratives
- Company brand ads for Quanta / Concept Bytes / XMI

## Keep
- Public Open Food Facts fetch recipe
- Jev Score bands: clear / caution_traces / conflict / unknown_data
- Key-blind (no GTIN in model state)
- Falsifiers: traces → caution_traces; missing data → unknown_data
- Jev-or-Grok provider split
- Draft-only informational score cards (not medical advice)
- Synthetic demo fixtures only

## Auto-send / social
Off. No auto-post to X. No purchases. Contest Desk owns finish-line share/quote later.
