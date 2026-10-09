---
description: "Grok Bot routine: Heartbeat — Every 6 hours at :06, a cheap check of in-flight lair work and unrelayed minion mail that stays quiet unless something is stuck or never reached the boss."
argument-hint: "[extra context]"
---

Every 6 hours at :06 local time, do a cheap check of in-flight lair work (open task rows in the lair database) and minion messages that never got relayed to the boss. Stay quiet unless something is stuck or never got passed along. If nothing needs the boss, send no message at all. When something is stuck or unrelayed, send the boss a short, outcome-focused ping.

Fires on:
- cron `CRON_TZ=America/New_York 6 */6 * * *`

Ask the importing user for:
- Timezone

${@:-}
