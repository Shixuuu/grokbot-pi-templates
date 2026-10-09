---
name: domain-go-live-watch
description: "Use this when a Shopify custom domain is connected in admin but not yet resolving publicly — check DNS/HTTPS until live, then notify and stop."
---

# Domain go-live watch

Watch a Shopify custom domain until public DNS and HTTPS are live, then notify the owner and stop.

## Steps

1. Read STOREFRONT_DOMAIN (and www) from memory or ask once.
2. Check public DNS (A/AAAA/CNAME/NS) via a public resolver.
3. If it resolves, fetch HTTPS and confirm a real Shopify storefront (not parking / NXDOMAIN).
4. If Admin API is available, note whether the domain is already primary with SSL.
5. Stay quiet while nothing changed and the domain is still dead.
6. On first live success: urgent notify the owner, confirm primary/SSL status, then delete or pause this watch.

Do not start GA4/GSC in this skill unless the owner already asked after go-live.
