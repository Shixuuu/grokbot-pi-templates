---
name: shopify-admin-api-client-credentials
description: "Use this when you need to call Shopify Admin GraphQL without browser admin (e.g. Cloudflare blocks admin.shopify.com), using a Dev Dashboard app’s Client ID + Client secret via client_credentials."
---

# Shopify Admin API via client credentials

## When
Dev Dashboard app is installed on the merchant’s store. Browser admin may be blocked (datacenter IP / Cloudflare). You have Client ID (memory or chat) and Client secret stored as a box secret (never echo it).

## Auth
1. Load Client secret from the environment or the box secrets store for the agreed secret name (do not print).
2. POST https://{shop}.myshopify.com/admin/oauth/access_token with form body grant_type=client_credentials, client_id, client_secret.
3. Response includes access_token, scope, expires_in (~24h). Cache the token for ~23h; never log or chat the token.
4. Call POST https://{shop}.myshopify.com/admin/api/{version}/graphql.json with header X-Shopify-Access-Token.

## Rules
- Never paste Client secret or access tokens into chat, screenshots, or committed files.
- If shop_not_permitted, app and store are not in the same Shopify org — need different auth (OAuth install / offline token).
- API covers products, themes, files, content, inventory, orders, etc. App UIs (returns apps, size charts) still need the merchant’s browser.

## Smoke test
Query `{ shop { name myshopifyDomain } }` and confirm HTTP 200 with no GraphQL errors.
