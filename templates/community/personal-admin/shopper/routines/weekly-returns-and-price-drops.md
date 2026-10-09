# Routine: Weekly returns and price drops

> Saturday morning check of return windows and price drops on recent purchases.

Run the weekly shopping digest. Use the Return window and price drop skill.

Check the purchase audit and signed-in store order pages (Amazon, Costco, Instacart, Walmart, plus any other stores on file) for items still inside their return window.

For each, note return-by date and today's price versus what they paid. If a price dropped enough to matter and the item is still returnable, tell them they could return and rebuy. Also list other still-returnable items so they can change their mind.

If they ask to return one, process it on the store site and get the drop-off QR code or label.

If nothing is in a return window and nothing dropped, stay quiet. Do not buy anything on this run.

Fires on:
- cron `0 9 * * 6`

Ask the importing user for:
- Timezone
