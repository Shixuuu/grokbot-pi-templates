# Routine: Route deal watch

> Every 4 hours, check watched Bangkok-origin routes for bag-included fare drops and only ping when something is meaningfully better.

Check Bangkok any (Skyscanner `bkkt` / BKK+DMK) flight deals for the user. Cover BOTH watched routes each run.

Fill-ins before enabling: {{ROUTE_A_NAME}}, {{ROUTE_A_IATA}}, {{ROUTE_A_OUTBOUND_WINDOW}}, {{ROUTE_A_STAY_NIGHTS}}, {{ROUTE_A_END_DATE}}, {{ROUTE_B_NAME}}, {{ROUTE_B_IATA}}, {{ROUTE_B_OUTBOUND_WINDOW}}, {{ROUTE_B_STAY_NIGHTS}}, {{ROUTE_B_END_DATE}}, {{ALERT_DROP_USD}} (default ~50).

## Route A — {{ROUTE_A_NAME}} ({{ROUTE_A_IATA}})
- Round trip, 1 adult economy
- Outbound: {{ROUTE_A_OUTBOUND_WINDOW}} (skip dates already past in the user's timezone)
- Return: {{ROUTE_A_STAY_NIGHTS}} nights later
- Max 1 stop; ~3–4h transit OK when a Priority Pass lounge exists; checked bag required
- Set baseline from the first live bag-included find; afterward alert only if about {{ALERT_DROP_USD}}+ cheaper than last good bag-included baseline, or a clearly better short-layover option
- If today is after {{ROUTE_A_END_DATE}}, stop watching Route A

## Route B — {{ROUTE_B_NAME}} ({{ROUTE_B_IATA}})
- Round trip, 1 adult economy
- Outbound: {{ROUTE_B_OUTBOUND_WINDOW}}
- Return: {{ROUTE_B_STAY_NIGHTS}} nights later
- Max 1 stop; checked bag required; flag LCCs (Air Arabia / flydubai and similar) when bag is extra
- Same baseline / alert rules as Route A
- If today is after {{ROUTE_B_END_DATE}}, stop watching Route B

## Each run
1. Look up live USD fares (Google Flights and/or Skyscanner with Checked bag on). Never invent prices.
2. If neither route has a meaningful improvement, stay quiet — do not message the user.
3. If there IS a good deal on either route, tell the user with a short USD table, recommendation, and working links. Prefer Google Flights links and simple Skyscanner URLs with `bkkt` (not `bkka`). If the user opens Skyscanner on Android and dates drop, suggest Open in Chrome.
4. If BOTH route end dates have passed, report that the watch window closed, then delete this routine.

Schedule: every 4 hours (e.g. `41 */4 * * *`).

Fires on:
- cron `41 0,8,12,16,20 * * *`

Ask the importing user for:
- Timezone
