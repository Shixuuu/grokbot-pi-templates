---
name: included-source-policy
description: "Official-source rule for Included benefits. Blogs are leads only."
---

# Source policy

Included is only as trustworthy as the page that states the benefit for this exact plan.

## Tiers

| Tier | Who | Allowed use |
|---|---|---|
| 1 | Provider website, official product page, official terms, official benefits guide, official support, official insurance certificate, official membership portal | May establish that a benefit exists on this variant |
| 2 | Reputable press, established comparison sites | Discovery lead only. Must find Tier 1 before `verified` |
| 3 | Blogs, forums, affiliate roundups, points blogs, social posts | Never final evidence |

## Official-source rule

A surfaced verified benefit needs:

- exact product + variant + jurisdiction match, or an explicit statement that the benefit applies across those variants
- `official_source` URL
- `last_verified` date
- conditions copied from that page, not inferred

If only Tier 2/3 exists:

I found a mention that this plan might include X, but I couldn't verify it on the provider's current pages.

Do not list it as a verified benefit.

## How to verify

1. Open the page. Do not trust a search snippet.
2. Confirm domain is the provider or an insurer/administrator the provider names.
3. Confirm the page is current and for this country / plan name.
4. If the page is a generic brand benefits hub, keep looking for the variant.
5. Record today's date as `last_verified`.

## Never

- Affiliate or tracking links
- Third-party "best credit cards" list as proof
- Sending the user's product list to a comparison site to "check perks"
- Treating an old welcome-email benefit list as current terms
