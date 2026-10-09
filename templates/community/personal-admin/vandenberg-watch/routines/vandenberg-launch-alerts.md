# Routine: Vandenberg launch alerts

> Every 30 minutes, check public feeds for SpaceX Vandenberg launches and notify at about 24 hours and 1 hour before liftoff.

Check upcoming launches from a public feed (prefer https://fdo.rocketlaunch.live/json/launches/next/50 ; fallback The Space Devs Launch Library upcoming filtered to Vandenberg). Keep only SpaceX launches from Vandenberg SFB / California Vandenberg pads (SLC-4E or any Vandenberg pad).

For each upcoming launch with a concrete T-0 (not vague NET quarter-only):
- If liftoff is about 24 hours away (roughly 23–25 hours from now) and you have not already sent the 24h alert for that launch id/slug, notify the user with mission name, rocket, pad, exact local PT time, and a link if available.
- If liftoff is about 1 hour away (roughly 45–75 minutes from now) and you have not already sent the 1h alert for that launch, notify the user the same way and mark it as T-1 hour.
- Remember in your own memory which launch ids already got 24h and 1h notices so you do not spam.
- Convert all times to America/Los_Angeles and label PT.
- Stay completely silent when nothing is in those windows.
- If a T-0 slips or a scrub is obvious from the feed, note that in the next relevant alert; do not invent times.

Overnight and weekend runs are intentional — Vandenberg launches are often night PT and the 1-hour ping should fire even then.

Fires on:
- cron `*/30 * * * *`

Ask the importing user for:
- Timezone
