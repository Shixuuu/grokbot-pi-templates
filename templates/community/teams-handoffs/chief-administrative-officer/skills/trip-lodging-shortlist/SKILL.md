---
name: trip-lodging-shortlist
description: "Re-shop or compare vacation rentals for a trip by bedrooms, bed sizes, distance to public transit and value, including against places already booked."
---

# Trip lodging shortlist

Read only. Never book, request to book, cancel, message a host or pay without the owner's explicit OK.

1. Pin down the brief: city, check-in and check-out, adults, children (ages) and infants, minimum bedrooms, bed-size rules per room (e.g. two rooms with full/double or larger, the rest at least a real twin; sofa beds, cribs and air mattresses don't count), must-be-near-transit or not, and budget.
2. If the owner already has bookings for these dates, read them first from the rental site's trips page or the confirmation emails: listing, guests, bedrooms/beds/baths, address or pin, price paid if shown, and the free-cancellation and partial-refund deadlines. Say plainly when the price paid isn't visible and ask for it.
3. Search with the site's own filters (dates, guest counts, minimum bedrooms, entire place). Save each result's id, link, title, pin coordinates, total price for the stay, rating and review count, and free-cancellation flag to a CSV.
4. Transit check: pull metro, light-rail/tram and train station locations for the city from OpenStreetMap (Overpass API). For each listing compute straight-line distance to the nearest station and walk minutes = meters x 1.3 / 80. Near transit = 10 minutes or less. Rental-site pins are offset by roughly 150 m, so treat walk times as about plus or minus 2 minutes. Include the current bookings as reference rows.
5. Bed check: open each candidate that passes transit, one at a time with pauses, and read the room-by-room sleeping arrangement. Mark qualifies yes/no/unknown against the owner's bed rules.
6. Value rank: among qualifying listings, sort by total price, then flag the best values (rating 4.7+, free cancellation, short walk). Call out cheap ones that miss on cancellation or rating, and close calls (e.g. a bunk bed).
7. Report: one line per pick with link, total, bed layout, rating and reviews, nearest station and walk time; compare to the current booking and its cancel deadline. End with Checked / Assumed.
8. When the owner settles on a shortlist, offer to save it to a shareable wishlist on the rental site for the rest of the travel party. Saving is fine once they say yes; booking is never part of this.
