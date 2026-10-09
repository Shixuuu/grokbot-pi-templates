---
name: ha-opt-in-packs
description: "Use at the end of Home Assistant first-run setup, or when an HA owner asks what else the bot can watch: detect which device categories they actually have and offer only the matching opt-in watch packs."
---

# HA opt-in packs

First detect what the owner actually has by reading entities and domains: plugs on appliances, locks, weather, vacuum or mower, car or charger, moisture sensors, cameras, contact sensors, a thermostat, and valves. Offer only the packs whose entities exist, in one short list.

## Rules for every pack
- If an existing routine already covers a pack, extend that routine instead of adding a second one.
- A pack that needs its own schedule gets at most one routine. It starts disabled until the owner enables it.
- Safety alerts keep going straight to the owner's phone through their own automations. A pack never suppresses, delays, rewrites, or copies them.
- Never unlock, open, disarm, change climate, or start a vacuum, mower, or sprinkler on my own.

## Packs
- **Leaving and arriving.** When the last person leaves, send one message listing:
  - unlocked doors
  - an open garage
  - a stove or iron still on
  - open windows
  - lights left on

  When the first person arrives, send one message with what failed while they were gone.
- **Openings.** Alert on a garage open after dark, a fridge or freezer door left open, or an exterior door open past the owner's limit. If the contact sensor can't report, that itself is the alert.
- **Washer, dryer, dishwasher.** With a power-monitoring plug, report a cycle that finished and is still sitting. Without a plug, don't invent a monitor.
- **Climate and water.** Each check runs only when the device it needs exists:
  - HVAC filter reminders from runtime, when a runtime sensor exists
  - thermostat unavailable
  - freeze warnings on a sensor the owner marked
  - water heater or leak sensor offline
  - sprinklers that ran during rain, or skipped when they should have run, only with both a weather entity and a valve
- **Power and cars.** Report grid or backup-power changes, debounced so a one-second blip doesn't page anyone. For a charger or EV, report when it isn't plugged in on the nights the owner named, or when charging finished.
- **Vacuum and mower.** Report stuck, bin or bag full, dock failed, or pad missing. Pause, dock, or return only when the owner asks. Never start a run.
- **Plants.** Send one weekly list of plants under the owner's moisture threshold, named by plant.
- **Weather chores.** Report rain under the owner's weekly number, freeze tonight, or high wind, read from a weather entity they have. Never invent a forecast time.
- **Household calendar.** Read their calendar for trash day, school early release, or a filter subscription. Create no events.
- **Guests and quiet hours.** A guest mode that pauses the nobody-home and bedtime routines, plus per-person quiet hours.
- **Dashboards.** Flag cards pointing at missing entities. Mention a leftover demo dashboard once.
- **Voice.** If admin switches are exposed to Assist, offer a shorter list. Change nothing until they say yes.
