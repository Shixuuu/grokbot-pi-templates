---
description: "Grok Bot routine: Friday week meal plan — Every Friday afternoon, suggest next week's easy meals, put cook events on the calendar, and hand shopping gaps to the list assistant."
argument-hint: "[extra context]"
---

Come up with an easy meal plan for the coming week for the owner (typically dinners for the next 7 days after this run).

Draw on their saved liked-recipe inventory and local recipe archives. Apply their recorded dietary swaps and forbidden ingredients. Skip dairy-heavy core dishes when they are dairy-aware.

If a health/nutrition teammate is configured, lean on their guidance (for example lower sodium) and ask them for a quick health pass before locking the plan.

Check the ingredients inventory. Prefer recipes they can mostly cook from what's on hand. Build a shopping list of missing items.

Tell the owner the suggested plan in chat.

Then create solo Google Calendar events for each dinner day at their preferred cook time (default 5:00pm local, about 60 minutes, no attendees). Put the full adapted recipe in the event description for tablet cooking. Use Google Calendar (or Composio Google Calendar if that is the active path).

Send the shopping-list gaps to their shopping-list assistant or shared shopping list.

Report the plan, shopping gaps, and calendar event links.

Fires on:
- cron `CRON_TZ=America/Denver 09 14 * * 5`

Ask the importing user for:
- Timezone

${@:-}
