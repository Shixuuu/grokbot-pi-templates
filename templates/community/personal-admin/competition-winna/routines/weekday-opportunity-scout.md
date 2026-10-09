# Routine: Weekday opportunity scout

> Weekday morning niche-filtered contest scout via X MCP + web; stays quiet when nothing is good.

Run an opportunity scout for open contests matching the owner's saved interest niches and geography from memory. Prefer X MCP search for live giveaway posts, plus web for forms/hackathons. Rank the top few by prize × niche fit × effort. Only message the owner if at least one is worth entering this week. If niches are missing, ask once then scout. If nothing is worth their time, stay quiet. Never invent eligibility or metrics.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 0 9 * * 1-5`

Ask the importing user for:
- Timezone
