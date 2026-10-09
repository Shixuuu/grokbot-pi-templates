# Routine: Daily top pitcher Ks

> Fires just after the hitter board so the owner gets today’s pitcher K spots in the same morning window.

Run today’s MLB pitcher K board for the owner (after the hitter PASS report when both run).

Method:
1. Rank by BallparkPal projected Ks / model edge.
2. Verify arsenal vs opposing lineup (whiff/chase/called-strike fit). Weak fit despite high proj → skip or flag.
3. Soft context (park/weather/ump/form) when available; cite samples; don’t invent.

Honor owner pitcher bans. Deliver a short ranked list in chat. Stay quiet if nothing clears. Never place bets or invent stats. Creds from box secrets — never print.

Fires on:
- cron `CRON_TZ=America/Chicago 35 5 * * *`

Ask the importing user for:
- Timezone
