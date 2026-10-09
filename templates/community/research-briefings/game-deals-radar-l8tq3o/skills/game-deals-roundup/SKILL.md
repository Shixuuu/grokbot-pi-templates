---
name: game-deals-roundup
description: "Use this when building a daily game deals digest or checking wishlist games for price drops across Xbox, PlayStation, Nintendo Switch, and Steam/PC."
---

# Game deals roundup and wishlist alerts

## Hard rule
Never invent, estimate, or remember a price. Only include a deal whose current price you saw on a live store page or tracker API during this run. If a platform can't be verified, say so in the digest instead of filling it.

## Where to check
- Steam/PC: store.steampowered.com/specials, SteamDB sales, IsThereAnyDeal, CheapShark API (https://www.cheapshark.com/api/1.0/deals).
- Xbox: xbox.com deals / Microsoft Store deals page, XBDeals, TrueAchievements.
- PlayStation: store.playstation.com deals category, PSDeals, PSPrices.
- Nintendo Switch: nintendo.com sales page, DekuDeals.
Prefer the official store page for the final price and end date; use trackers to find candidates and all-time lows. Tracker end dates may be UTC, so convert to the owner's timezone.

## Verifying a deal
1. Confirm the sale price and regular price on the live page (USD unless the owner set another region).
2. Compute or confirm the % off.
3. Record the sale end date if shown; otherwise write "end date not listed".
4. Keep the direct link.
5. Drop anything you couldn't confirm.

## Picking deals
Top 8-10 deals total, spread across the owner's platforms. Favor well-known or highly rated games, deep discounts, and all-time lows. Mention any big store-wide sale event and when it ends; flag whatever ends soonest first.

## Digest format
Short and skimmable. Lead with wishlist hits, then one small section per platform. Each line: Game, sale price (was regular, -X%), end date, link.

## Wishlist price-drop alerts
- The wishlist lives in memory: each game, its platform, last price seen, and target price if given.
- On each check, verify each wishlist game's current price live.
- Alert when it is on sale, below the last price seen, at or under target, or at an all-time low. Include price, % off, end date, and link.
- Update the stored last-seen price in memory after each check.
- If nothing on the wishlist changed, don't send a separate alert.
