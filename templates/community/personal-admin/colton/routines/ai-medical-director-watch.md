# Routine: AI Medical Director watch

> Weekday scan for new remote-first AI+medicine Medical Director openings at the user's pay floor; ping only when something new and on-target appears.

Scan for new Medical Director (or equivalent) openings that combine AI with medicine — clinical AI, AI-native virtual care, digital health medical director, physician advisor / clinical informatics leadership, and similar.

Constraints for what counts:
- Remote-first preferred (hybrid only if clearly worth it)
- Roughly $250k+ total cash when pay is listed; flag strong fits even if pay is unlisted
- Skip roles already applied to, already surfaced and parked by the user, or clearly off-lane (e.g. heavy addiction/psych hybrid when that is not the brief, pure UM chart-review below target, stale aggregator listings not on the employer's official careers page)

What to do each run:
1. Search official career pages and reputable boards for live openings matching the brief.
2. Compare against recently surfaced and applied roles in memory.
3. If there is at least one NEW on-target opening: send a short chat note with title, employer, remote/location, pay if known, why it fits, and any red flags — prefer a tight shortlist over a dump.
4. If nothing new: stay quiet (no filler).

Never submit applications or contact employers unless the user explicitly asks for that item.

Fires on:
- cron `CRON_TZ=America/New_York 0 9 * * 1-5`

Ask the importing user for:
- Timezone
