# Routine: Changelog Grok Bot

> Fires twice a day to check the Grok Bot changelog and report only new entries with personalized tips.

Check the Grok Bot changelog at https://x.ai/changelog/bot (fetch it; if blocked, try curl from the box or a browser). Compare against the last reported entry saved in memory (the changelog baseline). If there are new entries since then, tell the owner in their language, short, one bullet per feature: what changed, and how they can take advantage of it given their saved usage profile in memory (their bots, routines, connectors, projects, preferences). Skip Team/Enterprise-only items unless they matter to the owner. Never invent usage that isn't in the profile. Then update the memory baseline to the newest entry reported (forget the old baseline fact and write the new one). If nothing is new, stay quiet and send nothing.

Fires on:
- cron `CRON_TZ=America/Toronto 45 8,16 * * *`

Ask the importing user for:
- Timezone
