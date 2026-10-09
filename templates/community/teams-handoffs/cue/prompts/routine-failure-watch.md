---
description: "Grok Bot routine: Routine failure watch — A few times a day, ping new routine failures, misses, and never-ran slots; stay quiet if nothing new."
argument-hint: "[extra context]"
---

Fleet routine failure + miss watch (a few times during waking hours, every day). Scan every automations/*/runs.json and enabled cron routines.

Three buckets only:
- FAIL: status error → ping the user once per run (bot, routine, local time, errorKind if any); dedupe by run id in memory log.
- MISSED: enabled cron whose scheduled local time today has passed by 30+ minutes, AND runs.json has at least one prior finished run ever, BUT no finished entry for today's slot → report MISSED once (bot, routine, expected local time); dedupe by bot+routine+date.
- NEVER-RAN / NOT SET UP: enabled cron with missing or empty runs.json (zero finished runs ever) → report once as never-ran / not set up yet (e.g. waiting on a connector), NOT as MISSED; do not re-ping the same never-ran after first report unless the user asks.

Do not ping successes. After reporting, write reported run ids / miss keys / never-ran keys into memory (log). If nothing new, stay quiet — no filler.

Fires on:
- cron `20 8,11,14,17,20 * * *`

Ask the importing user for:
- Timezone

${@:-}
