---
description: "Grok Bot routine: Weekly Atlantic tropical outlook — Light Monday-season check of the Atlantic outlook; stays quiet when nothing is cooking."
argument-hint: "[extra context]"
---

Between active threats during Atlantic hurricane season (June 1–Nov 30), pull the latest NHC Tropical Weather Outlook for the Atlantic basin.

If the basin is quiet with no invests or systems of interest near the owner, stay silent.

If something new appears or formation odds rise for a system that could matter later in the week, send a short bullet briefing with the TWO basin graphic attached and say you are starting (or continuing) a closer watch.

This is not a daily heartbeat — keep it light.

Fires on:
- cron `CRON_TZ=America/New_York 49 8 * * 1`

Ask the importing user for:
- Timezone

${@:-}
