---
name: rv-trip-planning-mvp
description: "Use when planning a multi-day RV trip with overnight stops, live availability checks, membership site research, a trip-board itinerary, optional Sheets export, inquiry drafts, or reservation tee-up to a human checkout click."
---

# RV trip planning MVP

Plan multi-day RV trips as paced driving legs with verified overnight stops. Own a durable **trip board** as the plan of record. Minimize human touch: research and tee up work; humans only unlock logins/2FA, approve inquiry sends the first time, click final checkout, or place phone-only reservations.

## When to use

- Start/end locations and dates for an RV trip (arrival date optional)
- Overnight stops, fuel, dump/water, weather, or membership-site candidates along a corridor
- Live availability checks, inquiry drafts, or booking carts ready for human confirm
- Optional Google Sheets export of a finalized board

Do **not** use for: fixed-site availability watchdogs, non-RV travel, or unrelated life-admin.

## Rig constraints (from profile / memory — never invent)

Before candidates, load the traveler's rig facts (length, toad, reverse policy, height, weight, dump cadence, water, generator/fuel rules, nightly budget, pace). Filter every stop against those facts. If any hard constraint is missing, ask once, then proceed.

Typical pacing: **100–150 miles/day**; stretch to **200 only with a reason**; never over 200 without asking.

## Inputs

Ask only for what's missing:

1. Start date + departure location (required)
2. Destination (required); arrival date optional (derive from legs if absent)
3. Fixed waypoints / must-sees / hard avoidances

## Trip board (plan of record)

Maintain one board per trip (markdown/HTML artifact the bot updates). Each day row includes:

| Field | Notes |
|---|---|
| Day / dates | Stay nights |
| Leg miles | Drive that day |
| Overnight (primary + ≤2 alts) | Name, place, cost estimate |
| Hookups | Y/N/partial + which |
| Availability | Confirmed / likely / unknown / inquired / tee'd up |
| Fuel suggestion | High-flow diesel; blend notes |
| Weather | Freeze/snow/wind flags for travel date |
| Must-sees | Rig-accessible only |
| Access notes | Pull-through, height/weight, toad-forward |
| Source + info age | URL + date; flag >12 mo |
| Next action | Check / inquire / call / tee-up / human checkout / done |

Google Sheets is **optional export** after the board is solid — mirror the user's historical tab layout when they have one. Confirm before writing Sheets.

## Overnight priority

1. Free / permission parking with recent confirmation (call-ahead flags)
2. Membership: Harvest Hosts / Boondockers Welcome, Passport America
3. State / city / county parks
4. Private RV parks / resorts (budget ceiling from memory)

Per night: gather up to **3 options**; one strong verified option beats three stale listings.

## Membership + availability

- Prefer **logged-in browser** sessions the user already has; stop and hand them login/2FA when gated.
- Use **official APIs** when available and authenticated; never store passwords in skills or memory text.
- Harvest Hosts: prefer Plan-a-Trip / route filters (distance-to-route, total length including toad, generator) — do **not** treat a national map layer as route-limited. Prefer DOM + network captures over map pin clicks.
- Passport America: directory + member rates only; **date availability is on each park's site/phone**.
- Verification order: online calendar (read-only) → public form/email inquiry → phone (human places the call unless a voice tool is configured and approved).
- Inquiries: draft via AgentMail (or equivalent); show recipient/subject/body and get confirm before first send of a pattern; log contact attempts on the board.
- Never claim availability without a dated source.

## Fuel, dump, weather

- Fuel on long trips: truck stops with RV/high-flow lanes; respect diesel blend vs generator rules from memory.
- Dump/water cadence: never exceed the traveler's max dry streak; insert dump stops as needed.
- Weather per segment (weather.gov or equivalent): freeze → winterized water/dump risk; snow/ice → southern corridor bias; high wind → flag tall-rig risk.

## Reservation tee-up (human final click)

When nights are approved:

1. Prefer sites with online booking: fill cart / hold to the **review-and-pay** (or confirm) screen; **stop**. Human clicks.
2. Phone-only: produce a call sheet (number, dates, site type, rig spiel, questions). Do not pretend a phone hold happened.
3. Never auto-pay, never submit final booking without an explicit human confirm in chat for that reservation.
4. Confirm before any spend, mail send, or calendar write that commits them.

## Pipeline

1. Load rig + prefs from profile/memory
2. Lock corridor and leg boundaries
3. Mine known-good past stops if a travel log exists
4. Candidates per night (priority order + rig filter)
5. Live availability when possible; else inquire
6. Update trip board; present ranked picks for approval
7. On approval: tee up bookings / call sheet
8. Optional Sheets export
9. Browser hygiene: close finished research tabs; keep auth surfaces and the board

## Pitfalls

- Stale free-camping / Walmart reports
- HH length caps and business-hours arrival
- PA weekend/holiday exclusions
- Reversing with a toad attached
- Low bridges / weight-limited county roads
- Treating Mapbox national pins as route results
- Booking or paying without the human click

## Done checklist

- [ ] Board has every day with miles, stop, hookups, weather, fuel, must-sees, availability, next action
- [ ] Legs within pace rules
- [ ] Dump cadence respected
- [ ] Live checks or inquiries logged where calendars missing
- [ ] Tee-ups stopped before final checkout
- [ ] Sheets export only if requested and confirmed
