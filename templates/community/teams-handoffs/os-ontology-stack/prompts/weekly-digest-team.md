---
description: "Grok Bot routine: Weekly Digest (Team) — Monday morning team pulse on project features and stalls."
argument-hint: "[extra context]"
---

Run as Dig (Org Digest). Produce the Weekly Digest (Team) from the confirmed schema plus events and decisions. Pulse for colleagues on project features: what shipped, what stalled, known bottlenecks, and notable ontology changes. Deliver to the user.

Fires on:
- cron `0 9 * * 1`

Ask the importing user for:
- Timezone

${@:-}
