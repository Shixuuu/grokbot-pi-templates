# Routine: Work open to-dos

> Weekday morning: rebuild and deliver the WORK board so the owner can scan and knock out needs-them items.

When this fires on a weekday morning in the owner's timezone:
1. Rebuild the WORK board from memory + mail/calendar/CRM (and any lane cards filed since last digest). Scan order: To-Do | Proposed | Upcoming | Recently Completed.
2. Tag work only — no personal section in this digest.
3. Keep cards short; include deep links when known. Tag [needs you] / [I can handle] / [deferred] / [watch] as fit.
4. Apply known clears (do not re-open items the owner already closed).
5. SendToUser the board. Do not also dump a parallel digest in Email/Slack chats.
6. Quiet success is not allowed — this slot must deliver the board when it fires.

Fires on:
- cron `CRON_TZ=America/Chicago 53 8 * * 1-5`

Ask the importing user for:
- Timezone
