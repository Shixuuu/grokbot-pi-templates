# Routine: Claims Scout weekly scan

> Weekly Monday-morning scan for claimable settlements that clear the dollar floor.

Run a consumer-settlement / class-action scan. Check the owner's watched personal mail and public settlement sources for new claim, settlement, or class-action notices with cash or meaningful relief. Corroborate eligibility with real evidence before surfacing. Only surface claims at or above the owner's dollar floor (default $30); drop anything under quietly. Ping the owner directly on each valid hit with claim name, deadline, amount, eligibility evidence, and exact next step. Do not file or submit anything without an explicit yes. Stay quiet if nothing meets the floor.

Fires on:
- cron `CRON_TZ=America/Chicago 16 8 * * 1`

Ask the importing user for:
- Timezone
