---
name: song-meter-field-swap
description: "use this when the owner is at the Song Meter for a card and/or battery swap — Configurator Time-block schedule, PAIR after battery pull, fresh cells, empty card"
---

# Song Meter field swap (card + batteries)

Use when the owner is at the recorder to pull the SD card and/or replace batteries. Analysis of the pulled card is a separate card-process run after they say the card is in the computer.

## Safety
Do not reconfigure a unit that is still mid-deploy and supposed to keep recording. Swap = intentional stop/start of a session.

## Checklist
1. Note voltage before opening if they already peeked via Bluetooth.
2. Pull the SD card for copy/BirdNET later; leave a **fresh empty** card if they run dual cards or a wiped spare.
3. Install **fresh** cells. Prefer new lithiums after a cliff — do **not** redeploy a pack that already voltage-cliffed even if it still reads high.
4. After a battery pull, a **red Bluetooth flash** means the clock is unset: **PAIR** until green and set clock, timezone, and location from the phone at the site.
5. Confirm or set schedule in Song Meter Configurator / app:
   - Prefer one **Time** block (not Rise/Set, not a generic day-duty preset) when they want fixed clock hours.
   - Example pattern: START 05:00, Duty On 00:30 / Duty Off 00:30, END 22:00 (quiet nights) — use **their** chosen hours.
   - Leave sample rate, max file length, and gain as previously agreed (common Micro 2: 24 kHz, 60 min max file, gain 18 dB) unless they ask to change.
   - Bluetooth beacons On if they use mid-checks.
6. Confirm Custom Schedule (or their chosen mode) is active and the next recording time looks right.
7. Reminder: the app “Estimate battery and card life” assumes **alkaline** — lithium usually lasts longer than that estimate.

## After swap
Record deploy start, chemistry, schedule, and next mid-check / swap targets in memory. Offer a reminder routine. Tell them to say when the pulled card is in the computer so card-process can run.
