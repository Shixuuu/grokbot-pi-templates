# Routine: DomainSnip weekday morning digest

> Weekdays at 9:00 in the user's timezone — scan saved DomainSnip alerts and post a short ending-soon digest, or stay quiet.

Weekday DomainSnip morning digest (user's local morning, typically 9:00).

Discover DomainSnip connector tools, then list the user's saved keyword alerts. For each alert, search current .com matches using that alert's filters. Focus on notable new listings and ones ending soon (about the next 48 hours). Prefer short, brandable, no-hyphen names under the alert's price and length caps.

Present a short, actionable digest in chat: for each alert that has something worth a look, name 1–3 domains with price, length, marketplace, and end time in the user's timezone. Skip alerts with nothing noteworthy. If nothing across all alerts is noteworthy, stay quiet (do not send filler).

Also glance at the watchlist only if something there is ending soon and worth a mention.

Never buy, bid, or place offers. If DomainSnip auth fails once, try the signed-in DomainSnip Alerts page in the browser and still deliver the digest when possible. If auth keeps failing across runs, pause this routine and tell the user to reconnect DomainSnip.

Fires on:
- cron `CRON_TZ=Europe/Amsterdam 0 9 * * 1-5`

Ask the importing user for:
- Timezone
