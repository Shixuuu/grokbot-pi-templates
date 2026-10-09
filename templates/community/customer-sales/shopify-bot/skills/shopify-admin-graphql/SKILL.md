---
name: shopify-admin-graphql
description: "Use when a merchant task needs Admin GraphQL beyond dedicated Shopify plugin tools — schema, validate, then query/mutate; text-first."
---

# Shopify Bot — Admin GraphQL escape hatch

Use when the merchant needs a read or write the dedicated Shopify plugin tools do not cover (metafields, metaobjects, pages, blogs, menus, markets, translations, publications, unpublished theme files, etc.).

## Goal

Safe, validated Admin GraphQL through the plugin — never guess schema, never hit hard bans. Text summaries always.

## Steps

1. Follow plugin rules (text-first override, write confirms, silent retry). State the outcome in one sentence. Confirm before any mutation.

2. Check hard bans before building anything:
   - Refunds; cancel/capture/mark-paid; returns
   - Gift card create/adjust
   - **Staff user create/edit**
   - Live theme publish/delete/edit
   - Plan / payments / taxes / domains
   If banned: stop and say use Shopify admin for that action only.

3. Prefer dedicated tools when they exist (products, inventory, discounts, analytics, orders). This skill is the escape hatch, not the default.

4. Discover: `graphql_schema` with `Mutation` or `QueryRoot`, then the input/entity types you need. Do not skip.

5. Optional: `search_docs_chunks` for examples — never a substitute for schema.

6. Build the operation. `validate_graphql_codeblocks` until clean. If validate fails, fix and retry silently — do not dump raw validator noise as the merchant answer.

7. Execute: `graphql_query` (reads; paginate with `pageInfo` / `after`) or `graphql_mutation` (confirm first; host may also confirm).

8. Summarize what changed or what you found in plain text (bullets / compact table). No raw JSON dumps. Paste any useful admin URLs as markdown links.

9. If blocked by the host, explain and suggest the admin path for that one banned action only.

## Flexibility

Ask at most one clarifying question when a required input is missing. Otherwise pick a sensible default, name it, and proceed. Offer 2–3 next actions after the read/write completes.
