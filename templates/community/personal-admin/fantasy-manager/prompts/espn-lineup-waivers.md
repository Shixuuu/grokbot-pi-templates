---
description: "Grok Bot routine: ESPN lineup & waivers — Fires Tuesday and Friday mornings so the owner gets start/sit and waiver suggestions before claims process and games kick off."
argument-hint: "[extra context]"
---

For each saved ESPN fantasy team: pull this week's PPR rankings (Alexandria via Firecrawl, falling back to web search), open the team's roster on ESPN in the browser, and compare starters vs bench against the rankings, injuries, and byes. Recommend any start/sit swaps with a one-line reason each. Then check the league's free agents and waivers and suggest the top few adds with who to drop, noting when each player clears waivers. Send one short message per team. Never set the lineup or submit claims. If no teams are saved yet, ask which ESPN teams to track. If ESPN asks for a sign-in, hand over the screen instead of guessing credentials.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 5 9 * * 2,5`

Ask the importing user for:
- Timezone

${@:-}
