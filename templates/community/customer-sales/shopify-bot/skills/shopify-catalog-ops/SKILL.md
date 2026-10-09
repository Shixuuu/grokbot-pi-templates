---
name: shopify-catalog-ops
description: "Use for product and collection create/edit/organize workflows via the Shopify plugin, including light SEO copy updates — text-first; id vs productId when inventory touched."
---

# Shopify Bot — catalog ops

Use when the merchant wants to add, edit, organize, or change status of products/collections (titles, descriptions, prices, images, tags, collections).

## Goal

Finish one catalog change end-to-end through the Shopify plugin, with text summaries after every tool call.

## Param cheat sheet (when inventory is touched)

| Tool | Argument | Value |
|------|----------|-------|
| `get-product` | **`id`** | Full GID `gid://shopify/Product/...` |
| `get-inventory-levels` | **`productId`** | Same full GID form |

Never swap. Bare numeric IDs rejected for `get-product` — search first. Silent-retry bad args; never show the failure as the answer.

## Valid search fields only

`search_products` ignores invalid fields and returns everything. Use only: title, vendor, product_type, handle, sku, barcode, variant_title, tag, tag_not, status, price, inventory_total, id, variant_id, created_at, updated_at, published_at, gift_card, bundles, is_price_reduced, out_of_stock_somewhere, tracks_inventory, has_only_default_variant, collection_id, category_id. No dotted paths.

## Steps

1. Follow plugin rules. Confirm the **one** outcome (create product, edit product, build collection, bulk status, etc.).

2. **Find first** when they reference an existing item:
   - `search_products` / `search_collections` → then `get-product` (`id`) / `get-collection`
   - Never invent GIDs
   - Summarize matches in text (title, status, price, id)

3. Branch:

   ### Create product
   - Collect title (required); price/variants; optional description HTML, vendor, type, tags, HTTPS image URLs, status (default draft)
   - Prefer interactive create tool if present; else `create-product`
   - Enable `inventoryItem.tracked: true` on variants if they will manage stock
   - Confirm before write unless they already authorized that exact create

   ### Update product
   - `get-product` with **`id`** → propose diff in text → on yes `update-product` (title, descriptionHtml, status, variant price/sku/compareAt, option values, add/remove images via HTTPS URLs + `removeMediaIds`)

   ### Collections
   - `create-collection` (manual `productIds` or smart `ruleSet`) or `update-collection`
   - `add-to-collection` for membership
   - Summarize collection name, id, product count in text

   ### Bulk status
   - Confirm ACTIVE/DRAFT/ARCHIVED and id list or collection (first 50) → `bulk-update-product-status`
   - Say when a batch is partial

4. After write, re-fetch with `get-product` (`id`) / `get-collection` and summarize what is live now in text.

5. If they also ask stock on the product: `get-inventory-levels` with **`productId`** (same GID), then optional `set-inventory` after confirm. Do not swap arg names.

6. SEO hygiene (keep light): improve title/description/alt via `update-product` / `update-collection`. For SEO metafields with no dedicated tool, use the GraphQL escape hatch skill.

7. Offer next: add to collection, set inventory, publish draft → active, morning pulse, CRO pass.

## Flexibility

One clarifying question max. Images must be public HTTPS URLs — if they only have local files, say so and wait. Do not edit live themes here. Honest zero if search returns no matches — do not invent products.
