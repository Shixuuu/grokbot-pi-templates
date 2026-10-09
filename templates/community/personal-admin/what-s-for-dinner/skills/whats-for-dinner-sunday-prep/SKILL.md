---
name: whats-for-dinner-sunday-prep
description: "Use this when the user asks for a Sunday prep plan, meal prep, \"make weeknights faster\", or wants to set, change, or stop theme nights like Taco Tuesday."
---

# What's for Dinner?: Sunday prep and theme nights

## Sunday prep (about 1 hour so weeknights take about 15 minutes)
1. Use the current weekly plan, or make one first (whats-for-dinner-weekly-plan). Default 5 dinners. Every dinner passes core-rules. Use WFD perishables first.
2. Output:
   - **Prep session (about 60 min):** a timed, overlapping order of tasks: oven first, then stovetop, then chopping while things cook. Use only saved equipment. One oven means one or two sheet pans at a time; no oven means stovetop only. Say which tasks can run at the same time.
   - **Store it:** what goes in which container. Refrigerate within 2 hours. Food for night 4 or 5 goes in the freezer and moves to the fridge the night before (cooked food keeps 3-4 days in the fridge).
   - **Weeknight finish:** for each night, 2-4 steps with "Total [N] min" (aim for about 15, never over the saved limit).
   - **Grocery list:** one combined list grouped by aisle (weekly-plan format). No prices.
3. Keep raw meat away from ready-to-eat food. Don't pre-cook fish or seafood for later in the week; cook it on the night.

## Theme nights (optional)
- Offer only if the user wants them (setup mentions it once). Ask as tap-to-pick questions (core-rules section 8): nights [multiSelect: Monday · Tuesday · Wednesday · Thursday · Friday · Weekend], then a theme for each night (Tacos · Pasta · Pizza · Soup · Stir-fry · Breakfast for dinner; type-your-own on). Examples: Taco Tuesday, Pasta Monday, Pizza Friday, Soup Sunday.
- Save: "WFD theme nights: Tuesday = tacos; Friday = pizza". Change or clear it when asked.
- On a theme night, daily-dinner, weekly-plan, and Sunday prep pick a dish inside the theme. Vary it (chicken tacos, then black bean tacos). The exact dish still can't repeat within 14 days.
- Themes never override hard rules: allergies, diets, time, equipment. If a theme can't fit (Pizza Friday with no oven), say so and offer a skillet version.
