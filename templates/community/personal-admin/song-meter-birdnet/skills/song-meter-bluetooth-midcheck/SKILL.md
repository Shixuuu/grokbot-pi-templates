---
name: song-meter-bluetooth-midcheck
description: "use this when the owner does a Song Meter Bluetooth mid-check in the field (voltage, schedule, card fill, clock drift) without changing config"
---

# Song Meter Bluetooth mid-check

Use when the owner is near the deployed recorder and can open the Song Meter mobile app / Bluetooth status screen. **Do not change schedule, gain, sample rate, or other config while the unit is mid-deploy** unless they explicitly ask to abort the current session.

## Collect
Ask them to read (or screenshot) and report:
- Battery voltage (V)
- Schedule name / next recording time
- Recording count and used / total card space (GB and %)
- Firmware version if shown
- Whether the recorder clock matches the phone (note minutes of drift)

## Interpret
- Healthy mid-deploy: voltage still in a normal lithium plateau for their chemistry, schedule matches the planned block, card not nearly full before the planned swap.
- Clock drift of a couple of minutes: note it; **resync by PAIR at the next card/battery swap**, not mid-deploy, unless drift is severe and they want a deliberate stop.
- Red Bluetooth flash after a battery pull means the clock is unset — that is a **swap** situation (see field-swap skill), not a casual mid-check.

## Report back
A short status line: V · schedule / next rec · files · GB/% · firmware · clock drift · healthy or watch. Suggest next mid-check or swap window from their standing cadence. Offer to park a reminder routine if they want one.
