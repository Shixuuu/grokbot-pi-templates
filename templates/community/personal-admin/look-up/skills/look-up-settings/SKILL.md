---
name: look-up-settings
description: "Use when a Look Up user changes settings: \"pause alerts\", \"resume\", \"only ISS\", \"all alerts\", \"moon off\", \"moon on\", \"moon at 9:15\", \"change my hours\", \"telescope on\", \"binoculars\", \"naked eye only\", \"trees block the east\", \"help\", \"test mode\", or temporary travel (\"I'm at <place> this week\", a dropped map pin, \"back home\"). A permanent move or \"show settings\" goes to look-up-home."
---

# Look Up: settings, travel, and test mode
Voice: calm planetarium guide (rules in look-up-getting-started). Send engine text as written; it already has its one fact. Confirm each change in one line.

**Engine:** unless `cat /workspace/look-up/ENGINE` prints `look-up v1.0.0`, do look-up-getting-started's Install first. If `python3 /workspace/look-up/core.py show` has no `home` or `onboarded` is false, run look-up-getting-started.

`K=/workspace/look-up/core.py`, `N=/workspace/look-up/night.py` (JSON; `settings` shows the result).

## Commands
- pause alerts: `python3 $K pause`: "Paused. I'll keep quiet until you say resume." (routines keep running and exit silently). resume: `python3 $K resume`.
- only ISS / only aurora and meteors: `python3 $K only <words>`. all alerts: `python3 $K alerts all`. One off or on: `python3 $K alerts -starlink +rockets` (keys: iss, satellites, starlink, moon, planets, constellation, aurora, meteors, comets, eclipses, rockets). From plain words: `python3 $K set-alerts <words>`.
- moon off / on: `python3 $K moon off|on`; turning it on with no "Look Up moon note" routine: create it (routines skill, minute off :00/:30). moon at <time>: `python3 $K moon-time <time>` and move that routine.
- my hours: `python3 $K hours "<words>"` (ranges "9 to 11", "5 to 6:30 am"; two windows; dusk/sunset, dark, predawn/dawn, sunrise; "anytime"). Read back the saved hours.
- gear: "telescope on" / "I have a telescope": `python3 $K gear telescope`; "binoculars": `gear binoculars`; "naked eye only" / "just my eyes" / "telescope off": `gear eye`. Confirm in one line (alerts always say when gear is needed):
  - eye: "Naked eye and phone camera: I'll stick to things you can see without gear, roughly magnitude 4 or brighter, plus aurora a phone's night mode can catch."
  - binoculars: "Binoculars: I'll add comets to about magnitude 6, the Pleiades, Andromeda and other easy binocular sights, and Jupiter's moons."
  - telescope: "Telescope: I'll add dimmer comets, Saturn's rings, Jupiter's moons, the moon's terminator, double stars, and deep-sky objects like the Orion Nebula and Andromeda on moonless nights."
- obstructions: `python3 $K obstruct "<direction or 200-260> below <degrees>"`, or `obstruct clear`; open sky: `python3 $K open "<words>"`.
- show settings, reset my location, I moved, new home: look-up-home.
- help: "Here's what I answer to:
anything tonight? / next ISS pass: what's up and when
what's that light? (add a direction, or send a photo or pin)
I'm at <place> this week / back home: travel mode
I moved / reset my location: new permanent home
telescope on, binoculars, naked eye only: viewing gear
only ISS, all alerts, moon off, my hours are 9 to 11: settings
pause alerts / resume, show settings, test mode"

## Travel
**Location rule:** a home or travel location comes only from photo EXIF GPS, a map pin or link, coordinates, a ZIP code, or a town the user typed here; never from memories, profile facts, other agents, an IP address, the time zone, or a guess. If `core.py home` or `travel` returns `location_set: false`, send its `say` and stop: no preview, next question or routines until a real place is set and confirmed by name.
- "I'm at <place> this week", "here till Friday", or a bare pin: `python3 $K travel <place, ZIP, pin link, or "lat, lon"> --until YYYY-MM-DD` (this week = through Sunday; till Friday = that Friday; no end = 6 days). Photo with GPS: `--photo <path>`.
- Reply: "Got it: I'll watch the sky over <label> through <weekday, date>, then switch back to <home label>." Mention the zone if it differs.
- Nothing else changes (one-shots carry the active zone). After the end date the next check switches home itself and says "Back to <home> skies." once.
- "back home" early: `python3 $K travel-end`. "I moved" / "new home" / "this is my new spot": look-up-home.

## Test mode
`python3 $N test` (`--date YYYY-MM-DD` for another night) runs tonight's real computation and creates nothing. Show in order, each tagged [TEST] as given: `headsup` (or "[TEST] Tonight would be quiet: <weather verdict>, nothing worth stepping out for" if `send_headsup` is false), `sample_reminders`, `sample_look_now`, `sample_moon_note`, then attach `card_url`. End with one line listing the one-shots a real run would schedule (`reminders` names, `at_local`) and say none were created. Never touch routines in test mode. Sunday sample: `python3 $N week --brief` tagged [TEST]. Test runs don't use up facts.
