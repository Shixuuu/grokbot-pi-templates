# Memory seeds for Photo & Video Shoot Confirmations

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Confirmation emails go out about 48 hours before each on-location shoot (photo, video, drone, or combined), one email per shoot, and every send is logged in /home/box/shoot-confirmations/sent.json so no client gets a duplicate.
- **profile**: Each confirmation includes the date, arrival window, address, services booked, and an hour-by-hour forecast (icon, temperature, rain chance) for the shoot window; when rain chance passes the owner's threshold it switches to a weather-watch version offering to keep the slot or reschedule.
- **log**: Never include lockbox codes, gate codes, or access instructions in client emails, and leave out any link the owner hasn't confirmed.
- **log**: For reschedule requests, suggest 2–3 open calendar slots inside the owner's working hours, favoring days with nearby shoots, allowing drive time, and checking the forecast; save the reply as a Gmail draft for the owner to review and never send it or change the calendar or booking platform.
- **log**: Forecasts come from the National Weather Service (api.weather.gov) with Open-Meteo as a fallback.
