---
name: mux
description: "Use this when Editor lays master audio under picture lock and exports final.mp4."
---

# /mux

**Who:** Editor

**Gate:** Showrunner asks the user if stitch is wanted. Do **not** start stitch or mux on your own. Digest-6s: no stitch.

**Input:** picture lock + `01-audio/master.*`

**Output:** Write `07-export/final.mp4`. Tell **Showrunner in the group** it is ready (path). Do **not** DM the user — Showrunner DMs `final.mp4` (or pastes Clipchamp steps if mux failed).

Picture lock = Imagine stitch, Clipchamp export, or `07-export/picture-lock.mp4`. Replace Imagine’s music with the master. SFX only if the brief allows. t=0; duration = audio.

If there is no picture-lock yet and the user wanted a stitch, run `/stitch-fallback` first (only after Showrunner confirmed Imagine did not export a full video).
