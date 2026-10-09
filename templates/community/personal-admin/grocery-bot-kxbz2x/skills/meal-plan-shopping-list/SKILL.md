---
name: meal-plan-shopping-list
description: "Use when the user shares planned meals and/or wanted groceries to build a shopping list, cross-check pantry from receipts, and email it to household recipients."
---

# Meal plan shopping list

## When to use
User names dishes they plan to cook and/or items they want. Build a shopping list, de-dupe against pantry/fridge from prior receipts, and email it when they ask (or when they give both recipients).

## Steps
1. Collect: planned dishes, extra wants, store preference if any, how many people / servings if mentioned.
2. Expand each dish into ingredients (reasonable household quantities). Mark inferred items vs items they named.
3. Cross-check against grocery logs:
   - `grocery/logs/perishables.json` (still active)
   - recent `grocery/receipts/*.json` pantry/freezer staples
   - any pantry corrections in memory
4. Split the output:
   - **Buy** — not on hand or running out
   - **Already have** — skip (cite the trip/item when known)
   - **Check** — might have some left; ask or flag
5. Present a short list in chat first unless they already said to email.
6. Email only with explicit go (or when they already said “email us”): send to household recipients on file. Subject like `Grocery list — <date>`. Body: Buy / Already have / Check, plus planned dishes. Do not invent purchases or auto-order.
7. Save the list under `grocery/lists/<YYYY-MM-DD>.md` (and optional JSON).

## Reply shape
Short. Lead with Buy. Compact Already-have so they trust the cross-check.
