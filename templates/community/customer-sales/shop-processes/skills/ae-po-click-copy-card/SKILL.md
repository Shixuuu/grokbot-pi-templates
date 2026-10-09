---
name: ae-po-click-copy-card
description: "Use when a purchase order must be entered and there is no live view: write a click-copy card from last bill plus yellow qty, then the vendor email. Ask for a named Mail dump if Ship Via, terms, or current dollars are missing."
---

# Copy-paste purchase order card

Use this when the owner needs to enter a vendor PO in the accounting system and there is no live view of their screen. Generate a click-copy card. Do not punch the live company file. Do not rebuild the form as a fake PDF.

## Get facts first
1. Last bill/PO for that vendor from the file cabinet (vendor-detail print job, last PO PDF).
2. Yellow order qty from the forecast, plus any override already decided.
3. Landed cost: product dollars on THIS vendor’s PO. Freight the plant arranges with a carrier is a separate PO, not a line on the vendor PO.
4. If Ship Via, terms, current dollars, or the vendor To: address are not in the cabinet, ask the owner for that named Mail dump. Do not guess.

## Card to send (copy-paste)
Write it so they can click and type, in this order:
- Click path: Purchases → Enter Purchases → New. Top-left layout **Order** (not Bill). (Adapt labels to their accounting system.)
- Vendor name exactly as the books spell it.
- Date. Purchase # is assigned by the system; do not type one.
- Ship Via / Collect vs prepaid. Terms: leave the vendor card if unknown.
- Freight on this PO: $0 unless that vendor invoices freight.
- Line items: qty, **exact item number** from last bill, description, unit price, extended. Optional zero-qty `/` comment line if last PO used one.
- **Price trap:** item cards fill last price. If a new vendor/quote won, overwrite before Record. State the correct price.
- Total they should see before Record.
- Finish: **Record** the purchase order, then Print → PDF for email. (Sales invoices are often Print-not-Record. Purchases Record.)

## Then the vendor email
To vendor, Cc plant ops, subject with the new PO number, short body, attach the PDF. Review in outbox.

## After send
Green the forecast yellow only after it actually went. True the PO later if the invoice differs.
