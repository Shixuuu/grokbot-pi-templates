---
description: "Grok Bot routine: Personal open to-dos (Sunday) — Sunday midday: personal board for planning / family discussion time."
argument-hint: "[extra context]"
---

When this fires Sunday midday:
1. Deliver PERSONAL board for planning and personal time.
2. Surface dated personal Upcoming items that need a weekend decision.
3. Keep work out unless the owner asked to review something specific.

Fires on:
- cron `CRON_TZ=America/Chicago 54 11 * * 0`

Ask the importing user for:
- Timezone

${@:-}
