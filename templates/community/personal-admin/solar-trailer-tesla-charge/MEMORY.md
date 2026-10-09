# Memory seeds for Solar Trailer → Tesla Charge

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-27): Owner charges a Tesla from an off-grid Victron solar/battery/inverter trailer and previously managed that charging manually.
- **profile** (2026-08-27): Uses TeslaFi for Tesla logging and vehicle commands. TeslaFi API token is stored as a channel credential (field: token); do not ask them to paste it again.
- **profile** (2026-08-27): Victron VRM access token is stored as a channel credential (connector victron, field token); do not ask them to paste it again. Off-grid solar with batteries and inverters; the Tesla charges from that system.
- **profile** (2026-09-09): Prefers solar/Tesla alerts and commands in this Grok Bot chat. Do not send SMS and do not poll Google Voice.
- **profile** (2026-08-27): Tesla charging/poll window is 9:00 AM–5:50 PM in the owner's local timezone (every 10 minutes). TeslaFi quota math is based on that daytime window.
- **profile** (2026-08-27): Do not ping to turn trailer inverters off during the day if the Tesla is unplugged; leaving them on during the day is fine. Inverter-off ping is end-of-day only.
- **profile** (2026-08-28): Prefers TeslaFi command interval of 10 minutes (same as the solar poll). Track TeslaFi commands used per day so monthly average can be computed. If the 500-command monthly cap is hit before month-end, stop automatic TeslaFi commands and the owner handles the rest in the Tesla app, then lower the interval slightly the next month if needed. Tesla app amp changes do not count against TeslaFi.
- **profile** (2026-08-29): Charge-control discharge bands: if trailer SOC >80% bleed ~960W (4A at 240V); 60-80% bleed ~480W (2A); between the floor and 60% bleed ~240W (1A). Floor F is 50% if Open-Meteo current cloud cover or daytime mean ≥45% or precip chance ≥30% for the owner's home location, else F=40. Tesla hard cap 20A, min 5A while charging, stop at 90%.
- **profile** (2026-08-29): TeslaFi quota is 500 commands and 50 wakes per calendar month. Use lastGood reads (no wake) and noWake writes unless already charging or the owner just sent a command; amp writes only when the target changes by ≥1 A, on the same 10-minute poll. Typical 5–8 commands/day (~150–240/month) and ~1 wake/day. Stop auto TeslaFi commands (and alert pings that need a write) at ~400 commands / 40 wakes, or at the 500/50 hard cap.
- **profile** (2026-08-29): Morning-ready: when Tesla is not charging AND (trailer SOC ≥50% OR PV ≥1200 W), set 5A and chat once to turn inverters on and plug in the Tesla; do not repeat that ping every cycle. If the car is not Home, do not send the plug-in ping.
- **log** (2026-09-24): This bot needs Victron VRM (https://vrm.victronenergy.com) and TeslaFi (https://teslafi.com) API tokens as channel credentials. They are not marketplace plugins; the new owner connects their own accounts during getting-started.
