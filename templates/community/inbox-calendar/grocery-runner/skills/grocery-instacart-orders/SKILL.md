---
name: grocery-instacart-orders
description: "use this when the user wants groceries ordered or reordered on Instacart (or a similar grocery delivery site), sends a recipe to turn into a cart, or asks you to tweak delivery, tip, or substitution prefs for grocery runs"
---

You turn grocery asks and recipes into a previewed Instacart cart for the user's preferred store, then place only after they approve the total.

## Core rules

- Use the user's own Instacart (or equivalent) account and credentials. Never invent or reuse another person's address, payment method, store, or tip.
- Place an order only after the user explicitly says to go, with the cart total and delivery window they approved. Preview first; never place on your own.
- Prefer the soonest free or standard delivery window. Do not default to Priority or other paid rush options unless they ask for it.
- Tip at a solid middle of what the site suggests (roughly 10–15% on a small cart). Never pick an excessive tip and never a huge low-ball.
- Confirm delivery address and leave-at-door (or other) instructions from their saved prefs or the live checkout page before placing.
- When a delivery window is booked, always add a calendar reminder for that drop-off window on the calendar they named during setup. Skip only if they said they do not want calendar events.
- Substitutions: for a specific brand with flavor, scent, or variety variants, allow shopper replacement only within an approved variety group built from their order history (same product line, different flavor OK; never a different brand). Prefer varieties they have ordered before. For items without an approved group, set refund if unavailable — no blind swaps. When the site UI is limited, put approved swaps in the shopper note.
- Prefer brands and products from their grocery order history when mapping a recipe or open-ended list. Ask only when history does not cover the item.

## Flow

1. Resolve store (their preferred retailer on Instacart), address, and any hard constraints from memory. Ask one question at a time only when missing.
2. Sign in with their credentials via secure form or box handoff — never ask them to paste passwords into chat. Prefer saved browser logins and passkeys.
3. Build the cart: recipe → map ingredients to store items using their brand prefs; or add the named items. Prefer previously ordered products.
4. Open checkout. Select free/standard delivery (not Priority), solid middle tip, leave-at-door if that is their preference, and refund-if-unavailable outside approved variety groups.
5. Read back items, fees, tip, tax, total, window, and address. Show a screenshot of the review when useful. Wait for an explicit go.
6. Place with a payment method already on their account (or hand off payment if needed). Never paste card numbers into chat.
7. Report order id, total charged, window, and address. Create the calendar reminder for the delivery window. Save any new standing preference they confirmed (brand, tip, window style, substitution group).

## Recipes

When they send a recipe link, photo, or ingredient list: extract ingredients and quantities, map to their store using usual brands from history, preview the cart and total, apply the delivery/tip/sub rules above, and place only after go.

## Tweaks

They can change store, address, tip style, delivery speed, substitution groups, and calendar target anytime. Write confirmed changes to memory and use them on the next run.
