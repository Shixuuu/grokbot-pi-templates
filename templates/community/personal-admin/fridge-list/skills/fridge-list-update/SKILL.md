---
name: fridge-list-update
description: "use this when a Fridge List owner texts a change (used, bought, finished), says update, or sends a grocery receipt photo"
---

# Fridge List: update (upkeep between weekly rescans)
**Trigger:** "update", "update fridge", "update pantry", or a texted change: "used the eggs", "finished the milk", "threw out the leftovers", "bought milk", "got 2 avocados", "milk is at 1/4", or a photo of a grocery receipt.
**Never:** delete history, order, spend, or message anyone.

## Steps
1. Load /workspace/fridge-list/current.json. Between scans, upkeep happens by text. The weekly photo rescan (fridge-list-scan) catches everything else.
2. **Texted changes** (no widget needed). Match each item by name using fuzzy and synonym matching ("the milk" = "Organic 2% milk"). If two items could match, ask one short question.
   - "used / finished / ate / threw out X": remove it and add it to `shopping` with reason "gone". "Used 2 eggs" counts down instead. A partial amount ("milk is at 1/4") updates the amount, and at 1/4 or almost out, add it with reason "low".
   - "bought / got X": an existing item is set to full (or the count goes up), and a new item is added with `added` = today and its location by the fridge-list-scan rules. Either way, take X off `shopping`.
3. **"update" taps:**
   - Say: "Here's your <fridge/pantry> from <updated date>, it's now <today>." "update" covers every location, and "update fridge" or "update pantry" covers one.
   - Send one multi-select widget, "What's gone?": one option per item labeled amount then name ("~1/2 gal milk"), plus a last option "Nothing's gone". Use allowCustom for typed changes. If a location has over 6 items, send one widget per location.
   - Remove picked items and add each to `shopping` with reason "gone". Apply typed amounts the same way as step 2.
4. **Receipt photo** (after a grocery run):
   - **Date:** `added` = the receipt date (owner's local date). If it's unreadable, use today.
   - **Skip non-food lines:** bags, tax, totals, discounts and coupons, deposits, gift cards, and household or personal-care items (paper towels, soap, batteries).
   - **Plain names:** turn abbreviated lines into plain names ("ORG BNLS CHKN BRST" -> Boneless chicken breast; "TJ SHRP CHDR" -> Sharp cheddar, with the store brand in `brand`). Leading store codes like "TJ" or "KS" go to `brand`. Leave out words like "ORG" unless they matter. When you aren't sure what a line is, save your best plain name with `guess: true`. Never put "?" in names. Skip lines you can't decode at all, and list them in the reply.
   - **Count:** a printed quantity like "2 @ 3.99" or "QTY 2" sets the count. Otherwise use 1. Bought items start full.
   - **Location and category:** fridge for dairy, eggs, fresh meat and fish, deli, and most fresh produce; freezer for frozen items; pantry for dry and canned goods, bread, bananas, potatoes, and onions. Sauces, dressings, spreads, jams, pickles, and syrups get `category: "condiment"` (location fridge or pantry). Also set a simple `category` (dairy, proteins, produce, bakery, frozen, dry goods, snacks, drinks).
   - **Merge:** if an item has the same name + brand + location, add to its count (or set it to full) and keep its original `added`. Otherwise add a new item. Take merged and new items off `shopping`.
   - **Estimated use-by:** for perishables without a printed date, set `expires` = the receipt date + the default below, and `expires_est: true`. Never estimate dates for frozen, canned, or dry goods.
     - Fresh chicken, ground meat, and fish: 2 days.
     - Steak, chops, and berries: 3 days.
     - Deli meat, bagged salad and leafy greens, bread, and soft cheese: 5 days.
     - Milk, cream, and most fresh produce: 7 days.
     - Yogurt: 14 days.
     - Eggs and hard cheese: 21 days.
   - **Reply:** send the updated image list using the fridge-list-scan step 10 rules, with estimated dates shown as "est. use by M/D". Add one line: "Added N from your <M/D> receipt (N merged). Skipped: bags, tax, ..."
5. Save (this also writes a history snapshot).
6. Confirm in one line (a receipt gets the image list from step 4 instead). When the owner asks for the list, send the image list using the fridge-list-scan output rules.

**Done means:** current.json matches the owner's texts, taps, or receipt (food lines only, plain names, guesses flagged, estimated dates marked), the shopping list got the gone and low items (and lost anything bought), and a history snapshot was written.

**Example:** "used the eggs, bought milk" -> "Took out eggs (added to your shopping list) and restocked milk."
**Example:** receipt dated 10/2 with "ORG BNLS CHKN BRST", "TJ SHRP CHDR", "BAG FEE", "TAX" -> the image list (chicken in pink, est. use by 10/4), then "Added 2 from your 10/2 receipt (cheddar merged). Skipped: bag fee, tax."
