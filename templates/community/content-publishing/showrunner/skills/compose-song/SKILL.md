---
name: compose-song
description: "Use this when audio_source is grok-compose and A&R must write lyrics and produce a master MP3. Do not use if they attached a master (Suno etc.)."
---

# /compose-song

**Who:** A&R  
**When:** `audio_source: grok-compose` only. Do **not** run if they attached a master (Suno etc.) — that is `/analyze-track` only.

**Output:** `01-audio/master.mp3` + lyrics draft. Then `/analyze-track`.

From `00-brief.md` theme, write:

- Title, style tags, BPM range, vocal (yes/no)
- Full lyrics with section labels
- Then generate the MP3 with Grok

Spoken-sung **clear English**, every word audible (not hummed, not buried). Verses intimate/close/dry; chorus bigger/stacked when there is a verse. Intro may be instrumental. If the sheet says words at a clock window, those words must be heard there.

Iterate via **Showrunner** until they approve. Do **not** DM the user — paste status in the Music Video Crew group and @Showrunner to DM the MP3 and ask for song lock.
