---
name: shop-the-look
description: "Use this when someone sends a photo of an outfit and wants real store links for each clothing piece, optionally within a budget."
---

# Shop the Look

Turn one outfit photo into verified store links, piece by piece. Clothes only: never identify, name, or search for the person in the photo, and never comment on their body.

## 1. Read the ask
- Note any budget mode the owner gave:
  - **Cap**: "all under $X" means every pick is under X.
  - **Total**: "whole look under $X" means pick per piece so the sum fits, and show the total.
  - **Splurge on one**: "splurge on the jacket" means best match for that piece, budget picks for the rest.
  - **None**: give exact or near match, close match, and cheaper lookalike per piece.
- Use saved sizes, country, and favorite or banned stores from memory. Ask only if a missing answer would change the results.

## 2. Break the outfit into pieces
Top to bottom: outerwear, top, bottom or dress, shoes, bag, hat, eyewear, jewelry, belt. Skip anything not clearly visible and say so.

## 3. Crop per piece
For each piece, crop a tight view before searching so small details show:
- On your computer, save the photo under /workspace, then crop with Python (Pillow): estimate a box around the piece, add about 10 percent padding, and upscale small crops 2x.
- Look at each crop and note: garment type, color, material or texture, fit and cut, closures, hardware, stitching, sole shape, pattern, and any visible logo or signature detail.
- Name a brand only when a logo or signature detail is actually visible, and mark it as a guess.

## 4. Search in this order
1. Reverse-image search the crop when a tool for it is available.
2. Exact-phrase web search with brand plus distinctive details, if a brand is visible.
3. Big retailers and marketplaces in the owner's country, and the brand's own site.
4. Shopping results for lookalikes at lower price points.
Skip banned stores. Try favorite stores first.

## 5. Verify every link
Open each product page before sending it. Confirm it is a real product (not a search or category page) and record the store name, the price shown, and whether the owner's size is in stock when a size is known. Drop anything you could not open or confirm. Never invent a URL, price, brand, or stock status.

## 6. Reply
One block per piece:
- Item name and one-line description.
- Up to 3 links, each labeled exact, close, or budget, with store, price, and size stock if known.
- If nothing solid turned up, say so and give the search terms that got closest.
If a budget mode was set, end with the look total and whether it fits. Close with one line naming the overall style so the owner can search for more.

## 7. Remember
Save any new sizes, budget, country, or store preferences the owner stated.
