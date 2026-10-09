---
name: instacart-cart-optimizer
description: "Use this when building, comparing, or optimizing grocery carts on Instacart (or when a teammate should price-check a shopping list across stores without checking out)."
---

# Instacart cart optimizer

Build the cheapest *review-ready* Instacart carts for a shopping list. **Never check out.**

This skill overrides the generic shopping / purchases checkout flow for Instacart grocery runs. Do not place orders, pay, or click Place order / Checkout / Buy now.

## Hard safety rules

- Never click Place order, Checkout, Pay, or Buy now.
- Never change delivery address, payment methods, tip defaults, or other account settings.
- Never type card numbers, CVV, or passwords into chat.
- For login / 2FA / CAPTCHA: use in-chat forms or box handoff — never bypass identity checks.
- If a page looks like a payment step, stop and hand control back.
- Never substitute a different product category without flagging it clearly.

## Before you start

1. Confirm the list, pickup vs delivery, and any hard constraints (budget, diet, organic, etc.).
2. Load durable prefs from memory (preferred stores, fee floor, memberships, credits, dietary rules). If prefs are missing, ask briefly and save them — do not invent store preferences or memberships.
3. Prefer the live Instacart session on the shared browser. Re-read live prices every run — never trust last week’s memory for shelf prices.

## Listing verification (non-negotiable)

Search cards lie. Every price you recommend or add must come from a **product detail page** (or an equivalent expanded view where title, image, size, and price are all visible together).

For each candidate:

1. Open the product page.
2. Read **exact title + pack image + size/weight + current price** together.
3. Reject mismatches (wrong category, miscatalogued items, unit-price badge mistaken for shelf price, “from” / strikethrough / member-only confusion).
4. Screenshot the verified listing when it drives a recommendation or cart add.
5. If you cannot verify, mark it **unverified** — do not guess.

When pack sizes differ across stores, always show **unit price** ($/kg, $/L, $/roll, $/1,000 sheets, $/bag) side by side and let the user decide rather than auto-picking on pack price alone.

## Store compare method

1. Search the **same product intent** at each candidate store that serves the user’s saved address (candidates come from their prefs, not hardcoded store lists).
2. Score **all-in cost**: item prices + live service fee + delivery fee + visible taxes + tip field if shown. Invent nothing — copy live sidebar numbers.
3. Default fee heuristic: treat ~$40 subtotal per store as the practical point where fee economics usually stop getting worse; confirm with live sidebar numbers; let the user override via memory.
4. Prefer two stores only when each cart stands on its own economically, combined all-in is meaningfully cheaper than the best single-store cart (default: at least ~$4 after fees), coverage is not worse, and the user accepts two deliveries/pickups.
5. If a must-have exists at only one store, keep it there and optimize the rest.
6. If memberships or monthly credits exist in memory, apply them when comparing value — do not ignore credits that beat a small markup.

## Build carts

- Add verified items only. Leave carts sitting.
- If an existing unrelated cart is in the way, do not silently delete the user’s items.
- Proactively flag unusually good relevant deals even when not on the list — one short callout, not a spam list.
- Prefer deciding and showing a plan over asking multiple choice widgets. Ask only for true tradeoffs the user must make (quality vs unit value, substitute category, split vs single store when savings are borderline).

## Output every run

1. Recommended plan (1 vs 2+ stores) and why — one short paragraph.
2. Table per cart: store, list item, chosen product, qty, unit price, line total, stock, substitute used?
3. Fee snapshot from the live sidebar (service, delivery, taxes, tip) — do not invent.
4. All-in estimate vs next-best plan.
5. Open questions / human calls only.
6. Clear line: “Carts are sitting in Instacart. I did not check out.”
7. Evidence: screenshot paths or attached shots for key picks and each cart.

## After a good run

Offer to update this skill or memory with anything newly proven (a store pattern, a recurring SKU, a fee cliff that differed from the heuristic).
