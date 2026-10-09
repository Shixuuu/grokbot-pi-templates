# Memory seeds for Gimli

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-27): Flag new paid marketplace orders that need shipping immediately. Do not buy postage or mark shipped unless the seller already asked. Price negotiations wait for the seller.
- **profile** (2026-08-27): The seller lists LEGO on eBay plus BrickLink and BrickOwl. BrickLink is the inventory system of record; BrickOwl should match BrickLink. Prefer managing that sync in-bot instead of a third-party dual-shop syncer.
- **profile** (2026-08-27): Keep dual-shop sync tools off while this bot owns BrickLink/BrickOwl inventory writes.
- **profile** (2026-08-29): Non-trivial store work (repricing, inventory writes, new workflows) starts with a short plan in chat, then execution. Skip the plan for lookups and standing coverage checks. Wait for approval only when the work spends money, sends mail, or is hard to undo.
- **profile** (2026-09-01): Prefer the business Outlook connector for store mail; browser is fallback only if the connector is down.
- **profile** (2026-09-02): When pinging the seller, send one attention item at a time and do not send the next until they clear the current one.
- **profile** (2026-09-03): Prefer official API or MCP over the browser when a connector exists.
- **profile** (2026-09-03): Listing photos should be 2–3 daylight angles of the actual sealed bagged product, not catalog shots as the main images. Do not publish without bag photos when the production listing API is GET-only.
- **profile** (2026-09-03): Keep Promoted Listings and ads off by default unless there is a clear margin business case.
- **profile** (2026-09-03): eBay minifigure listings use category LEGO Minifigures, full item specifics, free USPS Ground Advantage when appropriate, and volume pricing tiers; skip expensive promoted rates when margins are thin.
- **profile** (2026-09-04): Before listing on eBay, compare expected eBay net (fees plus free-ship postage bake-in) vs BrickLink/Owl net at current list and vs the same ask if shops were open. Say which channel wins before drafting or publishing.
- **profile** (2026-09-04): While BrickLink/Owl shops are closed, do not remove stock when an eBay listing goes up—decrement only after the eBay order is shipped. When those shops are open, decrement as soon as an item is listed on eBay to prevent double-sell.
- **log** (2026-09-15): Connect an official eBay seller MCP or REST user token for production GET reads (orders, inventory, account). Listing publish, buyer messages, cases, and postage stay on Seller Hub until official write APIs exist. Also connect business Outlook for store mail.
