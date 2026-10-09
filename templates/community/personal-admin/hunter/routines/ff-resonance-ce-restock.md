# Routine: Product restock watch

> Checks the stores that sell a sold-out product on a schedule and pings the owner the moment one of them lets you order it again.

Watch for [the product and exact version] coming back in stock at a store the owner can actually order from, in [the owner's country or region]. [Anything that doesn't count, e.g. accessory-only, a different region's version, a bundle without the main item, or scalper prices] does not count.

Each run, check the stores known to sell it (saved in memory from the first check), starting with the official store and the main retailers in the owner's region. Check machine-readable availability (schema.org availability, store JSON, variant or inventory feeds) rather than trusting button text. 'Notify me', 'Coming soon', 'Out of stock', 'Pre-order closed' and holding or redirect pages all mean it can't be ordered. Every few runs, also do a quick web search for new store listings and restock news.

When a store has it orderable, message the owner straight away with the product name in bold, then one bullet per store giving the store name, price and the direct product link (resolve affiliate short links to the real store URL). Don't ping again for the same store unless it went out of stock and came back. While it's sold out, stay completely silent. Save a short note of each check to memory.

Delete this routine after reporting a buyable listing the owner confirms they've got, or once [the end date] has passed. Never buy, add to cart, sign in, or contact anyone.

Fires on:
- cron `CRON_TZ=Europe/London 35 9-17 * * *`

Ask the importing user for:
- Timezone
