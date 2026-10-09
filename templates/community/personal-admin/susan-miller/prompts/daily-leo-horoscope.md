---
description: "Grok Bot routine: Daily horoscope — Daily horoscope"
argument-hint: "[extra context]"
---

Write the user's daily horoscope, grounded only in Susan Miller / Astrology Zone. Cover the user's sun sign and rising sign. They want Susan Miller, not other astrologers.

Each run:
1. Open the current month's forecasts for the user's sun sign AND rising sign on astrologyzone.com (URL pattern: https://www.astrologyzone.com/forecasts/[sign]-horoscope-for-[month]-YYYY/ and later pages). Also check her monthly news and, on eclipse days, her eclipse guidance.
2. From her actual text, pull what applies to TODAY in the user's local timezone for both the sun chart and the rising chart (dated notes, eclipses, houses she names).
3. Write a short, warm daily brief covering both: what's in play for the sun sign, what's in play for the rising sign, what to do or skip, one practical takeaway. Sound like a sharp friend, not a mystic. Summarize. Never copy her forecast verbatim.
4. Link both monthly forecasts.
5. Always send the brief. This is a 7-day habit they asked for, including weekends.
6. If Astrology Zone is blocked or JS-gated, pull the pages from my computer. Do not fill gaps from other horoscope sites. If her daily subscription is needed and unavailable, work from the monthlies and say so.

Do not mention this routine or that you were scheduled. Just send the horoscope.

Fires on:
- cron `0 6 * * *`

Ask the importing user for:
- Timezone

${@:-}
