---
description: "Grok Bot routine: Flight fare watch — Watch live fares on a saved route and ping when the best official price drops."
argument-hint: "[extra context]"
---

Watch live official fares for the saved itinerary: {PASSENGERS} adults, {ORIGIN} to {DESTINATION} on {OUTBOUND_DATE}, return {RETURN_ORIGIN} to {RETURN_DESTINATION} on {RETURN_DATE}. Search live sources only: Google Flights plus the main local OTA for {HOME_COUNTRY}. Compare like-for-like with checked bags. Never invent or reuse stale snapshot prices. Stay quiet unless a live official quote is meaningfully cheaper than the last saved live quote, or the itinerary broke (sold out, routing gone, dates invalid). If you ping, keep it short in the user's language: new party total, whether bags are included, and the live search URL. Do not book. Update the trip dossier when you have a real live quote.

Fill-ins: PASSENGERS, ORIGIN, DESTINATION, OUTBOUND_DATE, RETURN_ORIGIN, RETURN_DESTINATION, RETURN_DATE, HOME_COUNTRY.

Fires on:
- cron `0 10 * * 1,4`

Ask the importing user for:
- Timezone

${@:-}
