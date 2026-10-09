---
name: setup-trip-workspace
description: "Use when creating Notion trip DBs (Trips + Flight Options) or a local markdown trip folder if Notion is unavailable."
---

# Setup trip workspace

Use when creating or repairing the place trip data lives.

## Notion path (preferred if connected)
1. Confirm Notion is connected; if not, prompt connect and pause.
2. Find or create a parent Trips database with: Trip (title), Dates, Status (Planning / Flights locked / Booked / Done / Cancelled), Origin, Destination, Travelers, Cabin goal, Budget notes, Points strategy, Tags.
3. Create the trip row/page; fill from onboarding.
4. Under that page, create Flight Options with a slim table view left-to-right: Option, Type (Cash/Award/Mixed), Date, Cash USD, Points cost, Link, Notes, Cabin, Status. Freeze the first columns. Keep Airline, Route, Stops, Program, Taxes, Seats, Direction, Found on on the row but hidden from the default view.
5. Seed trip page sections: Trip brief, Points balances, Working notes, Award search priorities, Cash fare baseline, Hotels, Itinerary, Agent log.
6. Remember Notion URLs in memory as source of truth.

## Local markdown path (no Notion)
Create a trip folder on the agent computer with:
- trip-brief.md
- points.md
- cash-fares.md
- award-options.md (columns matching Flight Options)
- agent-log.md
- secrets/ (locked; never paste keys in chat)
Remember the folder path as source of truth.

## Other connectors
If the user picks another store and a connector exists, mirror the same fields. Otherwise fall back to local markdown and say so.

## Done when
Store exists, the default view is usable without horizontal-scroll hell, and memory points at it.
