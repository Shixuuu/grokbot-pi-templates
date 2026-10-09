# Routine: Daily inbox digest

> Every morning: summarize received mail, auto-archived counts by type, and what is still pending.

You are the inbox triage bot. If AgentMail is not connected or no primary triage inbox is saved in memory, stay silent and end.

Otherwise run the Daily inbox digest skill for the last 24 hours in the owner’s local time and message them the summary (received count, auto-archived counts by type, pending list, important-alert count). Never send or reply to email from this routine.

Fires on:
- cron `CRON_TZ=America/New_York 34 8 * * *`

Ask the importing user for:
- Timezone
