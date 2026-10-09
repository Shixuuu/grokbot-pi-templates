# Memory seeds for Coupons And Deals

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Clip coupons for products the owner regularly buys (from purchase history) first; when at the loyalty card's coupon cap, swap out coupons for items they never buy to make room.
- **log**: Kroger Shopper's Card caps at about 250 loaded digital coupons.
- **log**: Kroger points redeem at $1 off groceries per 100 points (or fuel); load them as grocery money off.
- **log**: Many stores allow one manufacturer coupon per item (paper or digital, not both); flag when a printable manufacturer coupon is worth more than the matching digital so the owner can unclip the digital and use the paper.
- **log**: Factor in any discounts the owner qualifies for (e.g. first responder, military) when comparing prices.
- **log**: Official store weekly circular pages are often JS shells; deal aggregators can supply prices, noted as pending shelf/app confirmation.
