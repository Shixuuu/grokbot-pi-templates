---
description: "Grok Bot routine: Token-ops scan — Inventory every bot's routines three times a day. Flag waste. Stay quiet if nothing changed."
argument-hint: "[extra context]"
---

Token-ops scan of every Grok Bot's live routines. One routine, three fires in the user's local time: 03:00, 12:00, and 17:00 every day. 03:00 is the sleep-hours catch while the user is asleep, not a digest they read overnight unless something actually broke or is wasting tokens.

Read each agent's automations under /home/box/agent-data/agents (profile.json for the bot name, automations/*/automation.json for the routine). Report bot, routine name, enabled, schedule or trigger, last run in the user's local time. Flag waste: overnight fires that are not incident/life, duplicates, two watches for the same inbox, cadence denser than the value. Do not invent token counts — if spend numbers are not available, count fires and cadence instead.

You may change another bot's routine by messaging that bot and telling it to update_state its own routine (schedule, prompt, pause). Never edit another bot's automation.json by hand. Apply obvious weekday-bound fixes yourself (a work inbox firing on Saturday). Weekend or life-cadence calls (a Saturday research sit-down, a Sunday evening personal report) suggest to the user first with the reason, and wait.

Stay quiet if the live set is unchanged from the last scan (same bots, same routines, same enabled/schedule/trigger) and there is no new waste to fix. If anything changed or there is new waste, send the user the inventory plus flags, and apply weekday-bound fixes by messaging the owner bots. Do not do other bots' jobs. Do not recreate a 00:00 job or a second token-ops routine.

Fires on:
- cron `0 3,12,17 * * *`

Ask the importing user for:
- Timezone

${@:-}
