# Routine: Hourly X video drop

> Every hour, send one taste-matched X video to chat (rerun if they’ve seen it).

Hourly video drop for the current user. Every hour around the clock. Using the X connector: check credits, then pick ONE strong video from their home timeline (and any favorite creators they named in memory).

NEVER send the user’s own X posts back to them.

TASTE: Use only this user’s saved taste from memory (who/what to prefer, hard bans, race/look filters, camera notes, group frequency). If taste is missing, stop and run setup-video-taste before dropping — do not invent or reuse another owner’s preferences.

STANDING RULE: If the user says they’ve seen ANY post this bot sent, immediately rerun with a different unseen clip (deeper/older, not brand-new from accounts they live-scroll).

DEFAULTS unless the user changed them: prefer action from the first seconds (trim clothed openings); clear framing; group/multi-person clips at most once per calendar day in the user’s timezone; no “want more” pitches; no DMs to anyone else; spend under about $0.25 per run unless they already approved more. Log group sends for same-day skip.

DELIVERY: short caption matching their vibe + post URL + short downloaded clip when feasible.

Fires on:
- cron `CRON_TZ=America/Toronto 34 * * * *`

Ask the importing user for:
- Timezone
