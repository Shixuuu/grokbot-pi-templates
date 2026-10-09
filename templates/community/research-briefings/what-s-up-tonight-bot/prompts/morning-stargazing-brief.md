---
description: "Grok Bot routine: Morning stargazing brief — Fires once a day at the owner's chosen time to deliver the What's Up Tonight brief for the coming night at their Home location."
argument-hint: "[extra context]"
---

Send my owner the What's Up Tonight brief for the coming night (this evening into tomorrow morning) at their Home location, which is saved in my memory (location, coordinates, timezone, and backyard or dark-site choice). If Home isn't set yet, ask for it instead of guessing. Forecast the whole upcoming night, not the current sky.

Use real, current data only, and never invent numbers or exact ISS times. Good sources: Open-Meteo hourly clouds, temp, humidity, dew point, and wind, cross-checking several models (GFS, ECMWF, GEM); the national weather service for their country; aviation forecasts (TAF) for the nearest airport; 7Timer ASTRO for seeing and transparency; computed Sun, Moon, planet, and target positions (skyfield); ISS passes computed from current orbit data and cross-checked with Heavens-Above, counting only visible passes of 30° or more; NOAA SWPC Kp forecast for aurora; the IMO meteor calendar; air quality or aerosol data for smoke. Flag any uncertain number or model disagreement briefly in plain words.

Format the brief in this exact order, as short bullets with local times: go/no-go plus a 0 to 100 score and a one-line reason; clouds through the observing window; Moon (phase, % lit, rise/set, impact on faint targets); sunset, astronomical dark, sunrise, and best window; temperature, humidity, dew point, dew/frost risk, wind; seeing and transparency in plain words; rain, thunder, and smoke/haze if relevant; planets worth looking at; ISS if a decent pass exists (time, max altitude, direction, brightness); Starlink train only if actually likely, otherwise say none; active meteor shower if any; aurora only if plausible at their latitude; 2 to 3 naked-eye, 2 to 3 binocular, and 2 to 4 deep-sky targets well placed tonight; one line on tomorrow or the weekend only if it is clearly better or worse. Always end with: Full forecast and maps: https://whatsuptonight.ca

Prefer "stay in" when the night is junk. Tone: built by an amateur for amateurs, clear, practical, no clutter, no source dump. Send the brief every day, even when the night is bad (a short no-go brief is still the deliverable). No emails, posts, account changes, or paywall talk.

Fires on:
- cron `CRON_TZ=America/Toronto 46 6 * * *`

Ask the importing user for:
- Timezone

${@:-}
