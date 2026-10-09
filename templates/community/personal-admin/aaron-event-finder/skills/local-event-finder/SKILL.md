---
name: local-event-finder
description: "Use this when someone asks what events are happening near them (this weekend, a date, a date range, a school break or holiday) within a driving radius, such as family, kid-friendly, music, or festival events, or asks for \"more like these\", free-only, or indoor-only picks, or when a weekly roundup runs."
---

# Local event finder

Finds real, date-verified events within a realistic drive time of a ZIP code, tuned to what this user has liked, with the practical details needed to actually go.

## Asking questions
Every question goes out as a widget: selection options when answers are predictable, or a widget with allowCustom (a text input) for ZIP code, minutes, dates, or ages. One question per widget, never in plain prose. Ask only what memory doesn't already answer; if the request is clear, just search.

## Inputs (memory first, then ask)
- ZIP code and maximum drive minutes.
- Event types, kids' ages, budget (Free only, Under $20 a person, Any), preferred time of day, access needs, and learned likes and dislikes.
- Dates: default to the coming weekend (Sat and Sun; include Friday evening). If unclear, widget: This weekend, Next weekend, A school break or holiday, Pick dates (allowCustom).

## Steps
1. Sources: use the trusted source list for this region from memory. If none exists, or the ZIP code or drive limit changed, run regional-event-sources first.
2. Context: check the forecast for the dates (rain, heat, air quality) and whether the dates fall on a school break, holiday, or in a seasonal window (pumpkin patches, holiday lights, spring farm days, summer outdoor events). Lean picks toward what fits.
3. Search the trusted sources first, then widen with web search (Eventbrite, venue sites, other calendars) for anything new.
4. Verify on the organizer's own page (a roundup or aggregator is not enough): date, hours, price, location, age range, and whether tickets, registration, or timed entry are needed, sold out, or close at a cutoff. Drop anything unconfirmed, canceled, or already over. Never invent events, prices, times, or URLs.
5. Dedupe across calendars (keep the official link). Also skip events and venues already suggested in recent roundups in this conversation, already done this season, or marked as disliked, unless the user asks for them; label returning picks "Still on" rather than presenting them as new.
6. Drive time realism: estimate for the hour they'd actually leave (weekend afternoons and bridge crossings are often much slower). Drop anything over the limit at that hour; note when leaving earlier keeps it in range.
7. Practical fit, only when the page states it: parking or transit, stroller and wheelchair access, sensory-friendly options, restrooms, shade or indoor space, rain policy.
8. Pick 8 to 12: weight toward learned likes, with one or two "something different" picks; mix nearby and worth-the-drive, free and paid, indoor and outdoor.

## Delivery
One short lead-in (weather note if it matters; mention a school break or season if relevant). Start with an "Act soon" line for anything with a registration cutoff, ticket drop, or likely sell-out, with dates. Then one event per line:
`- [Event name](official URL), price (or Free), city, day and hours, about N min drive at that time, ages, one-line why it fits`
Add short tags only when true: New, Still on, Tickets needed, Sells out, Register by <date>, Indoor, Rain or shine, Stroller-friendly, Free parking.
Close with a next-steps widget (multiSelect allowed): Plan my day with these, More like these, Free only, Indoor only, Different dates, Not for us (tell me which), Send me this every week.
- Plan my day: run weekend-plan-builder. Not for us: run event-feedback-learner.
