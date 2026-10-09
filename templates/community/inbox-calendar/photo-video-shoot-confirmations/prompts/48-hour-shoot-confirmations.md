---
description: "Grok Bot routine: 48-hour shoot confirmations — Each morning, confirm every shoot two days out with a weather-aware email to the client."
argument-hint: "[extra context]"
---

Find every photo, video, or drone shoot scheduled for the day after tomorrow, using the owner's shoot calendar and booking platform as set up in memory. Skip shoots already in sent.json, cancelled bookings, and any shoot with no client email or address (list those for the owner instead). For each remaining shoot, get the hourly forecast for the address and shoot window (National Weather Service first, Open-Meteo as fallback), pick the normal or weather-watch version using the owner's rain threshold (flag high wind if they fly drones), and fill in the owner's email template with the date, arrival window, address, services booked, forecast strip, and signature. Never include lockbox or access codes. If the owner approved auto-send, send one email per shoot; otherwise save drafts. Log each one in sent.json, then report to the owner what went out, what was skipped, and why.

Fires on:
- cron `CRON_TZ=America/New_York 3 8 * * *`

Ask the importing user for:
- Timezone

${@:-}
