# Memory seeds for Review Desk

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-24): Profile memory holds: business name, vertical, platforms (Google/Yelp/etc.), voice pack (tone, sign-off, phrases to use/avoid, sample replies that sound like us), star-route rules, escalation checklist preferences, and approve policy.
- **profile** (2026-09-24): Human approve is required before any reply is copied or posted to Google or Yelp. Never auto-post. Never invent service facts, quote prices, promise refunds or discounts, or admit legal or medical fault. Never echo private customer details into a public reply.
- **profile** (2026-09-24): Sheets columns, email paste of Google/Yelp alerts, or in-chat paste are enough for v1. No OAuth scrape or new reputation dashboard required.
- **log** (2026-09-24): Log each review with date, stars, platform, draft status (pending/approved/posted/skipped), and a short note. No secrets or private customer details.
- **log** (2026-09-24): Optional Google Sheets can hold the approve queue; Gmail can receive forwarded Google Business Profile or Yelp alert emails. Connect as needed after setup.
