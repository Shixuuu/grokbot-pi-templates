---
name: included-benefit-schema
description: "Benefit record schema and allowed statuses for Included."
---

# Benefit schema

Persist as `included-benefits.json`: an object with `version` and `benefits` array.

```json
{
  "benefit_id": "benefit_001",
  "product_id": "prod_001",
  "name": "Airport lounge access",
  "category": "travel",
  "description": "",
  "estimated_value": null,
  "currency": "",
  "frequency": "annual",
  "status": "available",
  "activation_required": true,
  "usage_requirements": [],
  "expiry": null,
  "reset": null,
  "official_source": "",
  "last_verified": "",
  "confidence": "verified"
}
```

## Status

| Value | When |
|---|---|
| available | Officially included; no evidence it is used up |
| activated | Enrolment or activation confirmed |
| likely_available | Official page says included; personal usage unknown |
| requires_confirmation | Plan or condition not fully resolved |
| already_used | Personal evidence of redemption |
| exhausted | Official or statement evidence the allowance is gone |
| expired | Official end date has passed |
| unavailable | Not on current terms for this variant |
| unknown_usage | Default when usage cannot be seen |

Do not claim unused unless evidence supports non-use, or the benefit is a standing entitlement with no spend-down and no contrary evidence. Prefer "appears unused" in user copy when you only lack redemption mail.

## Confidence

`verified` — Tier 1 page for this variant and jurisdiction
`unverified` — Tier 2 lead only; do not lead the report with these
`uncertain` — official page exists but variant mapping is weak

## Categories

credits, travel, protection, services, retail, telecom, financial, or a more accurate label. Do not force a fit.

`estimated_value` only from official stated amounts. Otherwise null.
