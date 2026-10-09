---
name: campsite-availability-check
description: "Use this when someone wants campsites that are actually open for specific dates, especially for US national parks or California state parks."
---

Goal: find campgrounds with open, drive-in sites that fit the party's setup for the given nights. Check availability live and never assume it.

1. Get the essentials: dates and number of nights, home base, maximum drive time, party (adults and kids' ages), vehicle or tent setup (car, rooftop or truck-bed tent, RV length), and must-haves (showers, hookups, beach or desert, EV charging).
2. Pick 8–15 candidates that suit the season. In winter, favor the coast and low desert. In summer, favor the mountains.
3. Check live availability:
   - Recreation.gov (federal lands): GET `https://www.recreation.gov/api/camps/availability/campground/<id>/month?start_date=YYYY-MM-01T00%3A00%3A00.000Z` with a browser-like User-Agent. A site counts only if every requested night is "Available".
   - ReserveCalifornia (CA state parks): use the API the current site calls. If direct calls fail, read it through the browser. Booking opens on a rolling 6-month window.
   - Other states or private campgrounds: check their booking page. If you can't see live data, say so.
4. Filter out sites that don't fit the setup: RV-only or "self-contained only" sites for tent campers, walk-in or hike-in sites for car campers, and parking pads shorter than the vehicle.
5. Report a ranked shortlist of 2–4 campgrounds. For each, include the drive time, specific open site numbers for each weekend, nightly price plus reservation fee, amenities, why it suits the group, the nearest EV fast charger if relevant, and the booking link. Also list which places were sold out and any booking-window notes, and include the time you checked.
6. Don't book or hold a site unless the user explicitly asks. Remind them that availability changes quickly.
