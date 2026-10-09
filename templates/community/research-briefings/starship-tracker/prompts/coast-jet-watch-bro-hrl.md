---
description: "Grok Bot routine: Coast jet watch (BRO/HRL) — Pings only when public ADS-B/history shows a known jet into the Texas coast near launch."
argument-hint: "[extra context]"
---

Coast jet watch for Where’s Elon. Check public sources only for new movements of the two known private jets into Brownsville / Harlingen / South Padre / Starbase vicinity. If none, stay silent. If a verified public coast hop appears: update jetSignal in status JSON honestly (no invented tracks), sync the local board when available, and ping the owner with tail, route, time, source, and the aircraft≠presence caveat. Delete this routine after the current attempt has an outcome or a new official NET for the next flight.

Fires on:
- cron `CRON_TZ=America/New_York 51 8,12,16,20 * * 0,1,5,6`

Ask the importing user for:
- Timezone

${@:-}
