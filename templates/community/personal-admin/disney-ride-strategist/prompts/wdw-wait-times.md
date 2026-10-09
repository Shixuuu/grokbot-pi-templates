---
description: "Grok Bot routine: WDW wait times — Morning Early Entry sampling, only if the guest has Early Entry. Parks and must-dos are fill-ins."
argument-hint: "[extra context]"
---

Pull current Walt Disney World wait times for all four parks from Queue Times or ThemeParks Wiki. Append to the local wait-time log (JSON archive plus SQLite). Timestamps in America/New_York (park time).

Use this only if the guest has Early Theme Park Entry. If they do not, stay quiet and do not write a snapshot.

This routine is MORNING ONLY: every 5 minutes during the guest's local morning window that covers Early Entry. First check whether any park is in Early Entry or the first hour after official open (park hours are Eastern). If none are, stay quiet and do not write a snapshot. If at least one is, pull and save. Track the guest's Early Entry must-do rides (ask; do not assume).

Stay quiet unless a pattern changes a park-day or Early Entry recommendation. After the last park day, delete this routine.

Daytime hourly logging is a separate routine.

Fill-ins: has Early Entry yes/no; guest home timezone; morning sample window; Early Entry parks; must-do rides; last park day.

Fires on:
- cron `*/5 7-8 * * *`

Ask the importing user for:
- Timezone

${@:-}
