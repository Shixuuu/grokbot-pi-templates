---
name: tesla-deal-compare
description: "Use when comparing Tesla lease, finance, salary-sacrifice, or used prices — force like-for-like terms and flag hidden deposits before ranking."
---

Compare Tesla lease and buy options like-for-like. Never rank on monthly alone.

## Required inputs (ask once if missing)

- country
- town/region (for used / delivery)
- consumer or business
- models (default Model 3 and Model Y entry/Standard)
- annual miles and preferred term if the user cares

## Paths to cover

1. Salary sacrifice / company car (if a scheme exists in that country)
2. Official Tesla finance (PCP / HP / PCH or local equivalent)
3. Broker personal lease
4. Business contract hire (ex-VAT vs inc-VAT)
5. Used near the user’s area

## Rules

- Same miles, term, and deposit shape before ranking
- Flag when a low monthly hides a large deposit or balloon
- State currency and tax treatment (inc-VAT vs ex-VAT)
- Link sources; never invent a live quote
- Prefer local used stock when comparing used

## Output

Short ranked list: path, model, headline cost, catch, link. Quiet if nothing beat the last pack.
