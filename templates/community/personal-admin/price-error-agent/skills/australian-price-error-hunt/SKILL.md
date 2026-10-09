---
name: australian-price-error-hunt
description: "use this when hunting Australian retailer price errors, running the PE monitor, or judging whether a cheap listing is a real misprice worth buying"
---

# Australian price-error hunt

Use this when watching Australian retailers for accidental misprices, building or running a PE monitor, or deciding whether a cheap listing is a real error worth buying.

## Ping filter
Only ping on a real chunk of money: electronics, computing, tools, travel, TVs, phones, appliances, big-ticket. Skip grocery, toiletries, coupons, cashback, ATL, referral codes, and cheap household junk even if tagged PE.

## What a PE is
A listing obviously too cheap versus normal or ATL: dropped digit, GST left off, placeholder ($1 / $0 / $0.01), bundle price on a single, sale that failed to revert, currency mixup, direct-import price on an AU SKU. Community tags it `[Price Error]` / PE. Outcome is honoured (ships), cancelled (refund), or cancel plus store credit.

## Radar vs custom
OzBargain RSS is the cheap AU radar. Custom sources: Secret Flying public listing, Beat That Flight homepage (dated AU deals), and a product URL watchlist the user names. Hit types (PE, near-PE, fat outlet/refurb, fare, price-beat, electronics stack) are classifier labels, not OzBargain-only. Do not scrape whole retailer catalogues.

## Flights
Ping cheap AU-origin fares that save money, not only tagged ERROR FARE.
- First: Gold Coast (OOL) and Brisbane (BNE) international, any cabin; error/glitch fares on Qantas/Jetstar/Virgin/Webjet.
- Then: fat long-haul or cheap business from SYD/MEL (Europe, US, Japan).
- Skip: $34 nationwide Jetstar/Qantas domestic spam, NZ-domestic, US-origin, $30 hotels.

## Feeds
- https://www.ozbargain.com.au/deals/feed (fallback /feed)
- https://www.secretflying.com/feed
- https://www.beatthatflight.com.au/ (homepage listing; no RSS)
Catch.com.au shut 30 Apr 2025. Do not watch it.

## Sites (2026)
Tier A: Kogan (and marketplace), Amazon AU, eBay AU, The Good Guys, JB Hi-Fi.
Tier B: Bunnings, Bing Lee, Harvey Norman, Officeworks (more often used to price-beat), Qantas/Jetstar/Virgin/Webjet.
Grocery specials (Coles/Woolies Wed 00:01) are scheduled deals, not PEs.

## When
No single PE o'clock. Midnight promo jobs, flash-sale end, launches with $0/$1, site migrations, GST omitted, dropped digits. TGG Toshiba 85" $499 posted 13:14 AEST 21 May 2026. Qantas first-class glitch ran the early hours of 23 Aug 2024.

## How to act
1. Confirm the live product/booking page, not just the post.
2. Check stock, variant, C&C vs delivery. C&C is the honour path more often than delivery.
3. Ping the user with site, product/route, listed vs typical, URLs, stock, C&C. Do not checkout unless the user said buy.
4. Card that can refund, never gift cards on a PE.
5. Expect cancel on obvious errors. TGG often adds $30–$90 credit.

## Allowed monitoring
Polite RSS/public HTML polls. Official APIs (eBay Browse, Amazon PA-API if Associates). CamelCamelCamel AU for Amazon history. Secret Flying and Beat That Flight for AU fares.
Do not scrape OzBargain HTML, bypass WAF/CAPTCHA, hammer Woolworths/Coles internal search, or use seller APIs as a consumer feed.

## Legal
A displayed price is usually an invitation to treat. ACL s 47 does not force honour of a single isolated wrong price. Retailers routinely cancel obvious PEs under T&Cs.

## After a hit
Log site, SKU, listed vs expected, time (Australia/Brisbane), still-live, C&C, honour/cancel/credit.
