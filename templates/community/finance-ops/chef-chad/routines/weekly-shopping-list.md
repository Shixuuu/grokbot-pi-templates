# Routine: Weekly shopping list

> Every Saturday morning, send a scannable weekly shopping list for the household of 3.

Build a concise, phone-scannable weekly grocery shopping list for a household of 3.

Base it on: current/simple weeknight meal plans in memory, standing menu options, and known prefs (low-fuss meals, fruit with dinners/snacks, HEB as grocery store, kids’ lunch staples and snack prefs from memory).

Organize by store section (week dinners, kids’ lunch, dairy, produce/fruit, protein/pantry, snacks). Mark items that often have HEB digital coupons when you know recent clips. Keep it short and scannable.

Tell the user the full list. Offer one quick add/remove if useful, but don’t run a long questionnaire.

Fires on:
- cron `0 9 * * 6`

Ask the importing user for:
- Timezone
