---
name: price-ladder
description: "Use this when an owner gives stock symbols, share counts, and costs and wants a layer-in layer-out ladder, or when a locked price is touched."
---

# Price ladder

Advisory only. The owner places every order. Never log into a brokerage, and never send a trade.

This is a layer-in, layer-out method. The point is to keep a bag of shares and, when a round trip fills, end with more shares than you started.

Use only numbers this owner gave, or free public daily prices, or a Finance link this owner connected themselves. That link starts empty. Do not invent a cost, a share count, or a price. Do not use anyone else's book or accounts.

## What the owner provides

For each symbol: total shares, how many of those have a known cost, and that cost per share. Shares with no known cost stay in the bag and are never sold.

Each symbol is a core or a range name.

- Core: shares sold across all steps may not exceed one third of the total count.
- Range: the owner names how many shares must remain. That bag is at least one share, and the position never goes to zero. A range name may sell more than a third.

## Layer out

Sellable shares are the known-cost shares, capped by the rule above. For a core, the cap is one third of the total count. For a range name, the cap is total shares minus the bag.

Split the sellable amount into three rising slices with weights 1, 2, and 3. The first slice is one sixth of the sellable amount, the second is two sixths, and the third is whatever is left so the three add up exactly. Round to three decimal places, and put the rounding remainder on the largest slice.

Layer out means those slices sell into higher prices. The smallest slice is the first sell. The largest is the top. No sell at or below the known cost.

## Layer in

Each sell slice is paired with the buy slice of the same size, on that same symbol only. Cash from a slice waits for its pair. It is not spent on a different symbol, and it is not saved for a larger slice.

The smallest buy is the first dip. The largest buy is the deepest. Space the buy prices so each gap is wider than the one above it. Do not space them evenly. The largest buy should be waiting for a real drop, not the next small one.

A filled pair replaces the shares that slice sold. Because the buy is cheaper, the same cash can buy those shares back and leave extra shares. Those extra shares join the bag. That is how the holding grows. A small pair can do this even if the larger sells never fill. If price never comes back, the owner holds that slice's cash. Do not promise a fill.

If the owner also set a ceiling, no buy above it.

## After a round trip

When a pair fills, show the new share count before anything else happens. Say the count before, the count after, and the extra shares.

Do not start the ladder over on your own. Ask the owner. If they say yes, rebuild the slices from the new count, still capped by the same one-third or bag rule, and keep the prices they already locked unless they ask to change them.

## Show the work on a chart

At any time, if the owner asks to see the work, draw a chart. Use free public daily prices for that symbol. Mark the last price, the known cost, each sell, and each paired buy, and label every mark with its share slice. Say in one line what the share count would be if the next open pair filled. Do not invent a price to fill a gap in the picture.

## Prices

If the owner types the prices, those are the ladder. Do not change them.

If they ask for a proposal, use free public daily bars only. For each symbol, take a recent average true range from those bars. Propose three sell prices above the known cost, about one average true range apart. Propose three buy prices below the last trade, with each gap wider than the gap above it. Show the proposal, including the share count if each pair fills, and the chart. Lock only the prices they accept. After a lock, do not rebuild or recompute the model unless they ask.

## A hit

Watch only the locked prices, and only during the hours they asked for. If a price is touched, report the symbol, the price, the share slice already set, and what the share count would be if that slice fills. Offer the chart. Do not invent a new price.

Worked example only, not a holding: 60 shares, all with a known cost of $10, marked core. Sellable is 20. Slices are 3.333, then 6.667, then 10.000. The other 40 never sell.
