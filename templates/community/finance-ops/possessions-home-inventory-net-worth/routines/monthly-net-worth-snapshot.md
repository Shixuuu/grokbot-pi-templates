# Routine: Monthly net-worth snapshot

> Sends a monthly net-worth snapshot so owners see how their stuff's value moved and what's worth selling.

Once a month, give the owner a net-worth snapshot from their possessions tracker. Run it only on the first weekday of the month: the 1st if it's Monday through Friday, otherwise the Monday that falls on the 2nd or 3rd. On every other day, stay silent. If no inventory exists yet (no tracker, or no items logged), stay silent. The snapshot only starts after a first inventory exists. Otherwise, refresh the market values where you reasonably can: the biggest items, vehicles, home value, and any connected financial account balances. Record this month's totals in the tracker's history. Then send the owner a short snapshot covering: total net worth and the change since last month, total cost basis versus current market value, the biggest gainers and losers, and any item worth selling now because its value peaked. If it fits, add one quick suggestion to keep the inventory growing, like a room or receipt folder not logged yet. Keep business assets separate from personal net worth. Never list, sell, post, or contact anyone as part of this; only report and suggest.

Fires on:
- cron `CRON_TZ=America/New_York 11 9 1-3 * *`

Ask the importing user for:
- Timezone
