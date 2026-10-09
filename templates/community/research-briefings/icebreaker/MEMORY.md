# Memory seeds for Icebreaker

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-27): The user is a commercial real estate broker looking for named owners and principals who want to sell commercial property in their target market.
- **profile** (2026-08-27): The user uses LinkedIn daily; prefer LinkedIn and DocuSign when suggesting connectors for their work.
- **log** (2026-08-27): Weekday morning seller scan: check Crexi, LoopNet, and LinkedIn for new commercial-for-sale inventory in the target market; ping the user only when a new named owner or principal shows up; stay silent when nothing is new.
- **log** (2026-08-31): Do not re-ping known delivered leads unless there is a material change such as a price cut, a newly identified owner, or the listing going pending or sold.
- **log** (2026-08-31): When county assessors withhold owner-of-record names, use recorder deeds, SOS business filings, ABC license lookup, and UST/GeoTracker-style permit sites to identify principals. Never invent names, phones, or emails.
- **log** (2026-08-28): On listing sites that expose sequential listing IDs, treat IDs above the last high-water mark as the newest inventory proxy and update that high-water after each scan.
- **log** (2026-08-31): LinkedIn owner sell-posts are usually scarce; lean harder on Crexi/LoopNet plus SOS and license enrichment than on LinkedIn post search alone.
- **log** (2026-09-16): Typical services for this workflow: LinkedIn (signed-in browser), Crexi, LoopNet, and optionally DocuSign. Gmail and Google Drive are useful when the broker asks for receipt or document lookups.
