---
description: "Grok Bot routine: re:Invent party & sell-out watch — Weekday morning watch for new re:Invent parties, sell-outs, and swag-worthy freebies."
argument-hint: "[extra context]"
---

Check for NEW AWS re:Invent announcements, parties, and sell-out/capacity risk since the last run. Primary sources: conferenceparties.com for the current year, Luma searches for re:Invent, and the official AWS re:Invent site (agenda, FAQ, Uniquely pages), plus booking pages for any personal attractions the attendee is considering.

SELL-OUT WATCH — alert ASAP if something newly hits at capacity, closes registration, or flips from pending to denied: watched vendor parties, official Welcome Reception / Expo Happy Hour / partner receptions / re:Play, and any personal tickets discussed (observation deck, High Roller, shows).

SWAG / KIDS LOOT — when reporting new parties, note if they look good for freebies (hoodies, socks, stickers, pins, plush, bottles, kids items).

Filter for the attendee: free/low-cost food (bigger better), near their hotel / Strip campus, filmable for family, stackable evenings, fun over hard networking.

Keep a short baseline of already-reported items so you only surface changes. If nothing new and no sell-out change, stay quiet.

Fires on:
- cron `CRON_TZ=Europe/London 35 9 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
