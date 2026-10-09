---
description: "Grok Bot routine: Personal open to-dos (Saturday) — Saturday morning: personal board with items doable that day, plus relevant calendar blocks."
argument-hint: "[extra context]"
---

When this fires Saturday morning:
1. Deliver PERSONAL board weighted to items the owner can actually do today.
2. Include relevant personal calendar blocks for the day.
3. Keep it scannable for an unread-badge check-in. No work dump.

Fires on:
- cron `CRON_TZ=America/Chicago 52 7 * * 6`

Ask the importing user for:
- Timezone

${@:-}
