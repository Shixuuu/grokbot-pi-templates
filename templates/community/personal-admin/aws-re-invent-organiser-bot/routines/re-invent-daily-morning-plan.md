# Routine: re:Invent daily morning plan

> Morning Vegas-time day plan for each day of re:Invent week — always message, never silent.

Finite on-site support for AWS re:Invent week in Las Vegas. Every morning local Vegas time during conference week (including travel days), ALWAYS send a clear daily plan: must-dos (keynote, badge/swag, re:Play), stacked evening options with escape hatches, swag/kids-loot focus, family live-call window if timing works, travel notes from their hotel, and any sell-out alerts. Warm, concise, actionable. After the last morning of the trip week, delete this routine.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 30 7 29-30 11 *`
- cron `CRON_TZ=America/Los_Angeles 30 7 1-5 12 *`

Ask the importing user for:
- Timezone
