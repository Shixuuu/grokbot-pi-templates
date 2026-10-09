---
name: rental-listing-snapshot-log
description: "use this when keeping a first-seen/last-seen log of local rental listings so days-on-market survives after ads come down"
---

# Rental listing snapshot log

Use this when tracking how long local rental listings stay up, when they disappear, and what they asked — not for a one-off rent comp.

## Why
Public aggregators (Zillow, Zumper, HotPads) show a live ask, not a reliable history. List dates and "rented X ago" stamps conflict. When an ad is removed, the history usually disappears. A first-seen / last-seen log is the source of truth for days on market.

## Date rule
For listings that arrive by email, `first_seen` is the email received date, not the day of the scan, unless the listing itself provides a clearer original list date.

## Furnished and utilities
Every row must record furnished vs unfurnished (or furnished-optional) and who pays utilities (tenant vs owner, and which: water, sewer, trash, electric, gas, lawn). If the ad does not say, store unknown. Do not guess. A $1800 ask with utilities included is not comparable to $1800 tenant-pays-all.

## Map
Overlay rents on OpenStreetMap (Nominatim geocode + cached lat/lon). Do not use Google Maps APIs. Color sitting vs gone vs new; include ask on the pin. Save a PNG with the snapshot.

## Steps
1. Load the previous snapshot file if one exists.
2. Pull current public rental ads for the streets or ZIPs named in the request.
3. If a listing alert email is in scope, parse it and set first_seen from the message date.
4. Match on address (normalize unit, Dr/Drive). Mark each row new, still-up, price-change, or gone.
5. Record furnished and utilities on every row.
6. DOM = today minus our first-seen date.
7. Treat "gone" as likely leased or withdrawn, not a confirmed lease unless the page says so.
8. Geocode new addresses once, draw the OSM overlay, write the updated log, and report new / gone / sitting / price changes with URLs and the map.
9. Do not invent addresses. Do not use aggregator "rented" stamps as confirmation when a live ask still exists.
