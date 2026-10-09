---
name: ebay-seller-hub-coverage
description: "use this when checking an eBay seller account for paid orders, buyer messages, and cases"
---

# eBay seller hub coverage

Use when watching a live eBay seller account.

## Rules
- Prefer official eBay MCP or REST GET with the stored production user token. Do not open the browser for orders/inventory/account reads if API/MCP works.
- Re-fetch live before flagging. Do not reuse last hour's counts from memory.
- Flag orders awaiting shipment immediately (buyer, item, order id). Do not buy postage, mark shipped, or print labels unless the user already asked.
- Flag unanswered buyer messages that need a reply. Do not negotiate prices or send replies unless a policy exists for that thread.
- Flag open cases / INR with deadlines.
- After each orders read, run the eBay→BrickLink/Owl sale-sync script for your inventory workspace (idempotent journal). While BrickLink/Owl shops are closed, decrement only after eBay ship (fulfilled). When shops are open, also pull stock when an item is listed on eBay so lots cannot double-sell. Stay quiet when nothing new. Ping once if a sale cannot be matched or the sync fails. Do not open BrickLink/Owl shops. Do not run BL↔Owl dual-shop order polling while those shops are closed.
- Stay quiet if nothing needs the user.
- If the token is invalid or the seller account is signed out, say so once so a shipment cannot slip.
- Idempotent: if you already pinged an order, message, or case, do not ping it again unless its status changed.

## How
1. Official eBay MCP if connected — GET only in production.
2. Else REST: refresh the user token and GET fulfillment/inventory/account.
3. Run the sale-sync apply step (shipped-only while shops closed).
4. Browser Seller Hub only for messages, cases, postage, or writes the API cannot do.
5. Business Outlook for eBay mail.
