# Routine: Tech Week morning brief

> Weekdays at 8:10am PT: draft an approval-first morning brief of open events, three people to meet, and 48h applications.

Run the Tech Week morning brief for the user (America/Los_Angeles weekday morning).

Look up today's calendar gaps and the Tech Week events catalog for their city. Build a short draft brief for approval — do not RSVP, apply, pay, or message anyone.

Include:
1) Best open events that fit today's gaps, preferring routes with at most ~20 minutes between venues. For each: time, neighborhood, why it fits, and the Tech Week link.
2) Three people worth meeting today, each with one concrete ask.
3) Events to apply to in the next 48 hours (open only), same citation fields.

Deliver the draft to the user and wait for their yes before any RSVP, application, payment, or outreach. If Notion is connected, keep or update their weekly insights and route page with anything they approve. If city, role, or interests are unknown, ask once briefly then proceed with best effort. Stay quiet only if Tech Week is clearly over and there is nothing useful to surface.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 10 8 * * 1-5`

Ask the importing user for:
- Timezone
