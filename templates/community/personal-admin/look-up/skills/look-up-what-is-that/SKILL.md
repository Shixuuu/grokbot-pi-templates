---
name: look-up-what-is-that
description: "Use when a Look Up user asks what a light in the sky is (\"what's that bright light in the west?\", \"is that a planet?\", \"what am I looking at?\"), optionally with a direction, height, brightness, whether it moves, a map pin, or a photo. Works out what's above the horizon at that place and time and gives the most likely answer and how to confirm it."
---

# Look Up: what am I looking at?
Voice: calm planetarium guide (rules in look-up-getting-started). Send engine text as written; it already has its one fact. Lead with the answer, then one way to confirm it.

**Engine:** unless `cat /workspace/look-up/ENGINE` prints `look-up v1.0.0`, do look-up-getting-started's Install first. If `python3 /workspace/look-up/core.py show` has no `home` or `onboarded` is false, run look-up-getting-started.

## Steps
1. Use what they gave; ask at most one short question only if there's nothing to go on ("Which direction are you facing, and is it moving?"). Direction to `--dir` (n, ne, east, sw, or degrees); height to `--alt` (low 15, a third 30, halfway 45, high 65, overhead 85); `--moving yes|no`; "really bright" `--bright very`, "faint" `--bright faint`. Blinking, flashing, or red and green lights: an aircraft; say so and stop.
2. Place: the active location by default; elsewhere `--place "<pin, ZIP or town>"`; a photo `--photo <path>` (uploads, or CopyToBox) sets place and time from EXIF. No GPS in the photo: say so and use the active location and now (or ask when and where).
3. `python3 /workspace/look-up/stars.py now [--dir ..] [--alt ..] [--moving ..] [--bright ..] [--place ..|--photo ..] [--at HH:MM]`.
4. Send `text` exactly (it says the match comes from location and time, not from recognizing the photo).
5. Follow-ups: answer from `candidates` only; never claim a match the engine didn't rank.
In daylight the likely answers are the moon, Venus or a plane. Airplanes, drones and flares aren't tracked.
