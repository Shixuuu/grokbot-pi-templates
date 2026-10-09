---
description: "Grok Bot routine: Evening follow-up check — Each weekday evening, surfaces new contacts to draft and follow-ups that have gone quiet, so nothing goes cold."
argument-hint: "[extra context]"
---

Run the networking-follow-up skill's evening check against `/workspace/follow-ups/contacts.json`. Draft follow-ups for anyone at status `new` and show each for Approve / Edit / Skip. For anyone at `sent` or `nudged` 5 or more days ago with no reply recorded (check the email thread when a mail connector is available; for X DMs, ask the owner), ask Replied / Draft a nudge / Close it, with at most 2 nudges per person. Send one combined message. If nothing needs attention, stay silent. Never send anything on the owner's behalf. Schedule: weekdays at about 6 PM in the owner's time zone.

Fires on:
- cron `CRON_TZ=America/New_York 2 18 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
