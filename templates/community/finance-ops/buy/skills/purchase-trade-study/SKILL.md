---
name: purchase-trade-study
description: "Use this for single-item or multi-option purchase trade studies — pick winner, hunt deals, check links for scams, optionally pay/cart/reserve when asked, deliver Sheets/Docs/Notion with a concise chat chart plus full page."
---

# Purchase Trade Study

Use this when comparing things to buy. The goal: **pick the right product, then get it at the best real price from any seller** — new, refurbished, or used.

Applies to **one product** (best place/condition to buy it) or **multiple options** that solve the same need (pick the winner, then the best deal on that winner).

---

## 0. Study mode

Decide which mode fits, then say it in the intake reply:

| Mode | When | Goal |
| --- | --- | --- |
| **Single item** | User already named the product (e.g. DJI Mini 5 Pro Fly More) | Best listing + price context for that SKU only |
| **Multi-option** | Category decision or several named alternatives that behave similarly | Find the **best overall** from reviews, research, and public sentiment, then the best deal on that pick (also surface cheapest / best-rated alternatives when useful) |

For multi-option:
- Rank by fit to must-haves first, then **reviews + expert research + public sentiment** (forums, Reddit, recent sold demand) — say which signal drove the pick.
- Call out **best rated**, **cheapest acceptable**, and **best overall** when they differ.
- Drop options that fail must-haves into "Not recommended" with one line why.

---

## 1. Intake (ask before researching)

Confirm these in one short message. Skip any the user already answered.

| Question | Example |
| --- | --- |
| What are we deciding? | "Mirrorless camera under $1,500" |
| Single SKU or find/compare options? | Named product vs "find them" |
| Options already in mind? | Sony A7 IV, Canon R6 II, or "find them" |
| Must-haves | Full-frame, IBIS, dual card slots |
| Nice-to-haves | Weather sealing, USB-C charging |
| Budget (hard cap / target) | Target $1,200, cap $1,500 |
| Condition OK? | New / open-box / refurbished / used |
| Location for local pickup | ZIP or city (for Marketplace, Craigslist, OfferUp) |
| Deadline | "Need it by Nov 10" or "no rush — wait for a deal" |
| Deliverable | Sheets / Docs / Notion / chat only |

If deliverable is unspecified, use the saved default. If none is saved, ask once.

---

## 2. Research the products

- Use primary sources first: manufacturer pages, official docs, spec sheets, GitHub.
- Use reviews for real-world performance, and note who the reviewer is.
- For multi-option, also sample **public sentiment** (recent forum/Reddit threads, return complaints, common failure modes) and say how much weight it got.
- Mark open source vs proprietary when it matters.
- **Never invent** specs, prices, quotes, price history, or citations. If unknown, write "not found".

---

## 3. Hunt for deals (required for anything buyable)

Check every channel below that fits the category. Record what you found **and** what you checked but came up empty.

### Where to look

| Channel | Examples |
| --- | --- |
| Official / manufacturer | Brand store, manufacturer refurbished store, education/military discounts |
| Major retailers | Amazon, Best Buy, Walmart, Target, Costco, B&H, Newegg, Home Depot |
| Category specialists | Authorized dealers for the category (camera shops, bike shops, etc.) |
| Open-box / refurbished | Best Buy Open-Box, Amazon Renewed / Warehouse, Back Market, brand certified refurb |
| Used marketplaces | eBay (check **sold** listings for real prices), Facebook Marketplace, Craigslist, OfferUp, Mercari, Swappa, category forums (e.g. r/hardwareswap, FredMiranda) |
| Deal sites | Slickdeals, camelcamelcamel, Keepa, Honey/PayPal price history, RetailMeNot, Reddit deal subs |
| Stackable savings | Coupon codes, manufacturer rebates, cashback portals (Rakuten, TopCashback), credit-card offers, gift-card discounts, trade-in credit, price-match policies |

### What to record for each listing

- Seller and channel
- **Direct listing URL** (clickable) — only after the link safety check below
- Price + currency + date checked
- Condition (new / open-box / refurb / used + grade)
- Shipping cost, tax estimate, or pickup distance
- Warranty / return window
- Authorized dealer? (matters for warranty in some categories)
- Stock or availability notes

### Price context

- **Lowest price seen over 7, 30, and 90 days** — from trackers or archived listings only.
- **Is today's price a real dip or normal street price?**
- **Used market value** — median of recent eBay sold listings, not asking prices.
- **Upcoming deals** — holiday sales, Prime Day, Black Friday, known promo calendars, refurb restocks, rebate windows. Only cite what's verifiable; otherwise say "none found".

### Safety checks for used / private sellers

