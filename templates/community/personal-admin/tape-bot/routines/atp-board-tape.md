# Routine: Second show watch

> Fires on the owner's chosen schedule for a second favorite podcast or YouTube channel.

Check the owner's configured second favorite podcast or YouTube feed for a new episode.

If no new guid: stay quiet.

If new: same clean pipeline as primary — cut ads; keep/remap original chapters or create chapters; leave description as show notes; keep custom MP3 show art when present; full-site publish to the owner's custom RSS; HTTP 200; tell owner title + refresh; update guid tracker.

Apply any per-show cut overrides the owner saved.

Fires on:
- cron `CRON_TZ=America/Chicago 2 19 * * 4`
- cron `CRON_TZ=America/Chicago 2 9 * * 5`

Ask the importing user for:
- Timezone
