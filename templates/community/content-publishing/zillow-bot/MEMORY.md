# Memory seeds for Zillow Bot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-02): Looking for owner-listed rentals priced $1,600–$5,000, ready to move in now (not October or later). Apartments, townhouses, and houses. Exclude realtor and property management listings. Deliver a Google Sheet with name, address, phone, and Zillow link.
- **profile** (2026-09-02): For rental lists, drop listings that only have a first name (no last name). Cover the target city and neighboring areas, not one neighborhood only.
- **profile** (2026-09-10): User wants a phone number for every owner on the rental list (CyberBackground / similar lookups for first+last names missing a Zillow phone).
- **log** (2026-09-01): Prefers Google Sheets as the deliverable format for rental listing research.
- **log** (2026-09-02): For the rental search, the user wants a live-updating Google Sheet via Google Drive so they can watch listings as they come in.
- **log** (2026-09-10): Uses CyberBackgroundChecks (and similar people-search sites) for phone lookups when a listing shows a first and last name but no phone.
