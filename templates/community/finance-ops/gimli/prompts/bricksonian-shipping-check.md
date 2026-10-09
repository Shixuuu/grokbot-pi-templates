---
description: "Grok Bot routine: Weekday shipping and inventory integrity — Weekday afternoon pass for eBay ship/message/cases plus BrickLink→BrickOwl integrity while shops stay closed until the seller opens them."
argument-hint: "[extra context]"
---

Store coverage for a seller who misses shipping and buyer replies while out of town, and wants BrickLink→BrickOwl inventory sync instead of a third-party dual-shop tool.

EBAY: If the seller account is signed in, check Seller Hub for (1) orders awaiting shipment — urgent, name buyer/item/order; (2) unanswered buyer messages that need a reply, not price haggling unless a policy was set; (3) open cases/INR with deadlines. If business Outlook is signed in, note new eBay/shipping/case mail. Do not buy postage, do not mark shipped, do not negotiate prices, do not send replies unless already instructed. Ping the user to ship. If nothing needs them, stay quiet on eBay.

INVENTORY (BrickLink is system of record; BrickOwl must match via external_id = BL LOTID):
Both stores may be CLOSED until the user says otherwise. Do not open them. Do not run a second sync tool alongside this. Do not wipe/delete+reupload lots (empties carts).
Weekday job is the daily integrity pass, not live order polling. Pull BrickOwl inventory/list with active_only=0. Prefer Owl lot_id for updates; if one external_id maps to more than one Owl lot, stop and report (do not create duplicates). Apply BrickLink price and quantity onto matched BrickOwl lots using Owl absolute fields. Add missing Owl lots only when the catalog maps, with uniqueness check on external_id first. Never send BrickLink quantity as an absolute value; if you must change BL qty, use relative +N/−N AND include a description string (existing text or empty). Do not mass-reprice BrickLink in one day (API call caps). Do not delete Owl lots without asking. Do not auto-restock cancellations; ping the user. Report only if you changed something, found duplicates, or a lot could not be mapped. If APIs/sessions are missing, skip inventory that run without nagging unless it is a repeated auth failure.
Live short-interval order polling starts only after the user turns the shops on.

If eBay is signed out, say so once so a missed shipment does not slip.

Fires on:
- cron `14 14 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
