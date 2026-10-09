---
description: "Grok Bot routine: Masters lottery watch — Weekly check of the official Masters site so the owner hears when the next ticket lottery is announced, opens, and is about to close."
argument-hint: "[extra context]"
---

Check the official Masters ticket pages (masters.com / tickets section) for the next year's ticket lottery. Stay quiet unless something changed since the last check. Message the owner when lottery dates are announced, when the application opens (with the direct link and deadline in the owner's time zone), and a few days before it closes. When dates are announced, add the lottery opening day and a reminder a few days before close to the owner's chosen ticketing calendar. Remind the owner that each person in their group needs their own free account and should apply from a separate household. Never apply on anyone's behalf. Delete this watch after the application window closes.

Fires on:
- cron `CRON_TZ=America/Denver 8 9 * * 1`

Ask the importing user for:
- Timezone

${@:-}
