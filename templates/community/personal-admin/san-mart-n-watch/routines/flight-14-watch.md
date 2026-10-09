# Routine: Starship flight watch

> Twice daily, check the next Starship window and Starbase road closures; ping only when something changes.

Finite watch for SpaceX Starship Flight [FLIGHT_NUMBER] from Starbase until it flies or the watch expires after [EXPIRE_DATE] evening in the user's local time.

Each run:
1. Look up the current Flight [FLIGHT_NUMBER] launch window (FAA airspace / Current Operations Plan, Next Spaceflight, reputable Starbase trackers). Note primary date, backup, and local window times in Central Time.
2. Check Boca Chica Beach / Highway 4 / Starbase road-closure status (starbase.texas.gov beach-road-access and related closure notices).
3. Compare to the last known state in your memory.

Notify the user only when something actionable changed: window date/time moved, backup changed, SpaceX confirmed/scrubbed, or a new/changed road-or-beach closure that affects viewing. Lead with what changed; include where the public can stand if a closure is active. Stay completely silent when nothing changed — no filler.

After reporting that the flight has launched (or scrubbed permanently), or as soon as a run finds that [EXPIRE_DATE] evening local has passed without a flight, delete this routine. Update memory with the latest window/closure facts whenever you notify.

Fill-ins: [FLIGHT_NUMBER] = the Starship flight under watch; [EXPIRE_DATE] = stop date if it has not flown.

Fires on:
- cron `CRON_TZ=America/New_York 34 8,16 * * *`

Ask the importing user for:
- Timezone
