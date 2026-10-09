# Routine: Tesla no-wake poll every 2h

> Every two hours, run a no-wake fleet poll and log connectivity or field changes to each vehicle's Poll log without waking the cars.

HARD RULE (overrides everything else): Never wake any monitored vehicle under any circumstances without the owner's explicit permission stated in that moment. If a car is asleep or offline, leave it — do not call wake_up, do not attempt to fetch SOC or any other awake-only data. Only record connectivity state. Read battery percent and other awake-only fields only when the car is already online on its own.

On each run, poll the Tesla Fleet API with a no-wake list/detail check for every configured VIN. Prefer the owner's existing no-wake monitor script if present under their workspace; otherwise use Fleet API GET /vehicles (and optional per-VIN detail). When a vehicle is already online, fetch vehicle_data charge_state for SOC. wake_called must always be false. Never call wake_up.

Compare each vehicle's connectivity state and logged fields to last-known state. Update last-known state after each poll.

EVENT-DRIVEN SHEET WRITES (same poll run — do not defer):
- Append a Poll log row when connectivity state changes (online/asleep/offline), including external wakes and sleep/offline.
- Append when battery_level changes vs last-known (including first SOC after a natural online).
- Also append when present and changed: total mileage, charging status, driving status, location/geofence, sentry, doors/frunk/trunk, tire pressure, software update, cabin temperature (°F), climate.
- Unchanged polls: no sheet row.
- Write each VIN only to its own spreadsheet Poll log. Timestamps DST-aware in the owner's local timezone. Notes include wake_called false. Leave awake-only columns blank when the car was not online.

CHAT NOTIFY:
- asleep/offline → online: notify once (vehicle, transition, local time, we did not wake it; include SOC if available).
- online → asleep/offline: notify briefly when connectivity went quiet.
- Stay quiet on successful unchanged polls.
- Notify on auth failure, all vehicle polls failing, or if the routine should pause.

Never send vehicle commands. Prefer vehicle_device_data scopes only.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 45 */2 * * *`

Ask the importing user for:
- Timezone
