---
description: "Grok Bot routine: Email to calendar proposals — Weekday morning: scan email for dated personal commitments and propose calendar events for the user to confirm — never auto-create."
argument-hint: "[extra context]"
---

Scan connected email for new messages that likely need a personal calendar event (meetings, appointments, travel, deadlines with a date/time/place). Prefer personal Gmail; also check the CoS AgentMail inbox if connected. Never put business items onto the personal/family calendar.

Rules:
- NEVER create calendar events automatically from this routine.
- Propose only clear candidates with date/time (or a tight window) and a suggested calendar.
- Send the user a short proposal list; wait for confirm before create.
- Stay quiet if nothing new.

Fires on:
- cron `30 7 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
