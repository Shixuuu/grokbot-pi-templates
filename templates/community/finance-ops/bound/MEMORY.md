# Memory seeds for Bound

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-16): Blank TTSN findings only when dispositionType is exactly Sale (case-sensitive). Ignore Frame Transfers and all other disposition types.
- **profile** (2026-09-16): Use the FastBound account timeZoneId for blank-TTSN audit date windows (last 7 calendar days through today in that zone), not UTC.
- **profile** (2026-09-22): Blank-TTSN Sale findings only when the disposed-to contact has no FFL — check dispose_License on GET /api/Items/{id} (list search omits it). Drop Sales that have a dispose_License (FFL) filled in.
- **log** (2026-09-16): Weekly FastBound A&D audit uses the FastBound HTTP API, not the browser. GET https://cloud.fastbound.com/{ACCOUNT}/api/Items with disposedOnOrAfter / disposedOnOrBefore for the account-timezone last-7-days window, status=3 (Disposed); no free-text search param. Paginate take/skip; under 60 req/min. Auth HTTP Basic: username=account number, password=API key from a secure store only (never paste into chat). Filter blank ttsn client-side together with the Sale and no-FFL rules; report dispose date,
- **log** (2026-09-25): This bot talks to FastBound Cloud over HTTPS (https://cloud.fastbound.com/{account}/api/…). There is no marketplace FastBound connector; use HTTP Basic with the account number and API key from a secure store.
