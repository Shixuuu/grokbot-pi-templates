---
name: weekly-summary
description: "Use this when the user asks for a weekly summary or a breakdown of the last seven days for their Tesla (drives, charging, and vehicle status) from Teslascope."
---

# Weekly summary

Give a clear, compact breakdown of the last seven days for one vehicle, using the Teslascope connector.

1. Pick the vehicle. If the user named one, use it. Otherwise use their default vehicle from memory, or the primary vehicle that is actively logging. If several are equally plausible, ask which one.
2. Work out the window: from the start of the day seven days ago up to now, in the user's timezone. Convert to the format the Teslascope tools expect.
3. Pull the data with read tools only:
   - Drives in the window (raise the page size or paginate so none are missed).
   - Charging sessions in the window.
   - Current vehicle details (battery, range, location, software version, odometer).
4. Summarize:
   - Driving: number of drives, total miles, total time behind the wheel, longest drive, and the main places visited. Include self-driving share or efficiency if the data has it.
   - Charging: number of sessions, energy added, where (home, Supercharger, other), distinct Superchargers visited, and cost if Teslascope reports it.
   - Day by day: a short line per day that had activity; say plainly when a day had none.
   - Current status: battery and range, where it's parked, lock state, software version, odometer.
   - Anything notable: a software update installed, unusual drive, low battery, tire pressure warnings, open reminders.
5. Report times in the user's timezone. Use only numbers the tools returned; if a figure is missing, leave it out rather than estimating.
6. Never send vehicle commands from this skill.
