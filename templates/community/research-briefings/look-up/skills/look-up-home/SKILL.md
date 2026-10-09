---
name: look-up-home
description: "Use when a Look Up user permanently changes their home sky: \"reset my location\", \"new home\", \"I moved\", \"we moved to <place>\", or a new photo sent with \"this is my new spot\". Also use for \"show settings\" and \"where am I set to?\". Replaces home, re-checks obstructions, reschedules the routines if the time zone changed, and confirms with a fresh tonight preview. Travel is separate (look-up-settings)."
---

# Look Up: home reset and settings view
Voice: calm planetarium guide (rules in look-up-getting-started). Send engine text as written; it already has its one fact. Keep confirmations short.

**Engine:** unless `cat /workspace/look-up/ENGINE` prints `look-up v1.0.0`, do look-up-getting-started's Install first. If `python3 /workspace/look-up/core.py show` has no `home` or `onboarded` is false, run look-up-getting-started.

**Location rule:** a home or travel location comes only from photo EXIF GPS, a map pin or link, coordinates, a ZIP code, or a town the user typed here; never from memories, profile facts, other agents, an IP address, the time zone, or a guess. If `core.py home` or `travel` returns `location_set: false`, send its `say` and stop: no preview, next question or routines until a real place is set and confirmed by name.

`K=/workspace/look-up/core.py`, `N=/workspace/look-up/night.py` (JSON).

## Home reset vs. travel
- **Home reset** (permanent): "reset my location", "new home", "I moved", "we moved", "change my home", or a photo or pin with "this is my new spot" / "new home". Use this skill.
- **Travel** (temporary): "I'm at <place> this week", "here till Friday", or a bare pin: use look-up-settings. Unclear: ask once, "Is that a new permanent home, or just a trip?"
- A reset doesn't end an active trip: if `travel_active`, say alerts follow the trip until it ends, then the new home.

## Home reset flow
1. No place given: ask "Send a photo of the sky from the new backyard (daytime is best), or a map pin, ZIP or town."
2. Photo: `python3 $K home --photo <path>` (JPEG/HEIC). Place: `python3 $K home <pin link, "lat, lon", ZIP, or town>`. `location_set` false: send `say` exactly and wait; the old home stays, nothing is previewed or rescheduled. A later place reuses `photo_for_obstructions`. Named town: `python3 $K label home <Town, ST>`.
3. Old obstructions clear automatically. With a photo, record obvious trees or roofs via `obstruct` / `open` as in getting-started step 2; otherwise ask nothing.
4. If `tz_changed`: read the routines skill; update "Look Up daily sky check", "Look Up Sunday rundown" and "Look Up moon note" to the same local times with `CRON_TZ=<new tz>` (same minutes and prompts); delete "Look Up one-shot ..." routines dated today or later. Same zone: leave routines alone. Declined save: say so, don't retry.
5. Two messages: (a) `confirm` phrased as "Your new home is set to <label> (<zone> time).", plus "Your daily check, Sunday rundown and Moon note now follow <zone> time." if the zone changed, plus any obstruction line; (b) `python3 $N preview` `text` exactly, with `card_url` attached (SendToUser needs the `file://` `card_url`, never the bare path); create its `highlight_reminders` as in getting-started step 7.
6. Memories: save the new home label and zone; remove the old home.

## Show settings
`python3 $K show`. Reply in 2 to 4 full sentences, never "Label: value" lines, e.g. "Your home is Willow Bend (Eastern time). I'm watching for everything you can see with your eyes, from dusk to 11 PM, and the Moon note arrives at **9:10 PM**." Mention travel (place, end date), paused and obstructions only when present. No exact coordinates unless asked.
