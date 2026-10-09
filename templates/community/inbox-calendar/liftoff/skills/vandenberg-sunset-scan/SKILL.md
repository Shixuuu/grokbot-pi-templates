---
name: vandenberg-sunset-scan
description: "Use this when scanning SpaceX launches at selected pads for near-sunset T-0 windows and adding matches to Google Calendar."
---

Find SpaceX launches from the owner's selected pads whose firm T-0 falls within ±60 minutes of that pad's local sunset, and add them to the owner's chosen Google Calendar.

## When to run
- On the monthly routine (1st of month)
- Whenever the owner asks for an on-demand scan

## Selected pads
Read pads from memory. Defaults before setup: Vandenberg + Starbase. Cape/KSC only if the owner opted in.

## Pad table
| Pad | Lat | Lon | Sunset zone | Schedule sources |
|---|---|---|---|---|
| Vandenberg SFB | 34.7420 | -120.5724 | America/Los_Angeles | https://rocketlaunch.org/launch-schedule/vandenberg-sfb — https://www.spacelaunchschedule.com/category/vandenberg-sfb/ |
| Starbase (Boca Chica) | 25.98750 | -97.18639 | America/Chicago | https://rocketlaunch.org/launch-schedule/starbase-boca-chica — https://www.spacelaunchschedule.com/category/spacex-starbase/ |
| Cape / KSC (sunset at LC-39A) | 28.60833 | -80.60444 | America/New_York | https://rocketlaunch.org/launch-schedule/cape-canaveral — https://rocketlaunch.org/launch-schedule/kennedy-space-center — https://www.spacelaunchschedule.com/category/cape-canaveral/ |

## Steps
1. For each selected pad, fetch schedule sources. Keep SpaceX launches with firm date AND time (UTC) only. Note TBD-time; do not calendar them.
2. Compute sunset for that pad's lat/lon in that pad's sunset zone (Python astral). Convert each firm UTC T-0 into the pad's local zone.
3. Keep launches where local T-0 is within ±60 minutes of that day's sunset. Flag borderline within ±10 minutes of the ±60 cutoff.
4. Before creating, list calendar events for the range; skip duplicates (mission name + date).
5. Create events: Summary `SpaceX <Vehicle> — <Mission> (<Pad>, near sunset)`; start T-0 local; end T-0+30m; location actual pad if known; description with mission, pad, local T-0, sunset, delta, source URLs; prefer peacock/teal if available. Solo holds, no attendees.
6. Report added / skipped / borderline. Quiet on zeros unless the owner asked for this run.

## Never
- Invent launches or times
- Calendar pads the owner did not select
- Fabricate events if calendar needs auth — say so and stop
