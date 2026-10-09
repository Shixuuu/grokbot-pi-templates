---
name: included-product-schema
description: "Product record schema for Included entitlement-bearing plans."
---

# Product schema

Persist as `included-products.json`: an object with `version` and `products` array.

```json
{
  "product_id": "prod_001",
  "provider": "Example Bank",
  "product_name": "Premium Account",
  "product_variant": "Premium Plus",
  "country": "GB",
  "status": "likely_active",
  "status_confidence": "high",
  "resolution": "resolved",
  "first_seen": "2024-02-10",
  "last_evidence": "2026-08-15",
  "approximate_start": "2024-02",
  "evidence_types": ["renewal_email", "monthly_statement"],
  "source_pointers": [],
  "needs_confirmation": false,
  "notes": ""
}
```

## Status

| Value | Meaning |
|---|---|
| confirmed_active | User confirmed, or very recent official billing/membership proof |
| likely_active | Recent renewal, statement, or plan-change notice |
| unclear | Evidence exists, activity not established |
| likely_inactive | Only old welcome/receipt/marketing |
| inactive | Cancellation or closed-account evidence, or user said it is gone |

## Resolution

`resolved` | `likely` | `ambiguous` | `unresolved`

`source_pointers` hold message/thread ids and dates only. No bodies, no card numbers, no IBANs.

Do not research benefits when status is likely_inactive or inactive, unless the user asks.
