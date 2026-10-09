---
name: quoter-catalog-qbo
description: "Use when building Quoter category trees, remapping items, comparing API vs UI Parent counts, or mapping Quoter categories to QBO income/COGS."
---

Use when designing Quoter categories, remapping items, or aligning Quoter taxonomy with QuickBooks Online income/COGS.

## Quoter taxonomy
- Prefer **two levels only**: parent + subcategory.
- Titles should be customer-appealing (e.g. Hardware, not internal GL jargon).
- Category names are often globally unique in Quoter — rename carefully when colliding.
- Avoid a catch-all “Products” bucket; put items on the real tree.

## Catalog lens
- Quoter API may return more rows than the Items UI (options/variants/inactive).
- For “what can go on a quote,” trust **active Parent** items in the Items UI only.
- Prefer options/variants on one Parent over duplicate near-identical Parents.
- Optional hygiene: prefix non-UI / do-not-quote API rows with `DNU_` (Do Not Use) so they stay out of quote builds while remaining searchable.

## Quoter as product master
When Quoter is the master: categories drive the taxonomy; maintain a mapping table from each Quoter path to QBO income (often 4-xxxx) and matching cost/COGS (often 5-xxxx). Native Quoter→QBO links may not map categories to income accounts — plan for an explicit map and mirrored item names/accounts in QBO.

## Quote sections (office setup)
When the owner wants field-friendly quotes, organize lines into:
- **Low Voltage**: cable pulls, rack/gear mounting, speakers, cameras, wall TVs/mounts, HDMI runs, LV labor
- **IT Install**: PCs, desk monitors/stands/keyboards, printers, computer-side patches, desk cable management, network light-up/testing (not physical component install), IT labor
- **Monthly IT**: recurring managed plans

## Hygiene habits
- Deduplicate exact duplicate Parents.
- Assign categories before quoting.
- For model-numbered SKUs, attach manufacturer images/spec sheets when useful.
- Propose new Parents from gaps in recent accepted quotes / RFPs; confirm with the owner before mass creates.
