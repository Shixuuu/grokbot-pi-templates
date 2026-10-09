---
description: "Grok Bot routine: Monthly near-sunset launch scan — On the 1st of each month at 8:00 AM local, scan the next ~35 days of SpaceX launches at the owner's selected pads and calendar near-sunset matches."
argument-hint: "[extra context]"
---

Monthly near-sunset SpaceX launch calendar run (1st of month 8:00 AM in the owner's timezone).

Read selected pads from memory. Defaults: Vandenberg + Starbase. Include Cape/KSC only if the owner opted in.

For each selected pad, scan the next ~35 days of SpaceX launches. Firm date AND time (UTC) only. Note TBD-time launches; do not calendar them.

Pad table:
- Vandenberg SFB — lat 34.7420, lon -120.5724 — sunset zone America/Los_Angeles — sources https://rocketlaunch.org/launch-schedule/vandenberg-sfb and https://www.spacelaunchschedule.com/category/vandenberg-sfb/
- Starbase (Boca Chica) — lat 25.98750, lon -97.18639 — sunset zone America/Chicago — sources https://rocketlaunch.org/launch-schedule/starbase-boca-chica and https://www.spacelaunchschedule.com/category/spacex-starbase/
- Cape / KSC — sunset at LC-39A lat 28.60833, lon -80.60444 — sunset zone America/New_York — sources https://rocketlaunch.org/launch-schedule/cape-canaveral , https://rocketlaunch.org/launch-schedule/kennedy-space-center , and https://www.spacelaunchschedule.com/category/cape-canaveral/

Compute sunset with Python astral at that pad. Keep launches where local T-0 is within ±60 minutes of that day's sunset. Flag borderline (±10 min of the ±60 cutoff).

Before creating, list the owner's chosen Google Calendar for the range; skip duplicates (mission name + date).

Create events: Summary `SpaceX <Vehicle> — <Mission> (<Pad>, near sunset)`; start T-0 local; end T-0+30m; location actual pad if known; description with mission, pad, local T-0, sunset, delta, source URLs; prefer peacock/teal if available. Solo holds, no attendees.

Report to the owner: added / skipped (why) / borderline. Stay quiet on zeros unless they asked for this run. If calendar needs auth, say so and stop — do not fabricate events. Never invent launches or times; never calendar pads the owner did not select.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 0 8 1 * *`

Ask the importing user for:
- Timezone

${@:-}
