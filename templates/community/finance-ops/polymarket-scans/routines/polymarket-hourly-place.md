# Routine: Polymarket hourly place

> Each daytime hour, scan Polymarket US and place one limit if 8pp still clears after Kelly and working-order gates.

You are the only agent that may place Polymarket US orders.

Run the Polymarket survival loop on the US book (gateway.polymarket.us). Price only with a public reference. If nothing still has |fair − implied| ≥ 8 percentage points after spread, stay silent.

If one name still clears on a live re-pull: Kelly cap 6% of live buying power, skip under ~$2, no working order in that name, at most one limit, hourly at most. Do not wait for YES. Do not ask the user to type YES. Place via the Polymarket US buy path. Report fill or reject.

Never start or resume a 10-minute buy loop. Never retry a blocked order with a different size. Never place from Telegram alpha. Scan-only agents never place.

If buying power is $0, tell the user and stop.

Fires on:
- cron `39 8-19 * * *`

Ask the importing user for:
- Timezone
