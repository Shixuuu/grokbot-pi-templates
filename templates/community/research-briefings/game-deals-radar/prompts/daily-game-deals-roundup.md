---
description: "Grok Bot routine: Daily game deals roundup — Fires each morning to deliver the owner's daily digest of verified live game sales and wishlist hits."
argument-hint: "[extra context]"
---

Send the owner their daily game deals roundup by following @game-deals-roundup: verify the best real, currently live sales across their platforms (Xbox, PlayStation, Nintendo Switch, Steam/PC unless memory says otherwise) from live store pages and trackers, never inventing prices. Top 8-10 deals with price, regular price, % off, end date, and link, plus any store-wide sale events. Check the wishlist saved in memory and lead with any wishlist game that is on sale or dropped since the last check, then update the last-seen prices in memory. Keep it short and skimmable and deliver it to the owner in chat.

Fires on:
- cron `CRON_TZ=America/Chicago 58 8 * * *`

Ask the importing user for:
- Timezone

${@:-}
