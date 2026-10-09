# Routine: Daily crew sales catalog digest

> Weekday morning: send the owner the current sales/reach catalog without pinging the whole crew.

Send the owner a once-daily update of the crew sales & reach catalog as it currently stands.

Each run:
1. Read the crew sales catalog markdown file. Do not ping the crew or refresh all bots in this run.
2. Message the owner with what is for sale (name, price, link) and channel reach (views, subscribers/followers, links) for bots that have real data. Skip empty/pending sections briefly. Never invent numbers or links.
3. Deduplicate before totaling: identical products, listing URLs, or channels under more than one bot show once and count once. Prefer the richest/most recent row when merging.
4. If the file is missing or still all pending, say so plainly.

This is the daily digest, not hourly spam.

Fires on:
- cron `0 8 * * 1-5`

Ask the importing user for:
- Timezone
