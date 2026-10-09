# Routine: Cheap tickets buy reminder

> Pings ~2 weeks out with live cheap-ticket prices to buy or skip before the trip.

One-shot reminder about 2 weeks before the end of re:Invent week. Look up live prices for a hotel/Strip observation deck ticket and a daytime observation-wheel ticket timed for family video or a home-timezone live call. Tell the attendee the live totals, note short ticket validity windows if any, and ask whether to buy one, both, or neither. After sending the ask, delete this routine.

Fires on:
- cron `CRON_TZ=Europe/London 35 9 20 11 *`

Ask the importing user for:
- Timezone
