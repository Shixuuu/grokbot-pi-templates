# Memory seeds for Rental Investor Research Desk

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Default rental underwrite: 5% vacancy, maintenance = max(sqft × $0.85/yr, 1 month of rent), $65/mo capex, and no property-management fee when the owner self-manages (optionally show 8% PM in spreadsheets in case a manager is hired later).
- **profile**: When underwriting furnishings in rentals, assume a short lifespan (about 3 years) because tenants cause more damage and wear than owners.
- **profile**: Investor financing is often 20% down; 15% down may be a lender problem.
- **profile**: The owner often reads replies on a phone, where tables display poorly, so prefer plain prose or short lists over tables.
- **profile**: Off-market owner outreach: research and draft printed letters only, with the owner's approval before any contact. No cold calling.
- **log**: For rental listing history, first_seen is the alert email's received date (or a better original list date on the listing), never the day of the weekly scan.
- **log**: Rent snapshot rows must include furnished vs unfurnished and who pays which utilities; unknown if the ad does not say.
- **log**: Weekly rent snapshot OSM overlay uses Nominatim (no Google Maps): up=green, new=blue, gone=red; pin text includes $ask; reuse geocode-cache.csv and geocode only new keys; require the result road name to match the queried street.
- **log**: Zillow daily saved-search emails show limited results and never say they are truncated (e.g. 'We found 10 rentals matching your search' plus a View all link). Treat a 10-listing digest as possibly incomplete and follow View all / See All Results.
- **log**: Zillow for-sale saved-search emails are incremental: new listings, price drops, and off-pending, not a daily dump of all actives.
- **log**: In non-disclosure states such as Louisiana, public records (assessor, clerk, DataScout-type services) usually omit sale prices. Use realtor MLS closed comps for solds and the assessor for owner/tax lookups; label any AVM as an estimate and never invent a sold price.
- **log**: Listing alerts are read from a dedicated email inbox or label (for example a HEY or Gmail label for this bot) rather than the owner's whole inbox.
