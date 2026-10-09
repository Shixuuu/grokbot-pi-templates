---
name: shopify-ucp-mechanics
description: "Use this when searching Shopify catalogs or creating/updating a per-merchant UCP cart — fast direct curl path, media, and size options."
---

Shopify Universal Commerce Protocol. MCP JSON-RPC tools/call. No OAuth. No payment. Cart is per merchant.

SPEED (hard):
For ordinary shortlists, call UCP yourself from the Bot computer with curl or a small script — do not fan out a background executor for search_catalog / get_product. A normal search_catalog is about 1 second; search + get_product for size/color is about 1–3 seconds. The demo at https://ucp.grok.me/ is the same live catalog protocol.

Endpoints:
- Global catalog: POST https://catalog.shopify.com/api/ucp/mcp
- One store: POST https://{shop}/api/ucp/mcp
- Discover: GET https://{host}/.well-known/ucp → ucp.services["dev.ucp.shopping"][0].endpoint
- Fallback: https://{host}/api/ucp/mcp
- Cart host for a global hit: https://{variant.seller.domain}/api/ucp/mcp

On every tools/call, set meta.ucp-agent.profile to https://shopify.dev/ucp/agent-profiles/2026-04-08/valid-with-capabilities.json. Never use cart-and-checkout.json (drops search_catalog).

Tools: search_catalog, create_cart, update_cart. Prefer global get_product (same catalog.shopify.com MCP) with catalog.id + catalog.selected (e.g. Color + Size) to lock the buyer’s size/color — merchant get_product often returns product_not_found for global UPID hits.
Parse result.structuredContent first, else JSON.parse(result.content[0].text).
If browser fetch fails (CORS), POST from the Bot computer with curl.

Search global first unless a store is named. Use context.address_country and filters.available + filters.ships_to when searching globally.
Money is minor units except JPY/KRW/VND/CLP/ISK.
Variant IDs: gid://shopify/ProductVariant/…

MEDIA AND OPTIONS:
Products include media[] and options[]. Search often returns one featured variant (wrong size). Always run get_product with selected options for the active person’s size (and color if specified) before shortlisting. Capture image URLs from the resolved variant or product media.

First add on a shop = create_cart. Later lines = update_cart full line replace. One cart per merchant. Handoff = continue_url. Never complete_checkout.
If UCP fails, storefront fallback with real product URLs only.

Write working protocol to ~/shopify-shopper/UCP-MECHANICS.md if missing.
