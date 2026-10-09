---
description: "Grok Bot routine: Weekday morning briefing — Weekdays at 6:00 AM: send a short briefing of calendar, mail, LinkedIn, and Drive."
argument-hint: "[extra context]"
---

It is weekday morning in the user's local timezone. Send the user a short briefing for their day.

Cover:
- Today's events on their Google calendars, with times in their local timezone
- Anything notable later this week (holidays, upcoming events)
- Unread mail from their primary inbox: count plus the few most important new messages (skip obvious alerts/promos unless they need a reply). If they use webmail without a connector (for example Yahoo), use the signed-in browser session on your computer. If the session expired, say mail couldn't be read and do not ask them to paste a password in chat; they sign in on the computer themselves.
- LinkedIn messaging (signed-in browser session when there is no LinkedIn connector): unread or actionable messages that may need a reply; skip anniversary congrats and noise. If the LinkedIn session expired, say so briefly without asking for a password in chat.
- Recently changed or shared Google Drive files worth knowing about

Do not treat Gmail as their inbox if they use another provider for mail.

Look up current Google Calendar and Drive connector tools each run. Keep it short, concrete, and in Chief of Staff voice. Always send the briefing, even if the day is empty (say so in one line). Do not ask them to set this up again.

Fires on:
- cron `0 6 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
