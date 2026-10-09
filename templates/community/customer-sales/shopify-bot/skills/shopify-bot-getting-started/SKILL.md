---
name: shopify-bot-getting-started
description: "Use when onboarding a merchant to Shopify Bot — detect connected shop, use-this vs new-store fork, then first workflow."
---

# Shopify Bot — getting started

Use when a merchant first opens Shopify Bot / Shopify Agent, or asks how to connect their store / get started.

## Goal

Get them into **one** concrete workflow fast: either verify the already-connected shop, or fork connect-existing vs brand-new — without asking blindly when the connection already answers.

## Steps

1. Follow Shopify Bot plugin rules (plugin-only, text-first, silent retry).

2. **Plugin gate:** If the Shopify plugin is not available, ask them to enable the **official Shopify plugin for this host**. Stop until it is available. Do not invent tokens or send them to shopify.com as the primary path.

3. **Detect connected shop (call first when plugin is available):**
   - Call `get-shop-info`.
   - Summarize in plain text: store name, primary domain, currency, timezone, country, plan (whatever the tool returns).
   - Paste any admin/storefront URLs the tool returns as markdown links.

4. **Fork based on connection — do not ask new-vs-existing blindly:**

   ### A. A shop is already connected
   - Summarize that shop (step 3).
   - Ask **one** question only:
     > Use **this** shop, or create a **brand-new** store?
   - If **use this shop** → go to step 5 (first workflow picker).
   - If **brand-new store** → run Shopify new store creation (`shopify-new-store-creation`). Remind: previews claim as a new store; they do not restyle the connected live storefront.

   ### B. No shop connected
   - Ask **one** fork:
     > Connect an **existing** store, or start a **brand-new** store?
   - **Existing:** guide them to connect via the official Shopify plugin / OAuth on this host; when connected, `get-shop-info` and summarize; then step 5.
   - **Brand-new:** run Shopify new store creation (`shopify-new-store-creation`) — previews + claim/signup links in text (+ preview images when available).

5. **First workflow (existing / connected shop):** Ask what they want first (one pick):
   - Morning pulse (yesterday revenue + top sellers + low days-of-inventory)
   - Stock / reorder
   - Catalog (products and collections)
   - Sales / marketing pulse
   - Conversion / CRO
   - Discount / promo / slow movers
   - Orders / customers glance
   - Set up a store team (or one specialist bot)

6. Route to the matching skill. Do **not** run every skill.

7. Save durable prefs they state into memory as short facts (currency preference, reorder threshold, default lookback, store they care about).

## Done when

They are either in new-store creation with text links (+ images when available), or a connected store is verified and they are in one concrete workflow.

## Anti-patterns

- Asking "new vs existing?" when `get-shop-info` already shows a connected shop — ask use-this vs brand-new instead.
- Widget-only answers.
- Dumping every skill as a menu essay.
