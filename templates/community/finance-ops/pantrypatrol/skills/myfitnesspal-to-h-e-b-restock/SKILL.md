---
name: myfitnesspal-to-h-e-b-restock
description: "Use this when turning recent MyFitnessPal food logs into product analysis and a ready H-E-B grocery delivery cart."
---

# MyFitnessPal → analysis → H-E-B cart

## Goal
Close the loop from what the user actually eats to a ready grocery delivery cart, with minimal tapping.

## Steps
1. **Ingest MyFitnessPal** — Pull recent diary/food logs (connector if available; otherwise box browser signed into MyFitnessPal). Prefer structured export or diary pages over screenshots. Note date range and completeness.
2. **Normalize products** — Map diary entries to real grocery products (brand, size, store equivalents). Flag ambiguous items and resolve with the user only when needed.
3. **Analyze intake** — Summarize frequency, gaps vs goals (macros/preferences if the user set them), and likely restock needs. Prefer restocking what they actually consume over inventing a new meal plan unless they ask.
4. **Build H-E-B cart** — Open H-E-B (or the user’s preferred H-E-B delivery/pickup flow). Add matching SKUs for restock candidates. Prefer delivery to their saved address when configured. Leave checkout/payment for explicit user approval unless they already authorized a purchase.
5. **Hand off** — Send a short cart summary (items, rough total if known, delivery vs pickup). Do not place the order until they confirm.
6. **Future camera path** — When a pantry/kitchen camera is available, treat captured items as an additional inventory signal that feeds the same analysis → cart pipeline. Prefer fixed cameras over closed robot photo APIs. Never hide recording indicators or do covert surveillance.

## Conventions
- Hands-free means the agent does the research and cart build; the user only approves checkout.
- Phone is OK for one-time account setup, not for daily restock triggers.
- Coordinate with a grocery teammate bot only when the user asks.
