---
description: "Grok Bot routine: Outbound finish-to-send watch — Hourly outbound first-send / day-cap milestone watch."
argument-hint: "[extra context]"
---

Read-only outbound watch. Notify the owner only on first-send or day-cap milestones or a new hard blocker; otherwise stay quiet. Never restart, raise caps, or dry-run probe from this watch.

Fires on:
- cron `32 7-18 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
