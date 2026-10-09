---
name: live-scada-analog
description: "Use when the user wants current SCADA analog or RTU readings (flow, Cl, turbidity, levels) from a plant telemetry portal."
---

# Live SCADA Analog / RTU review

Use when someone asks for current plant telemetry analog or RTU readings (flow, chlorine, turbidity, tank/wet-well level, pH) from a Mission Communications–style SCADA portal.

## Access
- Use the signed-in browser on this bot’s own desktop.
- Session persists after one human sign-in. Never type the password or 2FA. If you hit the login wall, hand the desktop to the user.
- Read-only. Do not change setpoints, ack alarms, write work-order systems, send mail, or log out.

## Where the numbers live
Start at **All Devices → Analog Data** (or the portal’s all-site analog table). That is usually the best single view.

If a map is showing instead:
1. Stay on the SCADA app tab.
2. Dismiss popups that block clicks.
3. Open All Devices, then Analog Data.
4. Alternates: RTU Data (all-site table), RTU View (one site), Pump Station. Do not hunt site-by-site on the map first.

## How to report
For each value: site name, tag name exactly as shown, number, unit, timestamp/age if shown.
If a site says No Data, say No Data. If a tag is missing, say missing. Never invent numbers.
Include a screenshot of the analog table when you have one.

## Constraints
Analog is current process values only. Daily totals and emailed station summaries are a separate source. Do not treat a prior day’s snapshot as live.
