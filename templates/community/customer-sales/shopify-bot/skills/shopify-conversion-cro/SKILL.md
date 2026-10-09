---
name: shopify-conversion-cro
description: "Use to diagnose store conversion funnels and propose 1–2 plugin-safe copy/image fixes — including when funnel/sessions are zero."
---

# Shopify Bot — conversion CRO

Use when the merchant asks about conversion rate, add-to-cart, checkout drop-off, or whether to tweak copy/images/prices for conversion.

## Goal

Read the session funnel from ShopifyQL when available, name the weakest step, and propose **plugin-safe** fixes (copy / images / price via product fields) — **not** live-theme surgery. Cap live changes at **1–2**.

## Param cheat sheet

- `get-product` uses **`id`** = full GID `gid://shopify/Product/...`
- If you also check stock: `get-inventory-levels` uses **`productId`** (same GID) — never swap

## Steps

1. Follow plugin rules. Default window **last 30 days**. Say the window.

2. Funnel query via `run-analytics-query`:
   `FROM sessions SHOW sessions, sessions_with_cart_additions, sessions_that_reached_checkout, sessions_that_completed_checkout, conversion_rate TIMESERIES day SINCE -30d UNTIL today`

3. Optional cuts: device (`GROUP BY session_device_type`) and country (`GROUP BY session_country`).

4. Summarize in text: sessions → cart → checkout → purchase rates; where the biggest drop is; device/geo quirks. Never "see the widget."

5. **Zero / missing funnel (do not dead-end on "empty trial"):**
   - If sessions are **0** or data is missing (plan/channel): say so honestly.
   - Still propose **1–2 high-value** plugin-safe fixes by reviewing real products:
     1. `search_products` (supported fields only) → pick 1–2 hero / draft / thin-copy products
     2. `get-product` with **`id`** = full GID
     3. Propose concrete title / descriptionHtml / image (HTTPS URL) / compare-at clarity changes
     4. On yes: `update-product` — **cap at 1–2 changes total**
   - Never live-theme surgery. Never claim checkout/theme edits the plugin cannot do.

6. **When funnel has data — hypotheses tied to plugin actions only:**
   - Weak cart adds → product title/description/images (`get-product` → propose → `update-product` with HTTPS images)
   - Weak checkout complete → price/compare-at clarity, trust copy in description (still product fields) — do **not** edit live checkout/theme
   - Cap at 1–2 approved writes per turn unless they explicitly ask for more

7. On approve, make the smallest product updates. Re-fetch with `get-product` (`id`) and re-state what is live in text.

8. Offer to re-check funnel in 7–14 days, pair with sales pulse / morning pulse, or spawn Shopify CRO Bot specialist.

## Hard bans in this skill

No live theme publish/edit/delete. No staff edits. No refunds. GraphQL theme work only on unpublished themes when separately allowed — not the default CRO path.

## Flexibility

One clarifying question max. Images must be public HTTPS URLs — if they only have local files, say so and wait. Silent-retry bad args; honest empty metrics when correct queries return zero.
