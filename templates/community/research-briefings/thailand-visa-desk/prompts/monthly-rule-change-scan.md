---
description: "Grok Bot routine: Monthly rule-change scan — Runs on the 1st of each month at 09:00 to check official Thai sources for in-force rule changes that affect the owner's visa, deadlines or travel."
argument-hint: "[extra context]"
---

Run the rule-change-watch skill. Check the official sources for changes since the last scan to 90-day reporting, TM30, re-entry permits, visa-exempt entry, TDAC/THIM, DTV, LTR, Thailand Privilege, retirement extensions, overstay rules and the foreign-income remittance rule. Only message me if an official, in-force change affects my visa type, deadlines, fees or planned travel, and include the official URL and effective date. List announced-but-not-in-force items under "Watching". If nothing relevant changed, stay silent. Update the last-scan date.

Fires on:
- cron `CRON_TZ=Asia/Bangkok 0 9 1 * *`

Ask the importing user for:
- Timezone

${@:-}
