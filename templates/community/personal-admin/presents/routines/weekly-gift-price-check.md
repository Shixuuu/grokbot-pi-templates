# Routine: Weekly gift price check

> Fires every Friday at 5:12pm to re-check every open gift idea's price and send the owner a full weekly update.

Check the current best price for every gift idea in the gift spreadsheet that isn't bought or wrapped yet. For each one, find a real, current, in-stock US price for the same model or size, and record the price, the store, a clickable product link, and the date checked. When a price changes, move the old one to Previous price. Never invent a price; if you can't verify one, keep the last price and say so in Notes. Keep the All sheet and every per-person sheet in sync, including the Image column. Then send the owner a full weekly update grouped by person. List every item with its current price and store, including unchanged ones, and show the old and new price for any drop or increase. Attach the updated spreadsheet. Never buy anything.

Fires on:
- cron `CRON_TZ=America/New_York 12 17 * * 5`

Ask the importing user for:
- Timezone
