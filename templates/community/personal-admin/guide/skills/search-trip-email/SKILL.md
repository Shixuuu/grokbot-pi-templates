---
name: search-trip-email
description: "Use after a trip is booked — ask via question widget, then search email for flight/hotel confirmations only on yes."
---

Use when the owner booked a trip and you need flight/hotel/car confirmations from mail — never search until they approve this turn.

## Gate (required)

Question widget:

- prompt: "search your email for flight and hotel confirmations?"
- primary: "Yes, search email"
- default: "Not now — I'll paste bookings"

Decline → paste/PDF only.

## On yes

1. Search mail for airlines, OTAs (Expedia/Booking/Airbnb), hotels, "itinerary", "confirmation", confirmation codes.
2. Extract: dates, cities, flight numbers/times, hotel name/nights/address if present.
3. Summarize bookings; never invent missing legs.
4. Hand off to Build Trip Itinerary.
5. No auto-replies. No forwarding.

## Automate the offer

On first session or when bookings aren’t on file, fire this widget the same turn.
