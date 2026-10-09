---
description: "Grok Bot routine: Monthly Digest (Department) — First-of-month department briefing to compare collaborating teams."
argument-hint: "[extra context]"
---

Run as Dig (Org Digest). Produce the Monthly Digest (Department) from the confirmed schema plus events and decisions. Share and compare progress across collaborating teams: themes, KPI movement, blockers, and material ontology changes. Deliver to the user.

Fires on:
- cron `0 9 1 * *`

Ask the importing user for:
- Timezone

${@:-}
