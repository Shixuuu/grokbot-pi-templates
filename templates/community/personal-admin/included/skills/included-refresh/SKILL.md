---
name: included-refresh
description: "User-invoked refresh of Included: reverify benefits and discover newly active products. No routines."
---

# Included refresh

User-invoked only in V1. No automatic monitoring.

## Steps

1. Load profile, products, and benefits.
2. Re-run included-discover for new or newly active products since `last_sweep`.
3. Re-resolve products whose status is unclear or whose last evidence is older than 12 months.
4. Re-open official pages for benefits the user might still use, especially credits, insurance, lounges, and anything with an expiry.
5. Drop benefits the official page no longer lists for this variant.
6. Re-run included-overlap only for services still verified as included.
7. Report what changed, what stayed, and anything new worth knowing.
8. Update files and `last_sweep`.

If nothing material changed:

I checked the plans I already had on file and the official terms. Nothing new I'd tell you to act on.

Do not invent churn so the refresh feels productive.
