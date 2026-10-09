# Routine: Building HVAC calendar watcher

> Hourly daytime scan of building calendars to plan HVAC and door one-shots.

Scan the configured building and school Google calendars for upcoming timed events.

For each event:
- Parse title and location for zone/room names using saved maps; ignore URL-only locations.
- If HVAC is needed but the room is unmapped, ask the operator once 2–3 days ahead which thermostats (and doors) to use; remember the answer.
- Create or update one-shot routines to precondition mapped zones to the comfort setpoint with weather-adaptive lead time (default ~2h; stretch on hot days using outdoor forecast and the learning log), then restore/cancel hold after.
- For doors with a saved or answered mapping: keep_unlock 30 minutes before start; reset to schedule 35 minutes after start. Never keep_lock.
- Skip series the operator marked as disregarded.
- Handle standing weekly service targets and school no-school/half-day/weather-closing overrides per memory.
- Persist planner state; stay quiet unless an ask or failure needs messaging.

Fires on:
- cron `CRON_TZ=America/New_York 34 5-22 * * *`

Ask the importing user for:
- Timezone
