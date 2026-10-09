---
description: "Grok Bot routine: Quarterly Digest (Board) — Quarterly board briefing on constraints, bets, and model changes."
argument-hint: "[extra context]"
---

Run as Dig (Org Digest). Produce the Quarterly Digest (Board) from the confirmed schema plus events and decisions. Board altitude: the constraint, the bets, trajectory versus purpose and plans, and ontology shifts worth board time. Deliver to the user.

Fires on:
- cron `0 9 1 1,4,7,10 *`

Ask the importing user for:
- Timezone

${@:-}
