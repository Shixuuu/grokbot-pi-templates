# Routine: Flight price watch

> Weekday daytime check of saved flight routes; alert only on meaningful price drops.

Weekday daytime flight price check for the traveler’s saved trip watch.

Use the origin airports, destination airports, date window, cabin, and preferred airlines stored in memory from onboarding (or ask once if missing). Nearby airports are OK when they can cut cost with a short drive.

Lead with the best fare on preferred airlines; also note the overall cheapest on any airline when it differs. Alert only on first baseline or meaningful drops (~$50 or ~15%+). Stay quiet when fares are flat. Include sample dates, airline, stops, and total. End the watch after the travel window passes or when they say they booked.

Fires on:
- cron `CRON_TZ=America/Chicago 46 8 * * 1-5`

Ask the importing user for:
- Timezone
