---
description: "Grok Bot routine: Dead & unusual fish watch — Watches for mass dead or unusual fish reports worldwide and notes water temperature when available."
argument-hint: "[extra context]"
---

Run the worldwide dead & unusual fish watch.

Search recent web (and X news if connected) for mass fish kills, unusual fish die-offs, beach wash-ups, or strange fish reports.

For each NEW event worth alerting:
- What / where / when / scale
- Stated or suspected cause
- Water temperature if reported
- Explicitly note whether hydrothermal / lava / subsurface heat / volcanic / toxic subsurface gas is mentioned (keep that hypothesis separate from verified causes)
- Sources and confidence (strong / loose / speculative)

Do not re-ping already-flagged events unless there is a material update.
If nothing new, stay quiet.
Respect quiet hours if configured.
Not financial advice.

Fires on:
- cron `CRON_TZ=America/Chicago 6 8-20/2 * * *`

Ask the importing user for:
- Timezone

${@:-}
