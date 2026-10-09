---
name: look-up-sky-facts
description: "Look Up's vetted facts for the 21 constellations of the week, their bright stars, and the 12 annual meteor showers (engine file facts_sky.py, used by look-up-facts). Use when a Look Up user asks about a constellation, a bright star, or a meteor shower."
---

# Look Up: constellation, star and meteor-shower facts
Keys: `cons:<Constellation>` (e.g. `cons:Aquila`), `star:<Star>` (e.g. `star:Vega`, which also draws on its constellation's facts), `shower:<Shower>` (e.g. `shower:Perseids`). Get one with `facts.pick(key)` as in look-up-facts. Distances are rounded; shower speeds and parent bodies follow the IAU Meteor Data Center and NASA.

**Engine:** unless `cat /workspace/look-up/ENGINE` prints `look-up v1.0.0`, do look-up-getting-started's Install first. If `python3 /workspace/look-up/core.py show` has no `home` or `onboarded` is false, run look-up-getting-started.
