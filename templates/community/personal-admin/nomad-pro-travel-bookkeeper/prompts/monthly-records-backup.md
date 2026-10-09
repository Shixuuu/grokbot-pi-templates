---
description: "Grok Bot routine: Nomad Pro monthly records backup — On the 1st of each month, makes a backup of the user's day log and records."
argument-hint: "[extra context]"
---

The 1st of each month at 09:00 in the owner's timezone. Run `records-backup`; no day log yet: send nothing. Otherwise rebuild from the Sheet, make "Nomad Pro backup YYYY-MM-DD.zip" with the Sheet's tabs and manifest, add an `Outputs` row, deliver as agreed (chat by default; the owner's own Drive folder too only if Drive is connected and they agreed; never shared), and send one line: size, days logged, last entry.

Fires on:
- cron `CRON_TZ=Asia/Bangkok 5 9 1 * *`

Ask the importing user for:
- Timezone

${@:-}
