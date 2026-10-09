---
name: import-mass-pricing-to-tcgplayer
description: "Use this when repricing TCGPlayer Live inventory from the Mass Pricing sheet: export MyPricing, apply the owner's standing formula (or the starter match-market formula) to the price column, skip changes under the delta threshold, import CSV via Import To Staged, then Move to Live."
---

# Reprice TCGPlayer live inventory

End-to-end reprice of TCGPlayer Live inventory using the owner's Mass Pricing Google Sheet and standing pricing formula.

## Defaults
- Mass Pricing sheet: {sheet_url} (inventory tab for the export; formula tab for reference).
- Seller Manage Your Pricing: https://store.tcgplayer.com/admin/pricing
- Typical MyPricing export columns: Product Name, Rarity, Condition, TCG Market Price, TCG Low Price, Total Quantity, Add to Quantity, TCG Marketplace Price (the calculated output). Preserve current listing prices from the fresh Export From Live CSV for the delta compare before overwriting the output column.
- Authoritative pricing logic: the owner's standing formula (fill down from row 2). Do not reinvent. Format output to 2 decimals.
- Apply any owner-approved floor or special rules exactly as recorded.
- Assumes signed-in Google and TCGPlayer seller sessions on the box browser. Never embed credentials.

## Starter formula (match market price)
Use this only until the owner supplies their own formula. It sets each listing to the TCG Market Price, falls back to TCG Low Price when there is no market price, and uses 999.99 when neither exists so nothing lists at zero. Check the header row and adjust the letters: here I = TCG Market Price and L = TCG Low Price, as in the standard MyPricing export.
```
=IF(AND(ISNUMBER(I2), I2 > 0), ROUND(I2, 2), IF(AND(ISNUMBER(L2), L2 > 0), ROUND(L2, 2), 999.99))
```
Put it in row 2 of the TCG Marketplace Price column and fill down.

## Delta threshold
- Only push listing updates when abs(current_listing_price - new_price) >= {delta_threshold}, compared on cent-rounded values; otherwise leave the listing unchanged.
- Prefer bulk CSV delta upload over per-listing browser clicks.

## Approval and reporting
- Scheduled run: follow the owner's choice on whether Confirm Move to Live needs approval. Silent on success; notify only when blocked.
- Ad-hoc run: confirm with the owner before Confirm Move to Live unless waived.

## Steps
### A. Export From Live
Open Manage Your Pricing, Export From Live, take the newest MyPricing CSV from Downloads.
### B. Load inventory tab
Import the CSV into the inventory tab replacing data. Do not modify the formula tab.
### C. Formula + delta filter
Apply the standing formula (or the starter formula) to the output column; if the change is below threshold, restore the current listing price for that row.
### D. Download CSV
File, Download, CSV. Strip any extra review columns.
### E. Import To Staged, then Live
Import To Staged, choose the CSV, Continue. On scheduled runs, Ignore All Errors and Submit Valid Changes if needed. Move To Live, Confirm.
### F. Optional change log
If the owner wants it, write the rows actually pushed (Id, Product Name, Set Name, Condition, Old Price, New Price) to a dated CSV; write a header-only file when nothing pushed.
### G. Report
Scheduled success: stay silent. Failure: notify with the blocker.

## Do not
- Reinvent the owner's formula; push sub-threshold moves; embed credentials; send success digests for the scheduled run.
