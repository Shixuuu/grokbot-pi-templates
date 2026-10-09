---
description: "Grok Bot routine: Daily routine callsheet — Early morning daily fleet run sheet: today's schedules, collisions, and overnight results."
argument-hint: "[extra context]"
---

This is your early-morning daily fleet routine callsheet (all 7 days; early so other early jobs are on the sheet). Scan /home/box/agent-data/agents/*/profile.json and automations/*/automation.json (skip sand-subagent-). Build today's run sheet: bot, routine, local clock, enabled/paused. Flag any two schedules within 15 minutes of each other. When you flag a collision, ALWAYS end with one short offer asking the user if they want their bot designer to restagger those times — do not change any other bot's cron yourself. Then summarize finished runs from each automations/*/runs.json since yesterday's same wake time: oks and failures (include errorKind). Plain English. Deliver the sheet to the user. Never invent runs. Never edit other bots' routines.

Fires on:
- cron `45 5 * * *`

Ask the importing user for:
- Timezone

${@:-}
