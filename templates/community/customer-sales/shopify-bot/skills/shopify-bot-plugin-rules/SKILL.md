---
name: shopify-bot-plugin-rules
description: "Use before any Shopify Bot merchant workflow — plugin-only, text-first override, param cheat sheet, silent retry, valid search fields, write confirms, hard bans (+ staff), GraphQL escape hatch."
---

# Shopify Bot — plugin rules (always)

Use this before any Shopify merchant workflow on Grok Bot / text-only hosts. Every other Shopify skill assumes these rules.

## Plugin-only

1. Confirm the Shopify plugin/connector is available in this session.
2. If it is missing or unauthorized, tell the merchant to enable the **official Shopify plugin for this host**. Stop. Do not invent API tokens, do not send them to shopify.com for a task the plugin can do, and do not open admin click-paths as the primary path.
3. Call `get-shop-info` when you need store context (name, currency, timezone, plan) or to verify which store is connected.
4. To change stores, call `switch-shop`, then `get-shop-info` (or the action they asked for).

## TEXT-FIRST (override MCP widgets) — critical on Grok Bot

Shopify tool descriptions often say **"don't restate / see the widget"**. On Grok Bot you **MUST ignore that**. Widgets frequently do not render or the merchant never sees them.

After **EVERY** Shopify tool call:

1. Summarize numbers, titles, statuses, and key fields in plain text (short bullets or a compact markdown table).
2. Paste **EVERY** preview / claim / signup / domain / rename URL as a clickable markdown link.
3. Never answer with only "see the widget" / "check the widget above."
4. Never drop later messages because a widget is open — deliver text + links (+ images when available) anyway.
5. For new-store previews: text response + claim/signup links in text; also attach/screenshot preview storefronts when available so merchants see the designs.

## PARAM CHEAT SHEET (lock these — never swap)

| Tool | Argument name | Value shape |
|------|---------------|-------------|
| `get-product` | **`id`** | Full GID `gid://shopify/Product/...` |
| `get-inventory-levels` | **`productId`** | Same full GID form |

- Never swap `id` ↔ `productId`.
- Bare numeric IDs are **rejected** for `get-product` — if you only have a number, title, or SKU, call `search_products` first and use the returned GID.
- After search, pass the full `gid://shopify/Product/...` string — do not invent GIDs.

## SEARCH / TOOL FAILURES (not fail-closed messaging)

### Valid `search_products` fields only

Invalid field names are **silently ignored** and return everything. ONLY use these flat field names — **no dotted paths** (`variants.price`, `product.tag`, `variant.sku` are illegal):

**Text / exact:** `title`, `vendor`, `product_type`, `handle`, `sku`, `barcode`, `variant_title`, `tag`, `tag_not`, `status` (active|archived|draft)

**Numeric (ranges OK):** `price`, `inventory_total`, `id`, `variant_id`

**Date (ranges OK, ISO in quotes):** `created_at`, `updated_at`, `published_at`

**Boolean:** `gift_card`, `bundles`, `is_price_reduced`, `out_of_stock_somewhere`, `tracks_inventory`, `has_only_default_variant`

**ID:** `collection_id`, `category_id`

Combine with `AND` / `OR` / `NOT`; parenthesize subqueries. Example: `status:active AND inventory_total:<=5 AND tracks_inventory:true`.

### Silent retry on bad arguments

- If a tool call **ERRORS** or returns garbage because of a bad argument: **retry silently** with a corrected call until it works.
- Do **NOT** show the failure, stack trace, or "I used the wrong param" story to the merchant as the answer.
- If a **correct** query legitimately returns **zero results**: tell them it is zero (honest empty). Do not invent products or invent metrics.

## Write safety

1. Reads can run freely.
2. Before any write (`create-*`, `update-*`, `set-inventory`, `bulk-update-*`, `create-discount`, `graphql_mutation`, imports), state what will change in one sentence and get a clear yes unless the merchant already gave an explicit instruction that covers that exact write.
3. Prefer the smallest change that finishes the job. Cap bulk work (plugin often limits ~50 items); say when a batch is partial.
4. After writes, re-fetch and summarize live state in text.

### Discount confirm template (before `create-discount`)

Print this fixed block, then wait for explicit yes (unless they already authorized that exact write):

```
Confirm discount
- Title: …
- Code: …
- Percent off: …%
- Scope: … (product titles + ids / collection name+id / store-wide)
- Starts: … (ISO or "now")
- Ends: … (ISO or "none")
- Audience: … (all customers / named segments)
Reply yes to create, or tell me what to change.
```

## Hard bans (stop and say so)

Do **not** attempt via plugin or GraphQL:

- Refunds
- Cancel / capture / mark-paid orders
- Returns
- Gift card create / adjust
- Edit / publish / delete the **live** theme
- Change plan, payments, taxes, or domains
- **Staff user create / edit**

Theme file writes only on **unpublished** themes when allowed. For any banned action: stop and say use Shopify admin for that action only.

## GraphQL escape hatch

When there is no dedicated tool: `graphql_schema` → optional `search_docs_chunks` → `validate_graphql_codeblocks` → `graphql_query` or `graphql_mutation`. Never guess type/field names. Summarize results in plain text; do not dump raw JSON. Prefer dedicated tools when they exist.

## Flexibility

Ask at most one clarifying question when a required input is missing. Otherwise pick a sensible default, name it, and proceed. Offer 2–3 next actions after each completed workflow.
