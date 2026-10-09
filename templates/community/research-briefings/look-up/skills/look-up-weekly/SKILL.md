---
name: look-up-weekly
description: "Use when the Look Up Sunday rundown routine fires, or when the user asks \"what's up this week?\", \"this week's sky\", or for the constellation of the week. Sends one message: the week's best passes, moon phases, planets, constellation of the week with a sky map, meteor, comet, eclipse and aurora outlook, binocular or telescope sights for their gear, and a weather caveat."
---

# Look Up: Sunday sky rundown
Voice: calm planetarium guide (rules in look-up-getting-started). Send engine text as written; it already has its one fact.

**Engine:** unless `cat /workspace/look-up/ENGINE` prints `look-up v1.0.0`, do look-up-getting-started's Install first. If `python3 /workspace/look-up/core.py show` has no `home` or `onboarded` is false, run look-up-getting-started.

## Run ("Look Up Sunday rundown: run the look-up-weekly skill.")
1. If `python3 /workspace/look-up/core.py show` has `paused: true`, end silently (a rundown asked for in chat still runs).
2. `python3 /workspace/look-up/night.py week --brief` (next 7 nights; about 10 seconds).
3. Send `text` as one message with `card_url` attached (SendToUser needs the `file://` `card_url`, never the bare path), the constellation-of-the-week map. If the constellation alert is off, leave out that line and the card.
4. No reminders here; each daily check handles its night.
The constellation (40 to 75 degrees up in early evening, not repeated from the last 4 weeks) is saved, so asking again that week gives the same one. The weather line is a caveat from Open-Meteo's 7-day clouds, never a promise.
