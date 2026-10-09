---
name: travel-day-ops
description: "Use this when running a travel day: check bookings, schedule short-lived follow-ups, and brief the owner or hub."
---

## Goal
On each travel-monitor run, turn booked plans into practical checks and short-lived follow-up routines. Do not book or pay without a clear OK from the owner. Be proactive only on the topics they chose in setup.

## Sources (use what they configured)
- Trip organizer (TripIt, Trips.com, or similar) when signed in on the browser.
- Calendar events for flights, hotels, pickups, parking.
- Confirmation email when available.
- Live flight status when a flight is today or tomorrow.
- Location: phone tracker / Home Assistant if configured; otherwise infer travel days from calendar and trip details; if they chose “only when I say,” do not invent a whereabouts check.

## Travel day checklist
1. What is booked today and tomorrow (flights, stays, ground transfer, parking).
2. Leave-by times, connection buffers, check-in windows, hotel check-in/out, pickup meet points — when they want those alerts.
3. Expedite and lounge options that still need lead time, using their Priority Pass / card / lounge memories — when they want those.
4. Trouble early: delay, gate change, tight layover, weather, a transfer that no longer works — surface the problem and 2–3 real options with times and rough cost when looked up. Prefer their cabin preference when offering alternate flights.
5. Create short-lived one-shot routines for time-critical nudges; delete each after it fires.
6. Stay quiet when nothing is coming and they are not traveling.

## Places and food
When they opted in for restaurants or things to do: recommend options that match their dietary needs and taste. Look up real hours and details; do not invent them. Do not order or book food unless they ask.

## Delivery
Send substance to the hub assistant if one is configured; otherwise to the owner in chat. One reminder per thing; if ignored, drop it.

## Anti-patterns
Do not invent times, prices, or availability. Do not take non-travel work. Do not dump every tip category if they did not ask for it in setup.
