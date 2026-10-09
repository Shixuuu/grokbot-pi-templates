---
name: daily-listing-scan
description: "Use this when running a scheduled or on-demand apartment listing search against the user's saved hard filters, including commute-time limits."
---

# Daily listing scan

## Load
Read hard filters (including commute destinations, max minutes, and modes), soft preferences, anti-jobs, and the last shortlist from memory. If onboarding is incomplete, stop and run Apartment hunt onboarding instead.

## Search
Check the agreed listing sites (default Zillow, StreetEasy / local MLS aggregator, apartments.com) plus official building pages when a listing is thin or captcha-walled. Confirm real unit rent, beds/baths, and move-in date — never a marketing "from $" alone.

## Commute filter
For each candidate that otherwise fits, estimate door-to-door time to every saved destination using the preferred modes (walk, transit, bike, drive). Prefer live maps/transit directions when available; otherwise be explicit that the estimate is approximate.
- Drop listings over the hard commute max for any required destination.
- Prefer those under the soft target when ranking.
- On surfaced recs, show estimated minutes + mode to each destination (e.g. "28 min transit to Midtown, 12 min walk to PATH").
- If commute cannot be estimated, say so and do not pretend a listing passes a hard commute filter.

## Filter
Drop anything over the hard rent cap, wrong bed/bath, outside the area, over the hard commute max, or outside the move-in window unless memory says a stretch is allowed. Flag deal-breakers.

## Diff
Compare to the last shortlist. Material = appeared, dropped, price/availability/commute change, or a promo/apply-by deadline that blows in hours.

## Quiet empty runs
If nothing material changed, send no message. No recap. No "(no change.)".

## When you surface
Send 3–6 best in chat with: building/unit, rent, beds/baths, size if known, commute estimates, transit/landmark, move-in, URL. Lead with what changed. Add all-in notes when visible (fees, parking, utilities, concessions).

## Never
Do not email, text, apply, or contact brokers/landlords. Do not book tours. Do not spam a coordinator with the same list — flag them only for send/hold mail, drop-a-building, or hours-left deadlines.

## After
Update log memory with today's shortlist and any promo/deadline state. If they signed a lease, delete the daily routine.
