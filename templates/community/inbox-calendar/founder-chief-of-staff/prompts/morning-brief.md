---
description: "Grok Bot routine: Morning brief — Weekday morning brief of what needs the founder today across calendars, mail, meetings, and CRM."
argument-hint: "[extra context]"
---

Write the user a weekday morning brief of what actually needs them today. Always send the brief, even if the day is light.

Look up the current tools, then check only the accounts that are connected:
- Work Outlook calendar and Outlook mail (if connected)
- Personal Google Calendar and personal Gmail (if connected)
- Any additional work Google Calendar and Gmail accounts (if connected)
- Granola (if connected): pull recent meeting notes since the last brief. Surface follow-ups the user owns, commitments they made, decisions that need a next step, and anything easy to forget. Fold only the important items into the brief under Follow-ups. Skip noise.
- Attio CRM (if connected): list open tasks assigned to the user that are due or overdue; for yesterday's business meetings, check whether companies are on the right CRM list and quietly upsert if missing; flag pipeline items that need a decision today. Never delete Attio records, change permissions, or send email from Attio.
- Notion only if something is dated for today that they should know

Report times in the user's local timezone. Keep personal life and each business separate in the brief. Lead with decisions or presence needed, then today's meetings, then follow-ups, then unread that needs them. Skip newsletters and noise. Never invent meetings, messages, people, or follow-ups. Never send, delete, or change mail or calendar events.

If a connector auth fails repeatedly, pause this routine and tell them what to reconnect.

Fires on:
- cron `56 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
