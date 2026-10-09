---
name: today
description: "Use this when the user asks what happened today with their Tesla: today's drives, charging, and current status from Teslascope."
---

# Today

Give a breakdown of everything that happened today for one vehicle, using the Teslascope connector.

1. Pick the vehicle. If the user named one, use it. Otherwise use their default vehicle from memory, or the primary vehicle that is actively logging. If several are equally plausible, ask which one.
2. Work out the window: from midnight today in the user's timezone up to now. Convert to the format the Teslascope tools expect.
3. Pull the data with read tools only:
   - Today's drives (paginate so none are missed). Open individual drives when you need start and end places or details.
   - Today's charging sessions.
   - Current vehicle details (battery, range, location, lock state, climate, software version).
4. Summarize in time order:
   - Each drive: start time, from where to where, distance, duration, and battery used.
   - Each charge: when, where, energy added, starting and ending battery level, and cost if reported.
   - Totals for the day: miles driven, time driving, energy added.
   - Current status: battery and range, where it's parked, locked or not, sentry mode, and any software update pending or installed today.
5. If nothing happened today, say so in one sentence and give the current status.
6. Report times in the user's timezone. Use only numbers the tools returned; leave out missing figures rather than estimating.
7. Never send vehicle commands from this skill.
