---
name: lg-thinq-laundry-nl
description: "Use when a user wants natural-language control of an LG ThinQ washer or dryer (pick a cycle, delay start, wrinkle care, start/stop) or when setting up the LG Laundry Specialist bot."
---

# LG ThinQ laundry (natural language)

## First run
1. Clone `https://github.com/bryan-lmm/lg-thinq-grok-bot` if missing.
2. `./scripts/bootstrap.sh` (or venv + `pip install -e .`). Never bare system `pip` (PEP 668).
3. Before OAuth: after LG sign-in the page often looks like the login box again — OK; when the URL has `access_token`, hit **I'm done**.
4. `.venv/bin/thinq-specialty login` → `--callback-url`.
5. Store `THINQ_REFRESH_TOKEN` and `THINQ_CLIENT_ID` via secret card or chmod-600 env. Keep the same client id. Never put tokens in chat or memory.
6. `devices` then `courses`; cache scrubbed catalogs.
7. NL loads: dry-run → restate → execute only on clear go + Remote Start.

## Hard rules
- Only path: `thinq-specialty`. No HA / HACS / HAOS execute.
- ThinQ Connect PAT cannot set course.
- Do not invent courses. Name course + confirm Remote Start before start.
- Say the real install/OAuth error; PEP 668 is not auth.
- Credits: ollo69/ha-smartthinq-sensors, sampsyo/wideq.

## Mapping NL → cycle
Use the live catalog only (base or SmartCourse). Options only if listed in `start_option_fields`.

**Device:** wash/rinse/spin → washer. dry/fluff/wrinkle/air dry → dryer. Both → wash now, offer dry after.

**Intent → closest catalog id** (exact label, then specialty, then gentle base):

| NL cues | Intent | Typical ids |
| --- | --- | --- |
| delicates, sheer, dress clothes, gentle | gentle | `DELICATES`, `DELICATE_DRESSES`, dryer `DELICATE`, `ULTRADELICATES` |
| swim, beachwear | swim | `BEACH_WEAR`; dryer `SPORTWEAR`, `AIRDRY`, `RACKDRY` |
| towels | towels | `TOWELS` |
| jeans, denim | denim | `DENIM` |
| sheets, blankets, bedding, bulky | bulky | `BULKY_LARGE` / `BLANKET`; dryer `BEDDING`, `BLANKETS` |
| gym, sports | sports | `SPORTS_WEAR` / `SPORTWEAR` |
| whites | whites | `WHITES` |
| wool, hand wash | wool/hand | `HANDWASH_WOOL` |
| quick, small, half load | light/fast | `SPEEDWASH`, `SMALL_LOAD`, `HALF_LOAD_*` |
| heavy, muddy | heavy | `HEAVYDUTY` |
| allergen, sanitize | sanitize | `ALLERGIENE`, `SANITARY`, dryer `STEAMSANITARY` |
| drain / spin out | drain/spin | `SPIN_ONLY` |
| ready by / delay / overnight | delay | `reserveTimeHour`, `OVERNIGHT` / `OVERNIGHTDRY` |
| wrinkle care | dryer option | `wrinkleCare` / `WRINKLEPREVENTION` if present |

**Mixed loads:** one shared gentle course, or name two candidates and pick the safer; learn corrections into agent memory.

**Vague:** household default if set, else `NORMAL`. “Gentle” → delicates family.

**Before execute:** restate device, course id+label, options, dry-run vs execute, Remote Start.

**Limits:** no remote mid-cycle cancel+drain (pause/panel). Keep sticky `THINQ_CLIENT_ID`.
