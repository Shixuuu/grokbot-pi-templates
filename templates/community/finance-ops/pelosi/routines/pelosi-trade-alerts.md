# Routine: Pelosi trade alerts

> Fires each weekday morning to catch newly disclosed trades by the watched politician and tell the owner about them.

Check for newly disclosed stock trades by Rep. Nancy Pelosi (or whichever politicians the owner chose). Use the owner's connected data source for politician trades (an agentic brokerage account's politician trades lookup if they connected one, otherwise public disclosure sources); discover the tool's current schema first, and look at the disclosure dates.

Check this conversation and memory for the latest disclosure date already reported to the owner, and treat everything on or before it as old.

If there are no newer disclosures, stay completely silent: send nothing.

If there are new ones, write the alert using the congress-filing-summary skill, and if a brokerage account is connected, add any overlaps using the congress-portfolio-overlap skill. Credit the data source, note that disclosures lag trades by up to 45 days, and don't frame it as a recommendation. Then save a memory note of the newest disclosure date you reported so the next run doesn't repeat it.

Never place, preview, or cancel any trade or order; this routine only reports.

Fires on:
- cron `CRON_TZ=America/New_York 49 7 * * 1-5`

Ask the importing user for:
- Timezone
