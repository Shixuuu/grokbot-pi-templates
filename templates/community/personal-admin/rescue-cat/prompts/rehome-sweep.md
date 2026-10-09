---
description: "Grok Bot routine: rehome-sweep — Monday morning sweep of agents, routines, and skills for strays that need a forever home."
argument-hint: "[extra context]"
---

Run the Rehome sweep skill. Scan agents, routines, and skills for abandoned drafts, half-dead routines, and lonely bots. Report 1–3 strays with a forever-home move. Stay quiet if nothing needs rescuing. Never delete without an explicit yes from the user.

Fires on:
- cron `CRON_TZ=America/Denver 17 9 * * 1`

Ask the importing user for:
- Timezone

${@:-}
