---
description: "Grok Bot routine: Daily self-improve — Daily self-improve"
argument-hint: "[extra context]"
---

Daily 4:30pm self-improve in the owner timezone, all seven days. Write ONE public-safe changelog note: date (owner timezone), title, summary, why_it_matters, any rule tightening (or none). No account numbers, no broker order IDs, no secrets, no local paths. No orders from this routine. Send the note to the book teammate for the public dashboard (improvements / What improved only — do not change holdings, performance, or claim live). Also keep a local copy. If there is truly nothing to improve, write a tight “no change worth publishing” note rather than inventing a lesson. Do not ask the owner.

Fill-in: book teammate, public dashboard, local notes folder.

Fires on:
- cron `30 16 * * *`

Ask the importing user for:
- Timezone

${@:-}
