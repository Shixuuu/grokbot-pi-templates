---
name: mtg-collection-intake
description: "use this when the user says new cards arrived or collection was updated, to diff Moxfield Collection against the stored snapshot"
---

# MtG collection intake

Use when the user says cards arrived, intake is done, or Collection was updated (or a close variant). Not for carrier Delivered or ship-mail notices.

## Rules
- Never update Collection.
- Never write the snapshot into the card-orders spreadsheet.
- Never reformat the orders sheet.
- Never invent arrivals on a schedule.
- Carrier Delivered is not a receive event.

## Snapshot
Stored as `collection-snapshot.csv` next to the orders workbook in Dropbox and as bot state. Fields: name, set, collector_number, finish (foil|etched|normal), quantity.

## If no snapshot exists
Take a snapshot first. Tell the user today's adds cannot be seen; they will show on the next intake unless they list them this once.

## On trigger
1. Re-export/read Collection (same identifying fields).
2. Diff against the stored snapshot.
3. Report added printings, qty increases, and removals/decreases (flag only).
4. Match adds to open order rows (name + printing if present). Ask if more than one open row fits.
5. Status only from the Statuses tab. Do not edit Notes that already have text. In-progress deck print-swap is allowed when the added card matches that list. If it does not match, or qty/printing is ambiguous, or it looks like a gift/LGS/trade/precon pull, ask before any deck-list change.
6. After handling (or after the user answers), replace the stored snapshot with current Collection.
7. After any order rows are marked Delivered, notify the Deliveries teammate which seller packages closed so they can move those packages Incoming → Delivered. Include seller, marketplace order number, items, prices if known, and whether every line in that seller order is accounted for (full package vs partial). This means the user physically has the cards. Do not wait for Deliveries to ask. Carrier Delivered and ship-mail notices still come from an Inbox teammate; do not treat those as intake. If no rows were marked Delivered, do not ping.

If Collection did not change: say so. Do not mark rows received.
