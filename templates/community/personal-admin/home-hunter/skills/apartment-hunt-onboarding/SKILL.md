---
name: apartment-hunt-onboarding
description: "Use this on first wake after install, or when the user wants to set or reset apartment-hunt criteria, preferences, commute limits, and anti-jobs."
---

# Apartment hunt onboarding

Run this on the first message after install, or whenever the user says they want to restart criteria.

## Goal
Lock hard filters and soft preferences into agent memory, create or resume the daily listing routine, and stay quiet until the next search is useful. Do not invent cities, budgets, move-in dates, or commute targets.

## Ask once (batch with a widget when helpful)
Collect only what you need to search. Skip anything already in memory.

1. **Where** — city/neighborhoods, and must-be-near landmarks (transit stop, office, school).
2. **Commute** — one or more destinations (work, school, partner's office) with a hard max door-to-door time in minutes, preferred modes (walk, transit, bike, drive), and whether peak rush hour matters. Optional soft target (e.g. prefer under 30, hard cap 45). If they only care about walk-to-transit, capture that as a landmark walk minutes instead.
3. **Beds / baths** — hard numbers (e.g. 2 bed AND 2 bath). Note if 1 bed + den is acceptable.
4. **Hard rent cap** — monthly max they will not stretch past.
5. **Move-in window** — earliest and latest; whether later dates are OK if clearly better.
6. **Must-haves** — in-unit laundry, parking, pets, outdoor space, elevator, etc.
7. **Deal-breakers** — broker fee, ground floor, no AC, long walk to transit, commute over the hard max, etc.
8. **Search sources** — default Zillow, StreetEasy (or local equivalent), apartments.com, plus official building sites. Ask if they want others.
9. **Delivery** — preferred digest time in their timezone (default 9:00 local), and whether quiet empty runs are OK (default yes: no message if the shortlist is unchanged).
10. **Anti-jobs** — confirm they book tours themselves; this bot never emails, texts, applies, or contacts brokers/landlords unless they later unlock that with a different bot (Inbox/CoS pattern).
11. **Coordinator** — optional: name of another bot or person to flag only for send/hold mail, drop-a-building, or hours-left deadlines. Default: no fan-out; recs stay in this chat.

## Save
Write profile-tier memories for:
- Hard filters (location, commute destinations + max minutes + modes, beds/baths, cap, move-in, must-haves, deal-breakers)
- Soft preferences and scoring weights (including preferred commute soft target)
- Anti-jobs and who owns email/applications
- Digest time + quiet-empty-runs rule
- Optional coordinator escalation rules

Keep live shortlists and promo state in log memory, never frozen inside the daily routine prompt.

## Standing routine
Create or update a daily (or weekday) listing-recs routine whose prompt says: load hard filters from memory, search the agreed sources, estimate commute against saved destinations, surface 3–6 best with tour links only when something changed, stay quiet on empty runs, delete itself when they sign a lease. Schedule in their local timezone at the agreed hour.

## First search
Offer one immediate scan after onboarding. If they decline, wait for the first scheduled run.

## Pause modes
If they apply somewhere primary: pause tour pushes, track that application, surface only status changes or hours-left deadlines, and stay dormant until they or their coordinator wakes you. If they sign a lease: delete the daily routine and offer a short move-in checklist once.
