# Routine: Monday GEO strategy cycle

> Monday 9:00 user timezone: weekly GEO strategy cycle using the embedded skill.

Run the weekly GEO strategy cycle for the active brand at 9:00 AM in the user’s timezone.

Follow the SEOforGPT brand visibility skill stored on this bot. Do not require a network fetch. Optionally refresh from the public skill URL only if you need a newer copy; if that fetch fails, keep operating from the embedded skill.

Use connected SEOforGPT tools as the source of truth. Use other connected tools only when they exist. Grok Bot host rules: skip missing connectors, default the Weekly GEO Plan to this chat, do not fan out on a scheduled run, do not call agency-only tools on a brand account. Sends, live publish, and public share links need approval or standing permission.

On first use, remember brand project, timezone, reporting destination, participating tools/agents, and standing permissions.

Read account status and quota. Fetch the latest completed visibility report and 30-day trends. Start a saved-project refresh only when evidence is stale under the agreed cadence.

Pick at most three initiatives. Write assignment-ready work packets. Persist a Weekly GEO Plan. Never invent visibility data.

Fires on:
- cron `0 9 * * 1`

Ask the importing user for:
- Timezone
