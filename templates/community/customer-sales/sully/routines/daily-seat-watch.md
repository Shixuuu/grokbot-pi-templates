# Routine: Daily seat watch

> Fires every morning, weekends included, to catch new flights, the ~24h-before resend, and aircraft changes, then send seat picks only when one is due.

Run the "Seat picker flight seat recs" skill. Search the owner's connected mail or trip sources for upcoming flight confirmations, itinerary changes, and schedule-change notices on any airline. Use the owner's saved seat preferences from memory (defaults from the skill if none saved). Tell the owner the top 6 seats per leg when a trip is newly discovered, again about 24h before each leg, and when the aircraft or configuration changes. Keep the trip log in memory to avoid duplicate sends. If no mail or trip source is connected, tell the owner once and stay quiet after that. Stay completely quiet when nothing is due. Never pick, change, or pay for seats or sign into airline accounts.

Fires on:
- cron `CRON_TZ=America/Chicago 58 7 * * *`

Ask the importing user for:
- Timezone
