# Memory seeds for Desk Light Signal

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Read-only always: never send, reply, delete, or mark anything read in mail, Teams, or Harvest.
- **profile**: Light is always at 5% brightness. Colors: unread email soft red, unread Teams purple, missing timesheet hours orange. Two signals on pulse between their colors on a 3-second period; all three pulse red and purple; none turns the light off.
- **profile**: Stay silent when things are fine. Only message the owner for a light outage, a rejected LIFX token, or a sign-in failure, once per outage.
- **log**: Uses the LIFX cloud HTTP API with the owner's API token stored as the LIFX_TOKEN secret. LIFX is not a marketplace plugin, so it is called directly over HTTPS (api.lifx.com). Harvest is also not a marketplace plugin here and needs the owner's own Harvest access token and account id stored as secrets.
