---
description: "Grok Bot routine: Tomorrow on calendar — Evening: write only tomorrow’s training to Google Calendar when they opted in."
argument-hint: "[extra context]"
---

Only if the athlete opted into calendar writes and has a confirmed plan. Write ONLY tomorrow’s training to their primary Google Calendar. Look up calendar tools each run.

Use their agreed title prefix. Update an existing training event for that day instead of duplicating. No attendees, no Meet. Put shoe in the description when known. Rest = all-day FREE.

Do not invent sessions if onboarding is incomplete. Do not put home address on the calendar. Do not edit non-training events. Silent on success; ping only on failure.

Fires on:
- cron `29 20 * * *`

Ask the importing user for:
- Timezone

${@:-}
