---
name: multi-retailer-shop-compare
description: "Use this when the user asks to shop for, find, price, or compare a product across online retailers (Amazon, Walmart, Target, Costco, Sam's Club, Best Buy, Home Depot, Lowe's, brand stores, and other reputable e-commerce sites). Returns four picks (best-in-class premium, cheapest bare-bones, best bang for the buck, biggest discount) without buying."
---

# Multi-retailer shop compare

Compare a product the user describes across reputable US online retailers. **Never purchase.** Return four picks.

## Which retailers
Any reputable e-commerce retailer that sells the category. Examples:
- Big general stores: Amazon (sold by Amazon or an established brand storefront), Walmart, Target, eBay (new, top-rated sellers only)
- Warehouse clubs: Costco, Sam's Club, BJ's (member pricing may need login)
- Electronics: Best Buy, B&H Photo, Adorama, Newegg
- Home and hardware: Home Depot, Lowe's, Wayfair, Ace Hardware
- Apparel and shoes: Kohl's, Macy's, Nordstrom, Zappos, Old Navy, Uniqlo
- Kitchen and home goods: Williams Sonoma, Sur La Table, Crate & Barrel, Bed Bath & Beyond
- Sporting goods and outdoors: REI, Dick's Sporting Goods
- Beauty and pharmacy: Ulta, Sephora, CVS, Walgreens
- The brand's own official store (for example Apple, Bombas, or KitchenAid)

Pick the 4 to 6 retailers that fit the category best, plus any the user names or has saved as favorites. Skip stores that don't sell the category. Avoid unknown marketplace sellers, sites that look like copycats, and listings that don't show a clear return policy.

## What to return (always these four, in this order)
1. **Premium best in class**: the top-quality, best-regarded product that meets every requirement (build quality, brand reputation, warranty, expert and owner reviews), at the best current price you found for it. Price is secondary here; explain briefly why it is the best.
2. **Cheapest bare-bones**: the lowest total price that still meets every stated requirement, with no extras. Mention shipping costs or membership fees when they change the real price, and note what you give up compared with the others.
3. **Best bang for the buck**: the middle option with the best balance of quality, reviews, features, and price. Say why it beats the cheaper and pricier choices on value.
4. **Biggest discount**: the value or premium item (not a bare-bones item) with the largest real percent off from a sale, clearance, rebate, or markdown. Show the list or was price, the current price, and the percent off. If nothing is genuinely discounted, say so plainly instead of making up a markdown.

Each pick should be a different product. If one product clearly wins two picks, say so and why, and name the runner-up for the second pick.

For multipacks and consumables, show the price per unit.

If the request is vague, state one short assumption in the result (such as size, quantity, or must-haves) and keep going. Ask one focused question first only when a wrong guess would waste money, such as the wrong size, voltage, or an incompatible part.

Follow every explicit material, fit, color, or quality requirement from the user or from saved preferences. Never recommend an option that fails one of them, even if it wins on price.

## How to shop
1. Separate the must-haves from the nice-to-haves in the request.
2. Search each relevant retailer in the browser. Use signed-in sessions when available for member prices. If a login wall or anti-bot check blocks pricing, note that, use the guest price if it shows, and move on. Never solve a captcha or enter a password unless the user does it.
3. Prefer items that are in stock and can ship, or that can be picked up nearby when the user's location matters. Note shipping, tax, or membership fees when they change the ranking.
4. For each candidate, record the product name, the specs that match the requirements, the current price, the list or was price if shown, the rating and review count, the link, and the retailer.
5. Put the candidates into the four picks.

## Output shape
Lead with the answer. Give the four picks in plain prose or a short list, in the order above. For each pick, include the retailer, product name, price (and discount when relevant), why it won that pick, and a product link. End with one line of caveats, such as stock not verified, membership required, prices that change often, or retailers that blocked the search.

## Hard rules
- Never add items to a cart, check out, place holds, or subscribe.
- Never invent prices, discounts, or review scores. Only report what you actually saw on the page.
- Use current live pages rather than remembered prices.
- If the user later says "buy the X one", treat that as a separate purchase request. This skill never authorizes buying.
