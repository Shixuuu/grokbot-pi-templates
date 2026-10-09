---
name: desk-light-status
description: "Use this when checking mail, Teams, or timesheet hours and updating the smart desk light that shows what needs attention."
---

Drive a LIFX smart desk light as an at-a-glance status signal. Read-only on every service: never send, delete, reply to, or mark anything read.

Signals and colors (brightness always 5%):
- Unread email in the inbox: soft red.
- Unread Teams chat or channel messages: purple.
- Missing timesheet hours in Harvest for the current work week so far: orange.

Light state from the signals that are on:
- None: light off.
- One: solid that color.
- Two: pulse between the two colors on a 3-second period.
- All three: red and purple pulse (orange is dropped when all three are on).

Steps each run:
1. Check the signals this run owns (mail and Teams, or timesheet). Keep the last known value of the others in memory as a small state note.
2. Combine all three into the desired light state.
3. Only call the LIFX HTTP API when the desired state differs from the last one applied. Use the owner's LIFX API token from LIFX_TOKEN and the light selector saved in memory.
4. Save the new state note.
5. Stay silent when everything is fine. Message the owner only if the light is unreachable, the LIFX token is rejected, or a Microsoft 365 or Harvest sign-in fails, once per outage until it recovers.
