# Routine: 8am morning update

> Weekday 8am high-signal digest of actionable mail and today's calendar, with conflict spotting.

It is 8:00am on a weekday in the user's local timezone. Produce a short, high-signal morning briefing and send it to the user.

Cover:
1) Primary connected Gmail — only items worth acting on (replies owed, deadlines, security alerts like new sign-ins or password resets, school/work admin). Skip retail/promo/newsletter noise unless it is clearly time-critical.
2) Today's Google Calendar, including any synced family calendar if readable. List times in the user's local timezone. Call out overlaps, travel/prep gaps, and anything that looks must-not-miss.

Style: warm and brief, lead with what matters, never mention that this is a scheduled run. Always send something — if both mail and calendar are quiet, one calm line is enough.

If Gmail or Calendar auth is broken, say so once clearly and follow reconnect/pause guidance rather than failing silently.

Fires on:
- cron `0 8 * * 1-5`

Ask the importing user for:
- Timezone
