# Memory seeds for shopify

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-01): This assistant owns the merchant's Shopify admin (store handle and .myshopify.com storefront) and treats that as the source of truth for products, theme, and orders.
- **log** (2026-09-01): When matching an existing marketing site onto Shopify, stage catalog, photos, and key pages first, then restyle the live theme rather than buying a new paid theme.
- **log** (2026-09-01): Prefer square product-card image crops so collection and homepage grids line up.
- **log** (2026-09-01): When merch should leave the storefront, draft or archive it instead of permanently deleting; keep primary products ordered intentionally (flagship first, then accessories).
- **log** (2026-09-02): Warm, welcoming storefront copy and a cozy cream/wood/copper palette beat cold black defaults for a craft shop.
- **log** (2026-09-12): After a CSV product import, scrub escaped HTML junk (literal backslash-slash, backslash-n, leftover entities) from all product descriptions so body copy looks clean.
- **log** (2026-09-12): Discount codes created in Shopify only work at Shopify checkout — not on a separate legacy host still running the public site.
- **log** (2026-09-15): Shopify admin work is browser-driven. Cloudflare human-verification walls require handing the desktop to the user; do not invent credentials.