- Flag prices far below market (possible scam).
- Note seller rating and history.
- Prefer protected payment (eBay Money Back Guarantee, PayPal Goods & Services); avoid wire, Zelle, or gift-card payment to strangers.
- For local pickup: meet in public, test before paying, verify serial number isn't reported stolen when possible.

### Link safety check (required before any buy URL reaches the user)

Run this on **every** listing or "deal" URL before putting it in chat, Sheets, Docs, or Notion. Never paste a raw unchecked link.

1. Resolve redirects; prefer the final HTTPS URL.
2. Confirm the domain is the real retailer/marketplace (or their known short-link that lands there) — watch lookalikes (`amaz0n`, extra hyphens, wrong TLD).
3. Prefer official product pages or logged-in marketplace listing pages over random shorteners, outbound affiliate cloaks you can't unwrap, or "DM for link" pages.
4. Open or fetch the page enough to verify title/SKU roughly matches the claimed product and price.
5. Flag and **do not recommend** (or quarantine with a warning, no clickable primary CTA): typo-squats, unexpected login/wallet prompts, crypto/wire payment only, mismatched brand assets, or prices absurdly below market with no protected checkout.
6. In the report, mark each link **checked** (pass / warn + reason). Default to not sharing fail links; if the user needs to see a bad one for context, label it clearly as unsafe and don't make it the recommended buy.

---

## 4. Report structure

Trim to what the user asked for.

1. **Recommendation** — one pick, why (including review/sentiment signals when multi-option), and **buy now vs. wait** (with the price to wait for).
2. **Best deal right now** — the single best listing with checked link, total landed cost, and condition.
3. **Comparison matrix** — options × criteria (skip or shrink for true single-item mode).
4. **Where to buy** — all listings from section 3, sorted by total cost (checked links only).
5. **Price history** — 7 / 30 / 90-day lows + upcoming sales.
6. **Savings stack** — coupons, cashback, rebates, and card offers that apply, with the final effective price.
7. **Option cards** — pros / cons / cost / best for (include best-rated vs cheapest vs best-overall when they differ).
8. **Total cost to get started** — accessories, subscriptions, or extras still needed.
9. **Not recommended** — one line each on why (products and/or shady listings).
10. **Sources** — every claim linked; buy URLs marked link-checked.

---

## 5. Deliver

| Format | What goes there |
| --- | --- |
| **Sheets** (preferred for data) | Comparison matrix, where-to-buy table, price-history chart |
| **Docs** | Narrative write-up with tables and source links |
| **Notion** | Child page under the user's trade-studies page, if one is set |

### Dual delivery (default when a long-form page is used)

Always give the user **both**:

1. **In chat — summarized chart and data** so they can scan picks, prices, stock, and buy-now/wait without leaving the conversation.
2. **On the long-form page** (Notion / Docs / Sheets as chosen) — the full write-up for detail.

Chat summary must include:
- One-line study framing (what / budget / date)
- Link to the full page
- **Quick picks** table: best overall / best-rated / cheapest (and over-budget notables when relevant) with price and one-line why
- **Where to buy (live)** compact table: product, shop, price, stock — checked links only
- Buy now vs wait + landed-cost note when shipping/duties matter
- Price history / upcoming deals one-liner (or "not found")

Also end with the short CTA line:

> **Pick:** _product_ — **Best deal:** _$price at seller (condition)_ — **Buy now or wait:** _answer + target price_ — **Link:** _sheet/doc/notion_

If deliverable is chat-only, put the full report in chat and skip the page. If the user asks for page-only, still send the chat chart unless they explicitly say not to.

---

## 6. Checkout help (only if the user asks)

Default is research + recommend. When the user explicitly wants help completing a purchase path, you may:

| Ask | What you do |
| --- | --- |
| **Pay / buy now** | Follow the purchases skill: exact total at one merchant, link-checked listing, user approves payment (e.g. virtual card). Never spend without their approval. |
| **Scheduled / later payment** | If the merchant supports layaway, pre-order deposit, or scheduled charge, set that up only after they confirm the plan, amount, and date. |
| **Add to cart / reserve for later** | Add the checked listing to cart, wishlist, or hold/reserve when the site allows — confirm the exact SKU and seller first. Do not complete payment unless they also asked to pay. |

Rules for checkout help:
- Only after a link safety check passes on that listing.
- Confirm merchant, item, price, and action in one short message before mutating a cart or raising payment.
- One merchant / one purchase intent at a time unless they clearly ask for more.
- Never bid, make offers, or message private sellers unless they explicitly ask for that too.

---

## Ground rules

- Cite sources. Date-stamp every price.
- Say "not found" instead of guessing.
- **Never share a buy URL that failed the link safety check** as a recommended purchase.
- **Do not buy, bid, make offers, message sellers, pay, schedule payment, or change a cart** unless the user explicitly asks for that action.
