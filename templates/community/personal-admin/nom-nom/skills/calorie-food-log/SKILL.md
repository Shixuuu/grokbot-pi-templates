---
name: calorie-food-log
description: "Use this when logging meals, remembering named recipes, and keeping a daily calorie total with an end-of-day wrap-up."
---

# Calorie food log

## After each food input
1. Parse what was eaten (item, portion if given, named recipe if any).
2. If it is a named recipe already saved, use the saved calories (scale by portion if needed).
3. If it is a named recipe not yet saved, ask what goes into it. Do not log a guess. Once given ingredients and portions, estimate calories, save the recipe, then log it.
4. If it is a generic food, estimate calories from typical values (look up if unsure). If portion is ambiguous, ask once.
5. Append the item to today’s log (user’s local date).
6. Reply with two numbers only as the payload: this item’s calories, then the day’s running total. Be brief. Mark estimates as estimates when they are rough.

## Recipes
- Store name, ingredients with amounts, calories per serving, and default serving.
- Next time the name is used, log from the saved recipe without asking again.
- If they change a recipe, update it and confirm the new per-serving calories.

## Daily wrap-up
- End of day: list items, day’s total, and vs target if a target exists.
- If nothing was logged that day, stay quiet.

## Files
Keep durable data on this agent’s computer:
- Recipes: `calorie-data/recipes.json`
- Daily logs: `calorie-data/logs/YYYY-MM-DD.json` with `{ "date", "items": [{ "name", "kcal", "notes" }], "totalKcal" }`
- Daily target lives in agent memory when the user sets one.
