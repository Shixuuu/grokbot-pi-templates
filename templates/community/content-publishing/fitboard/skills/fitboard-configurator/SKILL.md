---
name: fitboard-configurator
description: "use this when someone wants to furnish a home or room: run the Fitboard tap-through flow (property, budget, rooms, style, country), live read-only product search with real product-page prices, then deliver a one-page summary PDF and a full product table"
---

# Fitboard configurator

Fitboard turns five taps into a real, priced furniture shortlist. It is read-only and never buys anything.

## 0. Currency (before question 1, not a question)
- Detect the region from the best real signal you have: a country the customer states, then their locale, then their timezone (your box clock zone counts). You cannot see IP addresses in chat, so never claim to.
- Map region to display currency: MY MYR "RM", US USD "$", SG SGD "S$", GB GBP "£", eurozone EUR "€", ID IDR "Rp", AU AUD "A$", JP JPY "¥", IN INR "₹", TH THB "฿", PH PHP "₱", CA CAD "C$". If detection fails, use USD and say so.
- Open with one line, e.g. "Showing prices in RM (Malaysia)." After that, use ONLY that symbol.
- Every question widget ends with the option "Change currency". It opens a widget with USD, MYR, EUR, SGD, GBP, AUD, IDR, JPY, CAD and a custom choice. Switch to the new currency, then return to the same question.
- Rates: fetch that day's real rates from https://open.er-api.com/v6/latest/USD, with https://api.frankfurter.dev/v1/latest?base=USD as fallback, and cache them for the day in fitboard/rates-YYYY-MM-DD.json with the source and time. Never guess or hardcode a rate. If both sources fail, show store prices only and say why.
- Converted price format: ≈ $211.01 (RM860.00), with the store's original price in brackets. When the display and store currencies are the same, show just RM860.00.

## 1 to 5. Questions
Ask ONE per message, as a tappable widget (allowCustom for Other), in this order:
1. Property type: House / Apartment / Studio / Other.
2. Budget, asked early: base bands in MYR are under 3,000 / 3,000 to 7,000 / 7,000 to 15,000 / 15,000+ / No limit / custom amount. Convert them to the display currency and round to clean figures.
3. Rooms (multi-select): Bedroom (1, 2, 3, 4+), Bathroom, Living room, Kitchen, Dining area, Study, Balcony, Other. A single room is fine and makes the search faster.
4. Style: Minimalist / Simple / Luxury / Modern / Scandinavian / Industrial / Other. Optionally ask for a colour palette as a follow-up.
5. Country and store: pre-select the detected country. Malaysia uses Shopee (shopee.com.my) by default, then Lazada. Singapore uses Shopee SG. Indonesia uses Shopee ID or Tokopedia. The US uses Amazon (amazon.com). For anything else, ask which store.

## Feasibility
Split the budget across the chosen rooms' core items: bedroom is mattress + bed frame + storage; living room is sofa (+ coffee table); dining is table + chairs; kitchen/utility is storage; study is desk + chair. Show the math before searching. If the budget can't fit, say so and propose what to cut.

## Live search (read-only)
- Search the chosen store in your browser. For every candidate, OPEN THE PRODUCT PAGE. Record the exact variant (size, colour, set), the real price after automatic discounts, and any fees shown on the page. Listing-card prices are often wrong, so record the card price too and flag any gap.
- Exclude shipping unless the customer asks for it.
- Score each candidate from 0 to 10: palette/style fit 4, style match 3, value 2, listing quality and ratings 1. Reject anything under 6. For No limit budgets, weight quality and ratings over price.
- Post each item in chat AS YOU VERIFY IT: photo (a screenshot crop of the product image), name, variant, real price in the display currency, and link. The customer should watch the shortlist build.
- If a captcha, slider or login wall appears: ask the customer once to clear it. If it appears again, stop cleanly and post what's verified so far, what's unchecked, and an offer to try the fallback store. Never bypass it, never use fake user agents or scraping scripts, and never invent products, prices, links or photos.

## Outputs (deliver both)
1. Shortlist table in chat, plus saved as fitboard/runs/<date>-<name>.md (and .csv): room, item, variant, material, colour, real price (display currency with the store price in brackets), card price and flag, score, link. One best pick per item plus a runner-up. Then show the total against the budget, and if it's over, exactly what to drop or swap.
2. One-page summary PDF, phone-shaped portrait (about 9:16) and under 2 MB so it forwards on WhatsApp. Build it as HTML and print it with headless Chrome/Chromium (--headless --print-to-pdf), with images embedded as base64 and resized. It contains: a header with "Fitboard" and the date; the choices as chips (property, budget converted with the original in brackets, rooms, style, country/store); one card per item with the photo, name, room, converted price with the original in brackets, and a one-line "why this fits"; repeated items grouped (e.g. "x4 bedrooms"), switching to 2 columns if needed so it stays one page; the total against budget with a headroom bar; a footer: "Prices read from product pages on <date>, shipping excluded. Converted prices are approximate, using <source> rate of <date>." Render the PDF to PNG, check it's one page with no overflow and all photos present, then attach it.

## Test personas (when the owner says "test as X")
Young couple, first apartment. Family upgrading. Condo renovation. Rental flipper on a tight budget. Luxury homeowner who doesn't care about price. Walk each one through the same flow and state the persona's answers as you go.

## Never
Buy, add to cart, message sellers, or enter payment details without the owner's explicit approval of an exact list.
