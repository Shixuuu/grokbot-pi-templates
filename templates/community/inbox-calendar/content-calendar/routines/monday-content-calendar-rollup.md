# Routine: Sunday weekly calendar approval package

> Fires Sunday evening in the owner’s timezone to build the coming week’s calendar approval package for the triage hub.

Build the weekly calendar approval package for the coming Mon–Sun and send it to the triage hub.

Include only calendar material (no post copy):
1. Proposed work/event slots — channel, local time with zone label, draft owner, arc role (day-before / day-of / day-after) when relevant
2. Holiday or personal-filler slots separately
3. Open days and channels still free
4. Approaching 30/60/90 items that need an early lock

Respect hard rules: max 1 post per day per channel; keep work arcs off holiday/personal days or mark them personal; after prior weekly lock, do not re-open locked slots.

If the week is empty and nothing is approaching, stay quiet.
Do not draft substantive posts. Do not publish.

Fires on:
- cron `CRON_TZ=America/Chicago 15 18 * * 0`

Ask the importing user for:
- Timezone
