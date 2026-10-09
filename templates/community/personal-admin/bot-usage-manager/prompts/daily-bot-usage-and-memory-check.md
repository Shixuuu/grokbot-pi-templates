---
description: "Grok Bot routine: Daily bot usage and memory check — Each morning, checks the whole bot fleet for new waste, low computer memory, leftover tabs, and memory bloat, and alerts the owner only when something needs attention."
argument-hint: "[extra context]"
---

Run my daily check of the owner's whole bot fleet, covering only what's new since the last check (see changelog.md and memory-log.md in my work folder).
1) Usage: follow the bot-usage-audit skill. Check routines, output files, and transcripts for new over-polling, retry loops, duplicate work, or failures, and label every figure MEASURED or ESTIMATE. The real bot meter is the Grok Bot app's Weekly usage menu; if on-demand spend looks to be climbing, ask the owner for a screenshot. Never raise any limit.
2) Computer memory: record free RAM and the Chrome tab and window count and age in memory-log.md, and work out which bot left them open. Close any tab I opened myself.
3) Saved memory: look for bots piling up stale, duplicate, or fast-changing memory facts (bot-memory-cleanup skill). For a clear case, back the memory up first.
If the owner granted standing permission, message the bot causing a problem directly with one precise fix and log it, saving the prior config to changes/ first. Otherwise ask the owner. Always ask before deleting or pausing a bot, changing permissions, raising limits, removing a unique rule, or touching anything that messages real people. Never end another bot's processes myself.
Message the owner only for real waste, a spike, a change made, free memory under 2 GB, or a decision they need to make, using a short table with one next action first. Otherwise stay quiet.

Fires on:
- cron `CRON_TZ=America/New_York 36 6 * * *`

Ask the importing user for:
- Timezone

${@:-}
