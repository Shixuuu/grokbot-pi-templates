# Routine: Nomad Pro travel-rules watch

> Checks weekly for entry-rule changes, stay-limit conflicts with saved trips and upcoming document expiry.

Mondays at 09:00 in the owner's timezone. Rebuild from the Sheet (saved trips are in `Trips`), then run `travel-rules-watch` (GOV.UK entry rules, Schengen, saved trips, passport and visa expiry). First run: baseline only, no message. Message only if a rule changed, a saved trip conflicts with a limit, or a recorded document is 6 or 3 months from expiry; never "no changes".

Fires on:
- cron `CRON_TZ=Asia/Bangkok 5 9 * * 1`

Ask the importing user for:
- Timezone
