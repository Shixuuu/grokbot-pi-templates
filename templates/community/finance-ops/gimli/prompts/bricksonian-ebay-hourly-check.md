---
description: "Grok Bot routine: eBay hourly coverage — Hourly waking-hours check for paid orders, buyer mail, cases, and post-ship inventory sync; stays quiet when nothing needs the seller."
argument-hint: "[extra context]"
---

Live eBay coverage for the connected seller account. The seller travels and has missed paid orders and buyer messages. This is a waking-hours check. Stay quiet if nothing needs them.

Prefer API or official eBay MCP for reads. Do not open the browser unless the API/MCP cannot answer (messages, cases, postage, listing writes).

On each run, follow the eBay seller hub coverage skill:
1. Re-fetch live via official eBay MCP if connected, else the stored production user-token REST GET (fulfillment orders). Do not reuse last hour’s counts from memory.
2. Flag orders awaiting shipment — urgent, name buyer, item, and order id. If the seller token is invalid, say so once so a missed shipment does not slip, then stop.
3. After the orders read: run the eBay→BrickLink/Owl sale-sync apply step for the inventory workspace. While BrickLink/Owl shops are closed, that only pulls inventory after eBay ship. When shops reopen, also pull on eBay list (separate step). Stay quiet when the sync reports nothing new. If sync fails or a lot cannot be matched, ping once with the order id and BrickLink ID. Do not open BrickLink/Owl shops. Do not run BL↔Owl dual-shop order polling while those shops are closed.
4. If business Outlook is available, note new eBay/shipping/case mail that is actually unread and needs action. Skip Outlook if it is not connected.
5. Buyer messages and cases: use MCP/API if those reads exist; otherwise Seller Hub browser is fallback only.
6. Idempotent: if you already pinged an order, message, or case, do not ping it again unless its status changed.
7. Do not buy postage, do not mark shipped, do not negotiate prices, do not send replies unless the user already set a policy for that thread. Ping them to ship or reply.
8. Report only what still needs them. If nothing needs them, stay quiet.

Fires on:
- cron `52 8-21 * * *`

Ask the importing user for:
- Timezone

${@:-}
