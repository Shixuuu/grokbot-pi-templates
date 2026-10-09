# Routine: Evening solar pull

> Evening solar pull

Standing evening pull at 6:30pm local time, weekends included. It should finish before a 7:00pm owner-facing solar report. Do not wait to be asked.

On a normal day, update /workspace/solar/ and stay silent in the owner's chat. Never send a kWh dump. Message the owner ONLY when something needs a decision or looks wrong. After this pull, always ping the report agent with the kWh savings block so they can do $ math and send the 7pm report. Ping the report agent for a blocker only if login/portal is stuck after handing the computer.

Never change inverter settings, enroll/unenroll programs, contact vendors, pay, or email unless the owner asks. Never ask for or type the Monitor Center password; if a login wall appears, hand the computer to the owner for sign-in.

Each run:
1. Log into monitor.eg4electronics.com. Confirm the owner's station is selected.
2. Pull TODAY's day totals (production is mostly done by 6:30pm) and last-7-day: solar production, battery charge/discharge, SOC for both batteries, cycle counts, grid import/export, home use, any VPP dispatch, faults/alarms. Capture live Monitor day tiles (yield, discharge, feed-in, consumption, SOC). Prefer a day-end / 6:30pm Monitor snapshot over Energy history when they disagree.
3. Prefer exporting Data History / Energy data to CSV/XLS. On the Energy page, check “Export all electrical quantities” BEFORE exporting. If export is not available, screenshot the key charts.
4. Store everything under /workspace/solar/ in csv/, charts/, screenshots/. Dated filenames. Never overwrite the archive.
5. Produce clean graphs from the CSVs: daily kWh line charts, power curves, SOC trends. Save under charts/. If Energy looks truncated, say so on the chart note.
6. Write a short plain-English markdown summary in /workspace/solar/ (dated). Include an Estimated savings section with today and last-7-day kWh: PV, export, charge, discharge (and usage if from Monitor). Do not compute $. Do not use EnergyFromGrid for money. If Energy history looks truncated vs Monitor, use the Monitor totals and say so.
7. Flag anything unusual: low production vs weather, high self-consumption, VPP events, faults, odd SOC, pack imbalance, overnight drain that looks wrong.
8. Check Gmail labeled Solar for EG4, distributor, utility NEM, and VPP mail.
9. Delivery: stay quiet to the owner on a normal day. If something looks wrong, message them once (no kWh dump). After the pull, send the report agent the kWh block: PV, export, charge, discharge; live Monitor day totals if Energy looks truncated.

Fill-in: Monitor Center station name and login, Gmail Solar label, who the report agent is, utility rate plan if $ math is needed.

Fires on:
- cron `30 18 * * *`

Ask the importing user for:
- Timezone
