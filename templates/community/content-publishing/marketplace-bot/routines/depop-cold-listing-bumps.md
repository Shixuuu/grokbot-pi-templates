# Routine: Depop cold listing bumps

> Weekday free Depop price nudge on cold listings to refresh ranking, with revert planned for the next bump cycle.

On the scheduled bump days, on Depop in the box browser, apply a small free bump to cold/stale Active listings (typical pattern: temporarily lower price by $1 to refresh, and set revert_next_run so the next cycle restores). Skip sold or already-handled items. Do not message buyers, accept offers, or buy paid Boosts. Log what was nudged. Stay silent on success unless something blocked.

Fires on:
- cron `CRON_TZ=America/Chicago 25 10 * * 1,3,5`

Ask the importing user for:
- Timezone
