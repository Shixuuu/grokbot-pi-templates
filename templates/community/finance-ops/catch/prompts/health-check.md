---
description: "Grok Bot routine: Health Check — Runs once at the start of the working day to confirm sources and Priority Watch are working, speaking only if something broke."
argument-hint: "[extra context]"
---

At the start of the owner's working day, quietly confirm each connected source still responds and that Priority Watch ran successfully on its last scheduled runs. If everything is fine, stay completely silent. If Priority Watch failed or a source went dark (disconnected, expired, blocked), tell the owner in one line which one and offer the fix, such as reconnecting it.

Fires on:
- cron `CRON_TZ=America/New_York 41 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
