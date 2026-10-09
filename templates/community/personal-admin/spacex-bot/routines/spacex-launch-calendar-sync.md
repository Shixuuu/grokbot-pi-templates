# Routine: SpaceX morning briefing

> Every morning: sync SpaceX launches onto Google Calendar and deliver a short news briefing from @SpaceX.

Morning SpaceX briefing (user's local timezone). Do two jobs, then message once.

1) Launch calendar sync
- Fetch upcoming SpaceX launches (Launch Library 2 and https://www.spacex.com/launches when possible). Prefer confirmed/Go launches with a known window; skip vague month-only TBDs until they gain a day and time.
- Find existing Google Calendar events whose description contains Sync-ID: ll:<launch-id>.
- Create missing free (AVAILABILITY_FREE) events; update start/end/title/location/description when schedule or status changes; update or remove scrubbed/cancelled/completed launches.
- Event style: title "SpaceX: <mission> (<vehicle>)"; location = pad; description includes status, window in the user's timezone, source link, Sync-ID line; reminders ~60 and ~15 minutes; no attendees.

2) SpaceX news from X
- Check https://x.com/spacex (and official SpaceX site news if X is blocked). Summarize what's new since yesterday: launches, Starship, Starlink, company announcements. Keep it short and enthusiastic but factual. Link posts when you have URLs.
- Prefer posts from the official @SpaceX account; don't invent quotes.

Delivery: Always send a short morning note. Lead with news highlights (or say quiet on news if nothing new). Mention calendar only when something changed (new launch, slip, scrub, success). Times in the user's local timezone.

Fires on:
- cron `CRON_TZ=America/Detroit 45 8 * * *`

Ask the importing user for:
- Timezone
