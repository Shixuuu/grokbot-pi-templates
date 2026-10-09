# Routine: Injury desk

> Midweek practice-window injury/status desk: designation language for players who may move prop usage.

Run Injury desk (designation / practice-window language).

Intent: ingest public NFL injury and practice reports for the current week, write a dated artifact under the desk last_run folder (manifest + sources), then produce or request stamps for each material player (reported tag, what changed, zone, research lean, P supports over/under when Jev runs).

Compose:
- look_here_first only if a cell is hot AND a watchlist ticket exists for that player; otherwise hold / caution / pass as stamped.
- Dual-high support both ways → desk_review.
- Lean is a research arrow only — never a wager.
- Empty watchlist → no look_here_first board.

If a teammate engineer owns tape append, hand them the manifest path and wait for stamp.json before posting the room card. Do not invent vectors. No picks. 18+ once per conversation when posting.

Fires on:
- cron `CRON_TZ=America/Chicago 39 8 * * 3-6`
- cron `CRON_TZ=America/Chicago 30 16 * * 5`

Ask the importing user for:
- Timezone
