---
name: vehicle-value-tracking
description: "Use this when the owner wants cars, trucks, motorcycles, boats, or RVs tracked in their possessions/net-worth tracker with a monthly-updated market value, loan equity, and title/estate details, while keeping the VIN and plate private."
---

# Vehicle value tracking

## Privacy (always)
- The VIN, license plate, and garaging address are private. Keep them only in the owner's secret store or a separate private file, and never in a skill, template, shared sheet, listing, log, post, or email. Everywhere else, use an ID and nickname (for example "V1 / Daily driver"). Showing the last 4 characters of the VIN is optional.
- Send the full VIN only to the one valuation API the owner approved. When decoding with NHTSA's free VIN decoder, replace characters 12–17 with `*`. Never share the plate with any service.

## Sources, in order
1. **Decode (free).** NHTSA vPIC: `GET https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/<partial VIN>?format=json&modelyear=<year>` returns year, make, model, trim, and body type. No key is needed.
2. **Market price API (primary).** MarketCheck price prediction, which takes the VIN, mileage, and ZIP. The free plan includes 500 calls a month, and the base price is listed at about $0.07 per call. Before enabling it, check in the dashboard whether per-call fees apply on the free plan. The owner signs up, and you save the key through a secure secret request. Cap usage at 5 or fewer calls a month.
3. **Manual only.** The owner looks up Kelley Blue Book, Edmunds, or J.D. Power values, or instant offers from Carvana, CarMax, or CarGurus, and types the number in. Never scrape or automate these sites, and never submit instant-offer forms, since those trigger dealer calls and texts. Suggest offers only when the owner is thinking about selling.
4. **Depreciation fallback.** About −20% in year one for a new car, then about −15% a year (roughly 40% of the purchase price left at 5 years). Label the result "curve estimate", and replace it whenever a real quote or sale comes in.
5. **Not available to individuals.** The Kelley Blue Book, J.D. Power, and Black Book APIs are licensed to dealers, lenders, and insurers, and Edmunds closed its open API.

## Setup (per vehicle)
Collect:
- Nickname
- VIN and plate (stored privately)
- Year, make, model, and trim (decode from the VIN)
- Purchase date and price, and whether it was new or used
- Odometer reading and date, and estimated miles per year
- ZIP
- Loan or lease balance and lender
- How the title is held, the lienholder, where the title is kept, and any transfer-on-death beneficiary, if the state allows one

Confirm the trim, run the first valuation, and write the Vehicles row and the first History row.

## Monthly refresh
Estimate mileage between readings with `last odometer + miles per year × days / 365`, marked "est.", and ask for a real odometer reading about once a quarter. Make one price call per vehicle, or use the depreciation curve if the call fails. Update the loan balance, using the Finance connector if it's linked. Recalculate equity and gain, and append a History row. Send a short summary by nickname, and flag the vehicle if a real quote differs from the model value by more than 20%.

## Vehicles tab
- Equity = Estimate − Loan balance. This can be negative.
- Gain/Loss = Estimate − Purchase price.
- Mark a value STALE when it's more than 45 days old.
- For net worth, count either the gross value with the loan under liabilities, or the equity alone, never both. Leased vehicles are listed but not counted as owned.
- For the estate, value × percent owned, and note the transfer path: transfer-on-death title, joint "or" title, or sole name through the will or probate, whose rules vary by state. Record where the title is kept.
- Always show "as of <date> via <source>, <mileage> mi".
