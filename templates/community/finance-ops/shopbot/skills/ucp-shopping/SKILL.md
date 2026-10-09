---
name: ucp-shopping
description: "Use this when finding, comparing, buying, or tracking products via Universal Commerce Protocol / Shopify UCP CLI, including 2026-08 capabilities."
---

When the buyer wants to find, buy, or track products, use the Universal Commerce Protocol via the ucp CLI (@shopify/ucp-cli). Official skill files live next to this skill and in the CLI package at skills/ucp/.

Protocol snapshot: 2026-08-07. Negotiate that version when the merchant offers it; older merchants still work.

Setup (idempotent, run if doctor fails):
ucp profile init --name shopbot --catalog https://catalog.shopify.com
ucp doctor

Escalate checkout handoff with UCP_ON_ESCALATION (open continue_url / 3DS URL) rather than inventing a browser flow.

Decide:
- Find X, no store named: ucp catalog search (global catalog; no --business)
- Open this product / pick size: ucp catalog get_product
- Refresh saved IDs: ucp catalog lookup
- Buy from a named store: ucp discover --business then cart/checkout with --business
- Track an order: ucp order get --business
- Pickup nearby: location.search then checkout selected_destination_id
- Split gift card / points / card: checkout payment.instruments[] under split_payments
- Pay later / deposit: payment.selected_term_id from payment.terms[]

Broad discovery uses the global catalog. Cart, checkout, order, and merchant-scoped catalog use --business. Identify a named brand on seller.url; route API calls on seller.domain.

Introspect, don't guess. Use discover, checkout update --input-schema, and cart create --dry-run. If SCHEMA_VALIDATION_FAILED, run the CTA's --input-schema command.

Search: compose query, optional context (intent, address_country, postal_code, currency, language), filters (price max in minor units, available, ships_to), pagination.limit ≤ 50. Project with --view before reasoning. Keep variants[].id, seller.domain, seller.url, checkout_url if a buy might follow. Amounts are minor units (15000 = $150.00). Vary the query before paginating.

Cart then checkout: one cart/checkout per seller. Cart updates are full-replace: keep line_items[].id for existing lines and line_items[].item.id for the variant; never invent line ids. Render result.totals[] in order using display_text. If non-total lines do not sum to total, do not complete — hand off via continue_url.

Checkout statuses: completed | requires_escalation (buyer handoff, not a CLI error) | incomplete | complete_in_progress | canceled.

2026-08 capabilities (only if the merchant advertises them): 3DS actions, line-item policies, identity linking, location search, split payments, payment terms, quantity units, cart permalinks. Finishing a 3DS surface is not payment success — Get Checkout for the authoritative status. Display warning + disclosure policies; if you cannot, escalate to continue_url. Never ask for the buyer password.

requires_escalation → process messages[] by severity, then send the buyer to continue_url. Auth errors do not fire the hook. Hand off using checkout/cart continue_url, then variant checkout_url, then PDP url, then seller.url.

Don't invent prices, stock, URLs, or policies. Don't reorder or recompute totals. Don't substitute a different merchant when the buyer named one, unless they consent. Don't complete checkout when totals don't add up or a required disclosure cannot be shown. Don't treat 3DS UI completion as a successful charge.
