---
name: fridge-list-scan
description: "use this when a Fridge List owner sends photos of food, shelves, or barcodes, or says scan, rescan, or weekly scan"
---

# Fridge List: scan and weekly rescan
**Trigger:** "scan fridge", "scan pantry", "rescan", "weekly scan", or photos of food, shelves, or barcodes. (Photos sent with "what can I make" go to fridge-list-recipes. Grocery receipt photos go to fridge-list-update.)
**Never:** invent a barcode, delete history, order, spend, or message anyone.

## Steps
1. Take up to 6 photos per message until the owner says "done". Shelves, single items, and barcodes all work.
2. Readable barcode: look it up at `https://world.openfoodfacts.org/api/v2/product/<UPC>.json` and use product_name, brands, quantity. Otherwise name it from the label or look.
3. When you aren't sure, use the best plain name and set `guess: true`. Never put "?" in names. Ask at most one short question per batch, only when you truly can't tell.
4. **Location** is `fridge`, `freezer`, or `pantry`: use the command, or else what the photo shows. A lone barcode goes to pantry, except dairy, meat, and chilled foods (fridge). **Area** is the spot that was photographed. It defaults to the location, or use the owner's name for it ("pantry 2", "door"), and it's saved in `area`.
5. **Amount** in words: jugs, bottles, jars, bags, and condiments get full / 3/4 / 1/2 / 1/4 / almost out ("~1/2 gal milk"). Eggs, cans, fruit, pouches, and boxes get a whole count. An unknown amount is saved as `?`, kept off the shopping list, and never shown. At 1/4, almost out, or a count of 0, add it to `shopping` with reason "low". A readable use-by date goes in `expires`. If there's no printed date, leave it empty (only receipt intake estimates dates).
6. **Match** = same name + brand (if known) + location. Update the amount and keep the original `added`. If there are two possible matches, ask the one question.
7. **Leftovers:** `kind: leftover`, `added` = today. For an ambiguous day label ("Tue"), ask once: "Is that from today or last Tuesday?"
8. **First scan vs weekly rescan.** If current.json already has items in an area, the photos of that area are a rescan. For each photographed area:
   - Seen and matched: update the amount and `expires`, and keep `added`.
   - New: add it with `added` = today.
   - On the list but not seen: it's gone. Remove it from `items`. If it's a staple, add it to `shopping` with reason "gone". A staple is an item with `staple: true` (the owner says "always keep X" or "X is a staple"), or everyday basics if unset: milk, eggs, bread, butter, cheese, yogurt, coffee, rice, pasta, cooking oil, fresh fruit, and vegetables.
   - Areas not photographed this time stay exactly as they were. Never mark them gone.
   - If the photos clearly show only part of an area (one shelf), ask the one question, "Was that the whole <area>?", before marking anything gone there.
   - "<item> is still there" restores the item from the last snapshot with its original `added`.
9. **Save** on every change to /workspace/fridge-list/current.json, plus /workspace/fridge-list/history/YYYY-MM-DD-HHMM.json (owner's local time):
   `{updated, settings:{expiry:false, servings:false}, items:[{name, brand, upc, location:"fridge"|"freezer"|"pantry", area, category, amount, servings_left, expires, expires_est, kind:"item"|"opened"|"leftover", staple, added, opened, guess}], shopping:[{name, reason:"low"|"gone"}]}`
10. **After "done": send the list as one color-coded image** (render HTML to PNG with a headless browser, two columns, cropped tight with no blank space at the bottom; offer a one-column phone version for texting):
    - Group items under Fridge, Freezer, Pantry, and Condiments. Condiments covers sauces, dressings, spreads, jams, pickles, syrups, and extracts from any location (`category: "condiment"`). Put a short card under a taller one to fill empty space.
    - Inside each group, use small subheads (Dairy & eggs, Cheese, Proteins, Produce, Ready to eat, Drinks, and so on). Always say "Proteins", never "Meat", so tofu, tempeh, beans, and plant-based items fit in for vegetarians and vegans.
    - One row per item: amount + name on the left, and the date beside it: "use by M/D" when `expires` is set ("est. use by M/D" when `expires_est` is true), otherwise "added M/D". Estimated dates also count for the red and pink rows.
    - At the top: expired items in red, then items expiring within 3 days (today included) in pink.
    - No question marks anywhere. Guessed names use the best plain name, and unknown amounts are left out.
    - Then one text line. For a rescan: "Since last scan: +N new, N gone (N on your shopping list), N amounts changed." Add at most one freshness line (fridge-list-extras).

**Done means:** every photographed item is saved once (no duplicates) with a location, area, and amount. In rescanned areas, missing items were marked gone, and unphotographed areas are unchanged. A history snapshot exists, and the image list follows step 10.

**Example:** "rescan fridge" + 3 photos, "done" -> image list (red: hummus, use by 9/29; pink: spring mix, use by 10/2), then "Since last scan: +2 new, 3 gone (milk and eggs on your shopping list), 4 amounts changed. Freezer and pantry weren't photographed, so they're unchanged."
