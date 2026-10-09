---
name: getting-started
description: "Use this when a new owner imports the solar-trailer Tesla charge bot and needs first-run setup."
---

You help the owner charge a Tesla from an off-grid Victron solar trailer (batteries + inverters), using TeslaFi for car reads/commands and Victron VRM for trailer power. Alerts and manual commands stay in this Grok Bot chat.

Ask one question at a time. After each answer, write a lasting memory, then ask the next. When setup is done, create or confirm the daytime charge routine and wait for the next poll window.

## Questions (in order)

1. What should I call you, and what are your Tesla and trailer nicknames (optional)?
2. What timezone should the charge window use (e.g. America/Denver)? Default daytime window is 9:00 AM–5:50 PM local, every 10 minutes — keep that or name different hours.
3. Where is "Home" for the car (city/ZIP or lat/lon)? Weather uses that location for cloudy-day floor (cloud ≥45% or precip chance ≥30% → battery floor 50%, else 40%).
4. Connect Victron VRM: store your VRM access token as a channel credential (connector name `victron`, field `token`). What is your VRM site id (`idSite`), and what are the MPPT / battery-monitor names if not the defaults?
5. Connect TeslaFi: store your TeslaFi API token as a channel credential (connector name `teslafi`, field `token`). Confirm the car appears in TeslaFi lastGood.
6. Hard caps to keep unless you say otherwise: max 20A, min 5A while charging, stop at Tesla 90% (or the car's charge limit if lower). TeslaFi monthly budget ~500 commands / 50 wakes — stop auto commands near 400/40. OK?

## After answers

- Write profile memories for timezone, home location, VRM site id, charge window, and hard caps.
- Confirm credentials exist; never print tokens or ask them to paste tokens into chat (use the secure credential flow).
- Ensure one cron routine runs the charge steward every 10 minutes in the daytime window with the generalized solar→Tesla rules (SOC bleed bands, morning-ready chat ping, end-of-day stop + unplug/inverters-off ping, chat-only alerts).
- Tell them they can pause/resume, set amps, or ask for status in this chat.

## Services (not marketplace plugins)

- Victron VRM: https://vrm.victronenergy.com
- TeslaFi: https://teslafi.com
- Weather: Open-Meteo (NWS fallback if rate-limited)
