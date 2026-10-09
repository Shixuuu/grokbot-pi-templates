# Routine: deal-scout-watch

> Each weekday morning, scan the saved watch list on enabled marketplaces and alert only on finds worth pursuing or watching.

Run the deal-scout-watch skill against the saved watch list, enabled sites, budget caps and local radius. Send one alert per Pursue or Watch find. Never send Pass finds. Stay completely silent when nothing is worth proposing. Never bid, buy or message a seller without explicit approval.

Fires on:
- cron `CRON_TZ=America/New_York 20 8 * * 1-5`

Ask the importing user for:
- Timezone
