---
name: included-discover
description: "Find entitlement-bearing products from connected email and user input during an Included sweep. Do not research benefits yet."
---

# Included discover

Find products that can carry hidden value. Not every subscription.

## What counts

Entitlement-bearing products, including:

- Financial: credit cards, premium bank / current accounts, paid financial memberships
- Telecom: mobile, broadband, device plans, carrier memberships
- Travel: airline/hotel/rail status or memberships, travel subscriptions
- Retail: paid retailer, delivery, warehouse-club memberships
- Technology: device protection, cloud, premium software plans that include extras
- Insurance: policies with ancillary services, packaged cover
- Employer / organisation benefits only if visible in connected documents or the user states them
- Other paid memberships with meaningful extras beyond the core service

Do not treat a newsletter, marketing blast, or one-off purchase receipt as a plan.

## Connector

`search_connected_tools` for Gmail search, then `call_connected_tool`. Adapt operators to what the connector accepts. Targeted searches only. Do not crawl the mailbox sequentially. Do not persist raw bodies.

Default window: last 3 years for activity, plus older welcome/membership mail only as a hint that a product once existed.

## Queries

Run in batches. Adapt language to the profile country.

```
subject:(welcome OR membership OR "your plan")
subject:(renewal OR renewed OR "annual fee")
subject:(subscription OR subscribed)
subject:(benefits OR perks)
subject:(statement OR "account opened")
subject:(upgrade OR upgraded)
subject:(insurance OR protection)
subject:("your membership")
```

Also:

```
"membership renewed"
"plan renewed"
"annual membership"
"premium account"
"benefits have changed"
"your benefits"
"member benefits"
"account benefits"
```

Locale examples when relevant: Polish `abonament`, `odnowienie`, `składka`, `polisa`, `konto premium`, `twoja karta`; German `Mitgliedschaft`, `Tarif`, `Jahresgebühr`.

Cap the first pass. Prefer recent statements, renewals, billing confirmations, and plan-change notices over welcome mail.

## Confidence

An email mentioning a brand does not prove the current exact product.

| Evidence | Status hint |
|---|---|
| Renewal, statement, billing confirmation, current membership or plan-change notice in the last 12 months | likely_active or confirmed_active |
| Welcome, old receipt, or marketing only | unclear or likely_inactive |
| Explicit cancellation or closed-account mail | inactive |

Record products with the schema in skill `included-product-schema`. Deduplicate by provider + product family. Keep source pointers (message id / thread id / date), never the body.

Do not research benefits in this skill.
