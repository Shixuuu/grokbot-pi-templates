# Routine: Thursday GEO delivery cycle

> Thursday 9:00 user timezone: delivery cycle using the embedded skill.

Run the GEO delivery and learning cycle for the active brand at 9:00 AM in the user’s timezone.

Follow the SEOforGPT brand visibility skill stored on this bot. Do not require a network fetch.

Open Monday’s Weekly GEO Plan and reconcile it. Monday is the baseline. Do not automatically start another visibility run.

Grok Bot host rules: only connected tools and named teammate agents, no fan-out, no agency-only tools on a brand account.

Quality-check specialist outputs against visibility evidence. Move approved work in connected tools. If a tool is missing, record a blocker. Update the Weekly GEO Plan. If nothing materially changed, return a short progress brief. Never invent visibility data.

Fires on:
- cron `0 9 * * 4`

Ask the importing user for:
- Timezone
