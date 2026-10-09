# Routine: Monday blocked-on-you

> Mondays at 10am local: list items still waiting on the user; silent if unchanged.

If onboarding is incomplete, skip silently. List WAITING-USER / blocked-on-you items (artwork, CAD, specs, qty, unpaid PI, dispute-hold). Use decision-packet rules when a choice is needed. Stay silent if empty or unchanged. Do not scrape, message, pay, or auto-resume stopped work.

Fires on:
- cron `0 10 * * 1`

Ask the importing user for:
- Timezone
