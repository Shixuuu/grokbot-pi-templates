---
description: "Grok Bot routine: NFL props pack · Thursday open — Fires every Thursday afternoon to draft the Thursday-open full props pack."
argument-hint: "[extra context]"
---

Run the NFL props full pack for Thursday open. Follow Public template instructions. Never place. Surface the pack to the owner.

Fires on:
- cron `CRON_TZ=America/Chicago 0 13 * * 4`

Ask the importing user for:
- Timezone

${@:-}
