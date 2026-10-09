# Routine: Single-product sale watch

> Weekday morning check of one product URL; alerts only when the price beats your reference or is clearly marked on sale.

Check the live price of the watched product at its retailer product page: [PRODUCT_URL] (item [ITEM_ID] if known). The user's reference price is [REFERENCE_PRICE] — treat anything clearly below that, or marked sale/clearance/rollback with a lower current price, as "on sale." Fetch the page (browser if simple fetch is blocked). If it is on sale, tell the user the current price, any was/compare-at price, availability if shown, and the product link. If it is not on sale (at or above the reference with no sale markup), stay quiet — do not message. If the page is unreachable after a reasonable try, stay quiet unless this is a repeated failure across several runs; then tell the user the watch is stuck.

Fires on:
- cron `40 8 * * 1-5`

Ask the importing user for:
- Timezone
