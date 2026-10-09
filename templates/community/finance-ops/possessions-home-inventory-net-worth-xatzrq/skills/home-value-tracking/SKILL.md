---
name: home-value-tracking
description: "Use this when the owner wants their home or other real estate tracked in their possessions/net-worth tracker with a monthly-updated market value, equity, and estate transfer details, while keeping the address private."
---

# Home value tracking

## Privacy (always)
- The address and parcel number are private. Keep them only in the owner's secret store or a separate private file. They never go in a skill, template, shared sheet, listing, log, post, or email. Everywhere else, use an ID and nickname (for example "H1 / Primary residence"). The ZIP code is fine to keep.
- Send the full address only to the one valuation API the owner approved. Never put it in web searches or error reports.

## Sources, in order
1. **Valuation API, primary.** RentCast `GET https://api.rentcast.io/v1/avm/value?address=...` with header `X-Api-Key`. It returns a price with low and high values (an 85% confidence range) and comps. The free Developer plan includes 50 requests a month and charges $0.20 per request after that. Cap usage at 5 or fewer calls a month. The owner signs up, and you save the key through a secure secret request.
2. **Index cross-check and fallback.** Take a baseline value (purchase price or appraisal) and index it forward with the free Zillow Home Value Index ZIP files (zillow.com/research/data, monthly, pick the tier that matches the home) or the FHFA House Price Index (quarterly by metro, annual by ZIP). The formula is `baseline × index[latest] / index[baseline month]`.
3. **Manual only.** The owner looks up their Zillow Zestimate, Realtor.com estimate, or Redfin estimate and types it in. Never scrape these sites or drive a browser to them, because their terms prohibit automated access. Zillow's Bridge API also forbids storing its data.
4. **County assessor.** Use for context only; it's often below market value.
5. **Professional appraisal.** When the owner gets one, it resets the baseline.

## Setup (per property)
Collect the nickname, the address (stored privately), ZIP, property type, beds/baths/square feet (optional), purchase date and price, capital improvements, latest appraisal, mortgage or HELOC balance and lender, how title is held, percent owned, and the estate transfer path (will, trust, transfer-on-death deed, or joint with survivorship). Set the baseline, record the baseline index value, run the first valuation, and write the Real Estate row and the first History row.

## Monthly refresh (after about the 16th, when the Zillow index posts)
Make one valuation call per property, retrying at most once. Refresh the index estimate. Use the API value as the current estimate, or the index value if the API has none. If they differ by more than 15%, flag the property for review. Update the mortgage balance, using the Finance connector if it's linked. Recalculate equity and gain, and append a History row without overwriting earlier ones. Send a short summary by nickname: value, change, source, and any flags. Once a quarter, remind the owner they can type in a Zillow or Realtor.com estimate.

## Real Estate tab
- Equity = Estimate − Mortgage.
- Gain = Estimate − (Purchase + Improvements), shown in dollars and percent, plus an annualized figure.
- Mark a value STALE when it's more than 45 days old.
- For net worth, count either the gross value with the mortgage under liabilities, or the equity alone, never both.
- For the estate, value × percent owned, tagged probate or non-probate by transfer path.
- Always show "as of <date> via <source>". An estimate is not an appraisal, and in practice "real time" means monthly.
