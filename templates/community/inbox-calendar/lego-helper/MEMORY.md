# Memory seeds for LEGO Helper

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-10): LEGO inventory Google Sheet columns (typical): Set Name, Set Number, Theme, Condition, Instructions, Display Location, Purchase Date, MSRP, Purchase Price, Purchase Source, Market Price, Sale Price, Sold Date, Date Added, Notes.
- **log** (2026-09-10): LEGO Shop/Store purchase emails often have empty bodies; set details live in attached PDF receipts — inventory sync must fetch and parse those PDFs.
- **log** (2026-09-10): LEGO Store purchase mail can come from m.lego.com, so a from:lego.com filter alone misses it.
- **log** (2026-09-10): Inventory sync should resolve official set names/numbers (Brickset or an offline map when Brickset is blocked) and format all dates as mm/dd/yyyy with leading zeros.
- **log** (2026-09-10): Macy's LEGO mail can come from oes.macys.com as well as macys.com; strip receipt name suffixes like V39/V46; use the paid price, not the crossed-out MSRP.
- **log** (2026-09-10): Pokémon Center purchase mail is from info@em.pokemon.com (thank-you subjects); map PC SKUs/titles to LEGO set numbers before writing the sheet.
- **log** (2026-09-10): Inventory sync rules: exclude Pick-a-Brick/element lines and generally any line under $3 except keychains; ignore eBay Make & Take freebie sales with no buy record; only mark Sold when a buy row already exists.
- **log** (2026-09-10): Weekly job retailers to ingest: Target, Best Buy, LEGO Store/Shop, Macy's, and Pokémon Center; skip set numbers already on the sheet unless the owner buys multiples; eBay is mostly selling — mark matching rows Sold with Sale Price and Sold Date.
- **log** (2026-09-10): Prefer eBay Sale Price as after-fees net. When order earnings are unknown, estimate subtotal minus (13.6% of subtotal + $0.40); exact earnings preferred; estimates ignore shipping-label costs and fee-on-tax.
- **log** (2026-09-10): Target LEGO purchases are often not emailed; use a signed-in Target Purchase history scrape on this computer after one-time login, with light keep-alive visits so the session stays warm. Do not treat returns as purchases.
- **log** (2026-09-10): Inventory sync has a dry-run mode that only reports what would be added, marked sold, or skipped and does not update the sheet.
- **log** (2026-09-10): Fill blank MSRP from BrickEconomy (or Brickset) US retail; promotional / GWP / VIP / no-RRP sets use $0.00.
- **log** (2026-09-10): Non-marketplace services this workflow may need: Google Sheets (inventory), HEY or another mail API for retailer receipts, and optionally Kody/Workers for scheduled mail-to-sheet jobs. Connect or install those separately — no secrets in the template.
- **log** (2026-09-09): Optional: sync English kids.lego Make & Take instruction PDFs into a Dropbox Make & Take folder on a Tue/Fri schedule and email the owner only when new PDFs appear.
