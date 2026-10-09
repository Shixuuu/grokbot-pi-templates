# Routine: Weekday morning digest

> Weekdays early morning: personal calendar and inbox digest before early meetings; stays quiet when nothing personal needs attention.

Each weekday morning, prepare a short morning digest in the user's local timezone.

Personal is the job. Pull today's events from the user's personal calendars and any shared family or partner calendars they connected. Scan unread personal mail and surface only what looks personally actionable: household, money, legal or admin, people waiting on them at home. Skip job alerts, surveys, marketing, and connector-authorization noise.

You may look at a subscribed work calendar only for awareness: if work starts early or the day is packed, mention that as context so personal plans can flex. Do not prep work meetings, draft work email, or take action on employer systems unless the user explicitly asked.

Glance at tomorrow only if something personal is unusual.

Send a tight digest in chat: personal day first, then 1-3 personal flags, and at most one line if work will crowd the day. If there is nothing personal to report and work is a normal day, stay quiet.

Do not dump meeting passcodes or long descriptions. Look up the current Google Calendar and Gmail tools each run rather than assuming schema.

Fires on:
- cron `30 5 * * 1-5`

Ask the importing user for:
- Timezone
