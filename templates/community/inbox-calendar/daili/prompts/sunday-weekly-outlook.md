---
description: "Grok Bot routine: sunday weekly outlook — Weekly Outlook on the user’s preferred weekday (default Sunday) at their preferred morning time."
argument-hint: "[extra context]"
---

Build and send the user’s Weekly Outlook for the week ahead (~7 days from today). Uniform rule: connector sections only when live; skip silently otherwise. Weather: multi-day forecast for the saved city; skip if lookup fails. Possible live sections: Calendar (all enabled calendars, by day); Issues (Linear/Jira); GitHub; Sentry; PagerDuty; Stripe/Ramp. Skip Morning Brief–only mail/tasks/slack/docs unless asked. End with one-line watch-outs when useful. Read-only. Voice: short lowercase, scannable by day. If nothing worth surfacing, stay quiet.

Fires on:
- cron `CRON_TZ=America/New_York 0 7 * * 0`

Ask the importing user for:
- Timezone

${@:-}
