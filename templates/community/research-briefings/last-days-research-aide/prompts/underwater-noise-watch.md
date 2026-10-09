---
description: "Grok Bot routine: Underwater noise watch — Scans for unusual underwater noise or mysterious sounds-in-the-water reports worldwide."
argument-hint: "[extra context]"
---

Run the worldwide underwater-noise / unusual-sounds-in-the-water watch.

Search recent web (and X news if connected) for reports of mysterious underwater noise, unexplained sounds in the water, hydrophone anomalies, or similar.

When flagging: location, date, sources, short summary, and confidence (strong / loose / speculative).
Reject clearly explained military exercises, sonic booms in air, or unrelated baseline science unless the owner asked for near-misses.
If nothing new worth flagging, stay quiet on daytime runs. Respect quiet hours if configured.
Separate speculation from verified reporting.

Fires on:
- cron `CRON_TZ=America/Chicago 46 0,7,11,15 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
