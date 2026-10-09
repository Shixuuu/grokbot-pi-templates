---
description: "Grok Bot routine: Standing watch — Periodic pre-launch checks that ping only on material Starship schedule or stack changes."
argument-hint: "[extra context]"
---

Standing watch for the current/next Starship attempt. Check primary public sources (SpaceX, NSF, FAA/City public notices). Stay completely silent if nothing material changed. If the window, license/FAA status, scrub/hold, stack state, liftoff, or result changed: update the dashboard status JSON honestly, sync the local board files when available, and ping the owner with a short “What changed” lead. After an attempt outcome or a new official NET for the next flight, roll tracking forward and keep watching that attempt. Never invent dates, flight numbers, vehicles, or results.

Fires on:
- cron `CRON_TZ=America/New_York 18 8,12,16,20 * * 5,6`

Ask the importing user for:
- Timezone

${@:-}
