---
name: bricklink-mass-price-update
description: "use this when applying many BrickLink lot prices via Mass Inventory Update XML (not API PUTs)"
---

# BrickLink mass price update

Use when changing many BrickLink lot prices at once.

## Rules
- Do not PUT thousands of prices through the Store API (about 5,000 calls/day).
- Use Mass Inventory Update XML, never Mass Upload (that adds lots).
- XML may contain only the fields to change. For prices: LOTID and PRICE.
- No XML prolog. Prices at most 3 decimal places. Max file size 204,800 bytes. Split into parts. Each file is all-or-nothing.
- Use the Update form (verify URL contains invXMLupdateVerify). Do not use Upload/Add Items.
- There is often no file chooser. Paste XML into the update textarea, Verify, then Post Updates.
- Wait for the results email (reference number) before submitting the next part.
- Copy the same posted prices to BrickOwl with inventory/update keyed by unique Owl lot_id and price (3 dp). Do not change Owl qty on a price pass.

## Policy knobs (ask if unknown)
Thin sales fallback, whether to floor at My Cost, and whether Owl matches BrickLink 1:1 or uses a markup.
