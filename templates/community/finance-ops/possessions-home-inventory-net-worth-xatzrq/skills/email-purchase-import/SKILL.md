---
name: email-purchase-import
description: "Use this when the owner wants purchases found in their email added to their tracker, or sale and payout emails from their selling platforms used to close out Listed items, as a one-time backfill or a recurring scan."
---

# Email purchase import

Find purchases in the owner's connected email and add them to the Inventory tab of their possessions tracker. The owner approves every item before it goes in.

## 1. Search
Use the connected email connector (for example Gmail). If none is connected, ask the owner to connect one, and don't use the browser as a workaround. For a backfill, ask how far back to go (for example, 12 months). For a recurring scan, search only since the last run date, which you store in memory.
Queries to combine: subject contains order confirmation, your order, receipt, invoice, order shipped, or payment received. Include common senders such as Amazon, eBay, Etsy, Walmart, Target, Home Depot, Lowe's, Best Buy, Costco, Facebook Marketplace/PayPal/Venmo payment receipts, auction houses, and any store the owner names. Exclude promotions, newsletters, subscriptions and digital services, food delivery, travel, utilities, and refund-only or cancellation mail unless the owner wants those.

## 2. Extract
Read each matching message. For each physical item, capture the item name, brand/model, where it was bought (store or seller), the purchase date, the price paid per item (split multi-item orders into separate rows and leave tax and shipping out of the price unless the owner prefers them in), quantity, the order number, and a link to the message or order as the source. Also capture condition when stated (new vs used). Guess the category from the owner's category list.
Handle these cases:
- Merge shipped, delivered, and confirmation emails for the same order number into one record.
- Drop items that were later refunded or cancelled, noting why.
- Skip consumables and low-value items below a threshold the owner sets (default $25) unless they want everything.
- Never invent a price or date. If one can't be found, leave it blank and flag the item.

## 3. Deduplicate
Compare against existing Inventory rows by order number (store it in Notes as "Order #…") and by name, date, and price. Skip anything already tracked.

## 4. Review
Show the owner a short table of candidates (item, store, date, price, category, and any flags). Let them approve all, approve some, or edit. Nothing is written until they approve.

## 5. Write
Append approved items as rows with Status Owned, Purchase Price set to the price paid, Where Purchased, Purchase Date, and Notes holding the order number and the source email subject. Set Current Market Value to the purchase price as a starting value and Valuation Source to "Purchase price (not yet valued)", so the next valuation run picks them up. Recalculate, check that there are no formula errors, and send the updated file with a one-line summary: how many were added, their total cost, and how many were skipped or flagged.

## Privacy
Read only the purchase-related messages needed. Never reply to, forward, label, or delete email. Keep order details inside the owner's tracker and memory.
