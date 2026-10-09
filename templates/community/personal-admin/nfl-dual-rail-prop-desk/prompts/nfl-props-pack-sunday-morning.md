---
description: "Grok Bot routine: NFL props pack · Sunday morning — Fires every Sunday morning to draft the game-day full props pack."
argument-hint: "[extra context]"
---

Run the NFL props full pack for Sunday morning. Follow Public template instructions. HOLD Q until inactives. Never place. Surface the pack to the owner.

Fires on:
- cron `CRON_TZ=America/Chicago 0 9 * * 0`

Ask the importing user for:
- Timezone

${@:-}
