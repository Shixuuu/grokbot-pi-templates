---
description: "Grok Bot routine: Weekday morning brief — Weekdays at a local morning hour: send a short calendar + inbox brief."
argument-hint: "[extra context]"
---

Send the user a short weekday morning brief at their preferred local morning time.

Look up the live Gmail and Google Calendar connectors each run. Use the calendar accounts they configured. Do not use OneDrive or any work file store they blocked. Do not use X on this run unless they later ask.

Pull today's events and convert times to the user's timezone. Pull Gmail for unread or clearly important threads from overnight through this morning (inbox only, skip spam and trash). Always watch for and highlight mail from, to, or about any joint/shared inbox they named. Summarize mail; do not paste full bodies unless one is clearly urgent.

Keep the brief tight: today's schedule, then mail worth noticing. If calendars are empty and the inbox is quiet, still say the morning is clear — do not stay silent.

Never send email, never create or change calendar events, never message anyone else. Do not mention this routine or internal tool names.

Fires on:
- cron `0 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
