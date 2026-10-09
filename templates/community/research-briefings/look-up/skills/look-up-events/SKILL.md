---
name: look-up-events
description: "Use when a Look Up user asks about comets (\"any comets?\"), eclipses (\"next eclipse?\", \"will I see the eclipse?\"), meteor showers (\"when are the Perseids?\", \"best time for the Geminids?\"), or what their binoculars or telescope can show tonight. Also the reference for viewing-gear limits. Comets come from MPC orbital elements, and there's a 2026-2030 eclipse table with local visibility."
---

# Look Up: comets, eclipses, meteor showers and gear targets
Voice: calm planetarium guide (rules in look-up-getting-started). Send engine text as written; it already has its one fact. Plain, honest, short; quiet when there's nothing to report.

**Engine:** unless `cat /workspace/look-up/ENGINE` prints `look-up v1.0.0`, do look-up-getting-started's Install first. If `python3 /workspace/look-up/core.py show` has no `home` or `onboarded` is false, run look-up-getting-started.

`E=/workspace/look-up/events.py` (JSON; active location and gear; `--place "<text>"` for elsewhere).

## Viewing gear (used everywhere)
`gear` is eye (default: naked eye or phone camera), binoculars or telescope.
- Eye: about magnitude 4, plus aurora a phone's night mode can catch.
- Binoculars: about 6.5; adds the Pleiades, Andromeda, the Double Cluster, the Beehive, Mizar and Alcor, Jupiter's moons, Venus's crescent, comets to magnitude 6.
- Telescope: about 9; adds Saturn's rings, the moon's terminator craters, double stars like Albireo, comets to 9, and deep-sky objects (Orion Nebula, Andromeda, Lagoon) on moonless nights.
Beyond naked eye, say what's needed ("You'll need binoculars."). Change gear in look-up-settings.

## Comets ("any comets?")
`python3 $E comets`: comets within the gear limit (`--all` loosens it 3 magnitudes), from the Minor Planet Center's CometEls.txt (cached 3 days). Magnitudes are often optimistic by a magnitude or more; say "about".
- Empty `result` is normal: "No comets bright enough for <your eyes / binoculars / a telescope> right now. I'll tell you if one shows up."
- The daily check alerts a comet only when dark, clear, 10+ degrees up and within the limit (eye 4, binoculars 6, telescope 9), at most weekly.

## Eclipses ("next eclipse?")
`python3 $E eclipses --years 5`: eclipses visible here from the 2026-2030 table (`--all` adds the rest). Solar: local start, max and end, percent covered, local type, sun's direction. Lunar: moon's height at greatest eclipse and whether it rises or sets during it.
Reply with date, local times, coverage and where to look. Solar lines always say "certified eclipse glasses or a pinhole projector only"; lunar eclipses are safe. The daily check announces a visible eclipse on its day with a 30-minute reminder.

## Meteor showers ("when are the Perseids?")
`python3 $E showers`: showers within 30 days. Dates are the evening the peak night begins and drift about a day a year, so say "around". For a night: `python3 /workspace/look-up/night.py plan --date <peak evening>` (best hours, radiant direction and height, dark-site and suburban rates, moon interference).

## Gear targets tonight ("what can my telescope see?")
`python3 $E extras`: targets for their gear with direction, height and a note (deep-sky only on moonless nights). Reply with up to 4, best first.

## Daytime sights
The engine adds the moon in daylight and Venus in daylight or bright twilight (25+ degrees from the sun, magnitude -3.9 or brighter, 15+ degrees up in their hours). For Venus always say to block the sun with a building and never look at the sun.
