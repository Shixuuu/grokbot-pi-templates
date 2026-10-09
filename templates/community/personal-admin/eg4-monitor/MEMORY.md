# Memory seeds for EG4 Monitor

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-25): Home solar/storage: EG4 hybrid inverter, EG4 PowerPro batteries, and a ground-mount PV array. Enrolled in California VPP via EG4. Monitoring portal is EG4 Monitor Center (monitor.eg4electronics.com).
- **profile** (2026-08-28): Daily solar summaries must include an Estimated savings kWh block (today + last-7: PV, export, charge, discharge). Do not use EG4 EnergyFromGrid for money because the utility meter can disagree. Prefer live Monitor day totals when Energy history looks truncated. A report agent owns $ math on the homeowner's utility TOU / NEM rates.
- **profile** (2026-08-28): Daily data pull is 6:30pm local time (weekends included) so files are in /workspace/solar/ before a 7:00pm owner-facing solar report. No 8:00am user-facing digest. After each evening pull, ping the report agent with the kWh block (PV, export, charge, discharge; Monitor tiles if Energy is truncated). Stay quiet to the owner unless something looks wrong.
- **profile** (2026-08-28): On Energy export, check Export all electrical quantities so the month file includes PV, charge, discharge, and grid columns, not inverter kWh only. If Monitor Center session expired, hand the computer to the owner for sign-in; never type the password. Never change inverter settings.
