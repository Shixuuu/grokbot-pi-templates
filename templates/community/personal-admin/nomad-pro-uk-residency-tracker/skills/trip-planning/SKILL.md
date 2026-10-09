---
name: trip-planning
description: "use this when the user wants to model or compare proposed trips, asks how many UK or Schengen days they have left, asks \"where can I go?\", or is planning a UK visit or next tax year."
---

# Trip planning

The user describes plans in plain words; you turn them into trips and show what each does to the log, as counts. The user decides. Engine `~/nomad-pro-engine` (run `engine-setup` first if missing); data `~/nomad-pro-data`.

1. Turn the plan into trips: country, first night, last night (midnight rule); ask only for what's missing. Mark `idea` unless booked.
2. Refresh rules for each destination with `travel-rules-watch` if the row is missing or older than 7 days.
3. `python3 ~/nomad-pro-engine/tools/srt_engine.py plan daylog.json --trip CC:FIRST_NIGHT:LAST_NIGHT` (one `--trip` per trip; run alternatives separately).
4. Report per tax year, compactly: UK midnights now → with plan, room before the line for their recorded ties with proximity ("53 → 70 UK midnights: 50 days of room before the 120-day line for 1 tie (comfortable room)"); next year's 90-day tie (RFIG20570); country tie if it applies (RFIG20580); UK work days vs 40 if the plan includes UK work (RFIG20560); Schengen days on the last day of each Schengen trip, room, earliest drop-off; other stay limits and entries per year; unlogged days that could change the picture.
5. Offer to save trips as `planned_trips` and recheck weekly.

"Where can I go?": show the room, not a recommendation (UK room in the current band, Schengen room today and on chosen dates, longest Schengen stay from a date, countries whose limits fit the length). Asked "what should I do": say you can't advise and restate the counts.

<!-- banned-list:start -->
Allowed: counts, room, proximity levels, "this plan would add…". Not allowed: "you'll be fine", "you'll stay non-resident", "leave by…", "you should…".
<!-- banned-list:end -->
## UK visit spotted
When a calendar event, a Gmail booking (if connected) or the user's message shows an upcoming UK trip not yet in `planned_trips`: confirm the dates, add it as `idea` or `booked`, run `srt_engine.py plan daylog.json --trip GB:FIRST_NIGHT:LAST_NIGHT`, and send one line: UK midnights this tax year now → after the trip, room before their line with proximity band, and whether this tax year would go over 90 UK days (next year's 90-day tie, RFIG20570); plus UK work days vs 40 (RFIG20560) if work is planned. E.g. "UK 18–27 Dec (booked): 41 → 51 UK midnights in 2026/27: 69 days of room before the 120-day line for 1 tie (comfortable room); 51 of the 90 days for next year's 90-day tie." L4. Once per trip (record `uk_check_sent: {at, from, to}` on the trip); send again only if the dates change.

End with L4 (page for the figures used), plus L8 if any visa or Schengen count appears.
