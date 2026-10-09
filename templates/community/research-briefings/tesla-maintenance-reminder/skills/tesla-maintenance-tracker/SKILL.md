---
name: tesla-maintenance-tracker
description: "Use this when tracking Tesla rotations, alignments, 12V battery, camera housing, HEPA/cabin filters, or wipers, estimating mileage, or deciding whether a service reminder is due."
---

Default intervals (Tesla guidance; adjust if the owner prefers different ones):
- Tire rotation: every 6,250 miles
- Wiper blades: every 1–2 years
- Cabin air filter: every 1–2 years (not applicable on Cybertruck — there is no cabin filter)
- HEPA filter: every 3 years on Models S, X, and Y; every 2 years on Cybertruck
- Wheel alignment: as needed (not a fixed mileage interval)
- Low-voltage (12V) battery: every 3–4 years on vehicles manufactured before 2022; recommend proactive replacement so the car does not become unresponsive if the battery fails
- Forward-facing camera windshield / housing cleaning: as needed

## Mileage — estimate weekly, confirm monthly
The bot cannot read the car or the owner's phone, so mileage comes from the owner.
- Save every odometer reading with the date it was given.
- Save the owner's typical weekly miles.
- Estimated odometer = last recorded odometer + (weekly miles × weeks since that reading).
- About once a month (last confirmed reading ~30+ days old), ask for a fresh odometer reading. When it comes in, save it and recalculate weekly miles from the actual change since the previous reading.
- Before telling the owner a tire rotation is due based only on an estimate, ask them to confirm the odometer.
- If the owner doesn't answer the monthly check-in, keep using the estimate and ask again once at the next monthly check-in; don't ask every day.

## No service record — use vehicle age
If cabin filter, HEPA, or (for pre-2022) 12V battery has no known last-service date, start the interval from the vehicle’s manufacture / model year (age of the car). Do not leave those items untracked. Once the owner logs a real replacement date, switch to that date as the new baseline.

## Alignment — when to suggest it
Recommend checking alignment when any of these apply:
- Uneven tire wear
- The car drifts or pulls to one side
- The vehicle rocks back and forth on Full Self-Driving (FSD)
- New tires are being installed (good time to align)

If none of those apply, do not nag about alignment on a schedule.

## Forward-facing camera
Suggest cleaning/service only after the owner (or you, from their description) verifies haziness, fogginess, condensation, or debris in the camera housing under the windshield.
Do NOT treat environmental camera alerts alone as hardware failure or a reason to book service. Examples that are usually not service: direct sunlight, reflections, limited lighting. Ask them to look at the housing first; schedule only if those physical signs are present.

## Low-voltage battery (pre-2022)
If manufacture year is before 2022, track years since last 12V replacement (or since vehicle age if unknown). Warn around 3 years; treat ~4 years as due. Emphasize proactive replacement to avoid an unresponsive vehicle. Skip this item for 2022+ vehicles unless the owner asks.

## Filters by model
- Models S / X / Y: track cabin filter (1–2 years) and HEPA (3 years).
- Cybertruck: no cabin filter; track HEPA every 2 years.
- Other models: only track filters the owner confirms their car has.

## When the owner shares numbers
1. Save model, odometer (with date), weekly miles, model/manufacture year, and last-service dates to durable memory.
2. Compute miles since last rotation and months/years since date-based items (using vehicle age when a filter/battery date is missing).
3. Tell them clearly: due now / coming up / fine for now.
4. If due, remind them to schedule in the Tesla app. Do not claim you can log into Tesla or book for them.

## On a scheduled check
1. Load saved facts and compute the estimated odometer.
2. If the monthly check-in is due, ask for a fresh odometer reading.
3. Message only when an item is due or soon due, or the monthly check-in is due. Stay quiet otherwise.
4. Keep reminders short: what is due, why, and that booking is in the Tesla app.
