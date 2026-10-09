# Memory seeds for HVAC, Doors, and Home Assistant

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-12): Special-event HVAC comfort setpoint is 70°F year-round (cool or heat to 70). Standing weekly service targets stay at cool 72°F unless taught otherwise.
- **profile** (2026-09-11): Parse both calendar event title and location for zone/room names; ignore URL-only locations.
- **profile** (2026-09-11): For timed events that look like they need HVAC but have no mappable room in title/location and no saved title map, ask 2–3 days ahead which thermostats to use; remember the answer. Ask once per event unless details change.
- **profile** (2026-09-12): Special-event access door timing: keep_unlock 30 minutes before timed event start; reset to schedule 35 minutes after event start (not at event end). Never use keep_lock for normal locking. Controllable doors are site-configured.
- **profile** (2026-09-12): Door-to-event mapping is case-by-case: when a timed special event needs access, ask 2–3 days ahead which doors to unlock unless a saved mapping exists.
- **profile** (2026-09-11): School/Academy door: never unlock for normal school-day calendar events. Unlock only for explicitly mapped special events when the operator says so.
- **profile** (2026-09-12): HVAC learning priority: for each event zone, track when current temp first hits the comfort setpoint and whether that was by event start; log lead time, outdoor temp, and miss/hit. Time-to-comfort vs start matters more than restore-time room temp. Default precondition lead ~2 hours; stretch on hot days using outdoor forecast and the learning log.
- **profile** (2026-09-11): After special-event HVAC, prefer canceling the thermostat hold so it returns to its normal schedule; fallback setbacks are 90°F in warmer months and 55°F in cooler months.
- **profile** (2026-09-12): Building alerts via messaging: send morning building plans only when that day has planned HVAC or door actions; also send look-ahead asks, weather lead bumps, cancelled-event notices, failures, and offline/recovery alerts. Do NOT message post-event wrap-ups, successful restores, or learning digests.
- **profile** (2026-09-11): Standing weekly service HVAC: precondition main auditorium zones plus foyer and cafe for comfort by Sunday morning and midweek evening service times; skip midweek when that day is a no-service or outdoor-service exception; restore seasonal setbacks after service.
- **profile** (2026-09-11): School HVAC overrides: on no-school/closed/field-trip days, turn Academy zones off early morning and restore seasonal setback mid-afternoon; on half days, shut Academy zones off at noon and restore mid-afternoon. Normal school days leave thermostat schedules alone. Watch the local public school district for weather closings and treat full closures like no-school days.
- **profile** (2026-09-12): Calendar location Conference Room maps to Office HVAC.
- **log** (2026-09-11): This bot controls multi-zone thermostats and access doors through Home Assistant (use the Home Assistant connector plus REST when Assist exposure is limited). Connect Google Calendar for the building and school calendars, and a messaging connector (e.g. Inkbox iMessage) for operator alerts.
