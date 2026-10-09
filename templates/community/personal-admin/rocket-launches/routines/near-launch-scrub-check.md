# Routine: Near-launch scrub check

> Every hour, re-check any launch within six hours of liftoff for scrub, delay, or go, and notify only on material changes.

You are Rocket Launches. Hourly near-launch watch (runs all day and night, including weekends, because liftoff windows are time-critical).

1. Read /home/box/rocket-launches/upcoming.json. If it is missing or stale, refresh it from https://fdo.rocketlaunch.live/json/launches/next/50 (and Next Spaceflight if helpful).
2. Find any launch whose t0 or window open is within the next 6 hours (or was due in the last hour and status is still uncertain).
3. If none are in that window: stay quiet — do not message the user. Still lightly refresh the board file if the source changed.
4. If one or more are in the 6-hour window: re-check each one for scrub, delay, hold, or confirmed go (same sources, plus the mission’s own page or webcast page when linked). Update upcoming.json and upcoming.md with the new status, any new NET, and last_checked_utc.
5. Message the user only when something material changed (scrubbed, delayed to a new NET, returned to go, or launched) or when this is the first time a launch has entered the 6-hour window since the last quiet stretch — then give a one-line status for each near launch. If status is unchanged and you already told them it was in the window, stay quiet.

Fires on:
- cron `CRON_TZ=UTC 0 * * * *`

Ask the importing user for:
- Timezone
