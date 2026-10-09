---
name: money-finder-refund-hunter
description: "Use this when the owner shares a receipt, order, flight, delay, or bag notice, asks if a refund is owed, or wants a purchase watched for a price drop."
---

Per item: verify the current rule, cite it, draft, calendar the due date, log amount, rule, request date, due date.

## Flights (US)
14 CFR part 260 (since October 28, 2024): cancelled or significantly changed, owner didn't travel or accept rebooking, voucher, credit, or other compensation = automatic refund to the original payment in 7 business days (card) or 20 calendar days (other).
- Significant: 3+ hours earlier or later (domestic), 6+ (international); another airport; more connections; lower class; for a disabled passenger, different connections or an aircraft lacking a needed accessibility feature.
- Flying it or accepting a voucher, credit, or rebooking generally ends it. Ask first: "Did you take that flight, rebook, or accept a credit?" A delay email alone isn't a refund.
- Still owed after flying: unprovided paid extras (seat, Wi-Fi), the airline's service plan promises, and the bag fee (automatic) with a Mishandled Baggage Report when the bag was over 12 hours late (domestic), 15 (international, segment 12 hours or less), or 30 (longer segment).
- Checked September 2026: renumbered-only flights without a significant change aren't enforced through July 7, 2027.
- Delay compensation isn't federal law; quote the airline's plan (DOT dashboard). A rule effective October 19, 2026 changes delay-cause reporting (14 CFR 234.4), not refunds.
Draft: "Refund request, [code], flight [number], [date]: [cancelled / changed X hours / moved airports]. I accepted no change, rebooking, voucher, or credit. Under 14 CFR part 260, please refund $[amount] to my original payment. [Bag fee $X, report #, Y hours late.]" Unpaid: DOT complaint (transportation.gov/airconsumer), then card dispute.

## Late orders (FTC Mail, Internet, or Telephone Order Rule)
Ship by the stated time, or 30 days if none, or offer cancellation with a full refund; neither = owner can demand it. Refund within 7 working days (one billing cycle for store credit). Not services, C.O.D., seeds and plants, or magazines after issue one.
Draft: "Order [#] from [date] hasn't shipped [by your date / in 30 days] and I got no cancellation option. Please cancel and refund $[amount] to my original payment."

## Price drops
No legal right; only the retailer's written policy or a card benefit. Quote window and exclusions, then draft; return-and-rebuy is the owner's call. Watch (opt-in): calendar the last price-adjust and return days (money-losing only if they'll act): "Last week to check the price on [item]. If it dropped, here's the request." No scheduled price checks.

## Wrong charges
Credit card: written billing error notice to the issuer within 60 days after the statement showing it (Fair Credit Billing Act). Merchant first, but calendar that window (ask the statement date) as money-losing, plus a follow-up 14 days before recommending the dispute. Debit or transfer: weaker rules, call the bank fast.
Escalate: second request, regulator (DOT; ReportFraud.ftc.gov or state AG), card dispute.

## Wow moment: hand off to money-finder-share-and-suggest
Refund landed: row to `received` with date and amount, update the Recovered total, then run money-finder-share-and-suggest in chat (moment: first-money, unless a milestone was just crossed). Never from a routine.

Sources:
- DOT, Refunds: https://www.transportation.gov/individuals/aviation-consumer-protection/refunds
- Renumbered, July 7, 2027: https://www.federalregister.gov/documents/2026/07/07/2026-13675/airline-refunds-and-other-consumer-protections
- Delay categories, October 19, 2026: https://www.federalregister.gov/documents/2026/09/03/2026-18040/cause-of-airline-delay-and-cancellation-categories-under-section-511b-of-the-faa-reauthorization-act
- FTC Order Rule: https://www.ftc.gov/business-guidance/resources/business-guide-ftcs-mail-internet-or-telephone-order-merchandise-rule
