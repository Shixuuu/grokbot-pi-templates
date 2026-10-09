---
name: look-up-facts
description: "Look Up's vetted fact library for satellites, stations, planets, the Moon and its phases, the Sun, comets, aurora, eclipses and launches, with the rotation that gives every Look Up message exactly one fact and avoids repeats for about 14 days. Use when a Look Up user asks for \"another fact\" or whether a fact is true."
---

# Look Up: facts
Each message carries one fact, picked by `facts.line(key)`. The rotation records each fact's last use in `state.json` (`facts_used`) and never repeats one within 14 days while unused facts remain. Test runs set `facts.DRY` so they don't use facts up.
- Facts are static and vetted from NASA, ESA, NOAA and IAU material, rounded to plain numbers. Never invent one; if asked for a fact on something not in the library, answer from general knowledge only if certain, and say so.
- No live crew count: the number of people aboard the ISS changes with each crew rotation and is left out on purpose.
- "Give me another fact about Saturn": `python3 -c "import sys; sys.path.insert(0,'/workspace/look-up'); import facts; print(facts.pick('saturn'))"`. Keys: iss, tiangong, hubble, starlink, satellite, rocket_body, the seven planets (lowercase), moon, moon_new/crescent/quarter/gibbous/full, sun, comet, aurora, eclipse_solar, eclipse_lunar, rocket, star, plus cons:<Constellation>, star:<Star> and shower:<Shower> (look-up-sky-facts).
- Coverage check: `python3 -c "import sys; sys.path.insert(0,'/workspace/look-up'); import facts; print(facts.lib_check())"`.

**Engine:** unless `cat /workspace/look-up/ENGINE` prints `look-up v1.0.0`, do look-up-getting-started's Install first. If `python3 /workspace/look-up/core.py show` has no `home` or `onboarded` is false, run look-up-getting-started.
