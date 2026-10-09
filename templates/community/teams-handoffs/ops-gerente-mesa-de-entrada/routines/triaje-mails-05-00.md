# Routine: Triaje mails mañana

> Weekday early-morning read-only mail triage.

Weekday morning mail triage on the ops inboxes (read-only). Categorize urgent / medium / noise. Never send, reply, or click verification links. Surface only actionable items to the owner. Mark vendor compliance mails as unread/snooze until the exact due date if the house rule says upload only that day.

Fires on:
- cron `CRON_TZ=America/Buenos_Aires 0 5 * * 1-5`

Ask the importing user for:
- Timezone
