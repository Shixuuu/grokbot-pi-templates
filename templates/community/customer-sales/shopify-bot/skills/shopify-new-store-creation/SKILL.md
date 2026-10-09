---
name: shopify-new-store-creation
description: "Use when starting a new Shopify store — text+links+preview images; business-names CTA labeling by connection state; claim aftercare."
---

# Shopify Bot — new store creation

Use when the merchant wants to start a new Shopify store, generate storefront previews, claim a preview, pick a business/domain name for a **brand-new** store, or seed a catalog on a brand-new store.

## Goal

Run the official plugin new-store path end-to-end and surface **every preview URL and claim/signup link in plain text**, plus preview images when available — because Grok Bot may not render widgets.

## Hard limits

1. Follow Shopify Bot plugin rules (text-first override, silent retry).
2. Previews from `get-new-store-previews` can only be claimed as a **brand-new** store. They cannot restyle an existing live storefront. Say that up front.
3. Never invent product/audience/style fields. Compress only what the merchant said.
4. Do not send them to shopify.com for a step these tools cover — paste the tool-returned links instead.
5. Intent fork for naming:
   - **Brand-new store** → this skill (`get-new-store-previews` etc.) + new-store framing for name CTAs.
   - **Rename / name ideas for an existing connected store** → `generate-business-names` with **existing-store CTA labeling** (see below). Do not force `switch-shop` or pretend rename links are new-store claim links.

## Steps

### A. Optional naming / domain

#### A1. `generate-business-names` — CTA labeling by connection state

1. Call `generate-business-names` with their business description (≤255 chars; their words, not invented).
2. The tool already returns a `signupUrl` per name. Label links correctly:

   | Connection state | What each `signupUrl` does | How to label |
   |------------------|----------------------------|--------------|
   | **No** shop connected | Opens **new-store signup** with the name filled | "Sign up / claim a new store with this name" |
   | Shop **connected** | Opens **that store's name settings** in admin (rename) | "Rename in settings" / "Open store name settings" |

3. Always paste **every** name + URL as markdown. Example:

   - **Candle & Oak** — [rename in settings](https://…)   *(connected)*
   - **Candle & Oak** — [sign up with this name](https://…) *(no shop)*

4. Remind: **no trademark check**. The tool creates/renames **nothing** — links only.
5. If merchant intent is brand-new store but a shop is connected, say so clearly: these name links open rename settings on the connected shop; for a true new store use preview claim/signup links from section B.

#### A2. Domains (optional)

1. If they want a domain: `generate-domain-names` with `query` (+ `storeName` or `exactDomain` as needed).
2. Paste every available domain, price if present, and `signupUrl` as markdown links.
3. Say availability is point-in-time; never call a domain "free."

### B. Storefront previews (core flow)

1. Collect three inputs (ask only for what is missing):
   - What they sell (varieties/materials)
   - Who it is for (audience traits)
   - Brand style (palette/mood)
2. Compress each to a ≤78-char comma keyword phrase for `productOrService`, `targetAudience`, `brandStyle`.
   - Optional: `storeIntents: ["digital_products"]` only if they explicitly sell digital/downloadable goods.
   - Optional `locale` for the storefront language of the **audience**.
3. Set `userUnderstandsNewStoreOnly: true` per tool rules (silent when they said new store / no live-store signals; ask first only if they clearly mean an existing store).
4. Call `get-new-store-previews`. Tell them generation can take ~a few minutes; keep chatting.
5. When previews arrive (or when polling `get-storefront-generation` completes), **do not rely on the widget**. For each preview, print in text:
   - Preview label / index
   - Storefront preview URL (full https markdown link)
   - Claim / signup / "add this store" URL if the tool returned one (full markdown link)
   - Any preview UUID the merchant might need later
6. **Also attach/screenshot preview storefronts when available** so merchants see the designs — text + links + images together. Never drop the text response because a widget is open.
7. Remind: claiming creates a **new** store; it does not apply the theme to a store they already own.

### C. After they claim

1. Next tool call may need fresh OAuth (`claim-storefront-preview` is widget-driven — if they claimed in-browser, call `get-shop-info` or `switch-shop` then `get-shop-info` to verify the new shop).
2. Summarize connected shop name/domain in text; paste any URLs as markdown.
3. Offer seed options:
   - Sample catalog: `find-mock-shop-catalogs` → they pick → `import-mock-shop-catalog` (summarize created/skipped counts; warn on currency mismatch)
   - Single placeholders: `find-sample-product` (still paste any add links the tool returns)
   - Real products: route to catalog ops (`shopify-catalog-ops`)

## Text delivery checklist (required on Grok Bot)

After every naming/domain/preview tool call, include:

- One-line interpretation
- Bullet list of **clickable markdown links** for each preview, claim, signup, domain, or rename URL
- Preview images/screenshots when available
- Explicit note if a URL field was missing from the tool payload
- Correct CTA labels by connection state (new-store signup vs rename-in-settings)

Never answer with only "check the widget."

## Flexibility

Skip naming/domain if they already have both. If they wanted to redesign an existing store, stop preview generation and say previews cannot attach to existing shops — offer catalog/CRO skills instead.
