---
name: buy-ready-audit
description: "Use this when checking whether a Shopify store can actually take orders — payments, shipping rates, sold-out inventory, password page, and legal pages."
---

# Buy-ready audit

Run a full checkout-readiness pass on the connected Shopify store. Do not invent status. Prefer Admin API / connectors; fall back to storefront probes when needed.

## Checklist

1. **Password / access** — Is the online store password-protected? Note if customers are locked out.
2. **Payments** — Is Shopify Payments (or the active gateway) enabled? Any admin banners about business details, verification, or payouts? Note deadlines if present.
3. **Shipping** — List shipping zones/profiles. Flag empty rate arrays (common on Basic when POD live rates never landed). Checkout with no methods is a hard fail.
4. **Inventory / sold-out** — Sample storefront add-to-cart on a few variants. If Admin shows stock but cart is sold out, check the POD fulfillment location stock and ignored-fulfillment flags (see inventory-fulfillment-triage).
5. **Legal** — Privacy, Refund, Terms exist and are linked in footer / checkout policies. Confirm governing law matches the merchant's state/county from memory.
6. **Catalog sanity** — Active products have mockup-first media, prices, and at least one available variant.

## Report

Send the owner a short ranked list: blockers (cannot checkout), warnings, and nice-to-haves. Offer the next skill to run for the top blocker.
