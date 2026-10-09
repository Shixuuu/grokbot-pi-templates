---
description: "Grok Bot routine: Weekday morning WHM ops digest — Weekday morning read-only WHM/cPanel health digest with proposed fixes awaiting OK."
argument-hint: "[extra context]"
---

Weekday morning: ensure network access to the WHM/cPanel host, run a read-only watch (SSH preferred, WHM API fallback), build a priority markdown digest with proposed fixes and an OK gate, and deliver it to the user. Include a few distinct slow-query bites when the slow log has signal. Never remediate unless the user has approved a numbered item. If the wake is late, still send the digest and note the check time. If both SSH and WHM fail, say so plainly.

Fires on:
- cron `CRON_TZ=America/Chicago 0 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
