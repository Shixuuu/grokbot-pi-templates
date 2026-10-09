---
name: included-resolve
description: "Resolve exact provider, plan, tier, geography and active status for an Included product. Never guess a tier."
---

# Included resolve

Benefits differ by country, exact plan, card tier, account version, signup date, grandfathered status, billing cadence, and employee vs consumer plan.

Never search "what benefits does Example Bank have?" when the evidence is "Example Bank Premium Plus UK opened 2023."

## Inputs

Each product from included-discover, plus Gmail pointers and any user confirmation.

## Output per product

One of:

- `resolved` — exact variant and jurisdiction established
- `likely` — variant probable from recent evidence, still mark needs_confirmation if a nearby tier would change material benefits
- `ambiguous` — provider known, tier not
- `unresolved` — not enough to research

Also set `status`: confirmed_active, likely_active, unclear, likely_inactive, inactive.

## Method

1. Read the most recent high-signal messages (renewal, statement, plan name in subject or official sender).
2. Extract provider, product name, variant words (Plus, Premium, Gold, Extra, Unlimited), country, and dates.
3. Confirm the variant exists as a current or grandfathered product on the provider's official site.
4. If three similarly named tiers exist and the mail does not distinguish them, do not pick one.
5. If activity is older than 18 months with no renewal or statement, do not mark likely_active.
6. Store provider, product, variant, jurisdiction, approximate start date, evidence date.

## Asking the user

Ask one narrow question only when the answer would change material benefits.

I found evidence that you had [Provider Product] but I can't tell whether you still have [Variant A] or [Variant B]. Which do you have, if any?

Do not issue a form. Do not research benefits for unresolved or inactive products unless the user asks.
