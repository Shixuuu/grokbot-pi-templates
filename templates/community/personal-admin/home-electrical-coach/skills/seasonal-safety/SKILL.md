---
name: seasonal-safety
description: "Use this when the Monthly Safety Check routine fires or a homeowner asks for a seasonal or storm electrical safety check. Gives a 5-minute, no-tools checklist (GFCI test buttons, smoke/CO alarms, seasonal notes) with no DIY wiring."
---

# Seasonal Safety

**Verification scope:** The GFCI testing, portable-heater, and generator precautions below were checked against the linked public safety sources on 2026-09-28. Privacy, triage, and routine gates have static contract checks; site-specific code compliance and live scheduler behavior are not verified by those checks.

## Use this when…
- Monthly Safety Check routine fires (1st of month, 09:00 in the user's saved IANA timezone).
- "Safety check," "storm coming," "power's out," "getting ready for winter/summer."

## Monthly card (shareable) — 5 minutes, no tools, no panel cover off
Before generating a card, triage any already reported canonical red flag using `send-to-pro`; send only that response if one is present. The card's first item uses that same predicate, including a reported recall/concern brand.
```
MONTHLY ELECTRICAL SAFETY — [Month]
[ ] Look first (don't touch): smoke/fire, burning smell, sparks, heat, water near equipment, repeated trips, buzzing, scorch marks, flickering, or a reported recall/concern brand → don't touch, reset, or unplug anything; skip the rest of this card (smoke/fire, sparks, or burning smell → call 911; utility-side problem → utility emergency line; otherwise a licensed electrician before reuse).
[ ] If nothing above: press TEST on each GFCI receptacle (kitchen, baths, garage, outdoor, laundry), following the device maker's instructions. It should click off; press RESET. If it won't trip or reset → licensed electrician.
[ ] Press the test button on smoke and CO alarms. Replace batteries per the maker's schedule.
[ ] Extension cords: not under rugs, not daisy-chained, not powering space heaters.
[ ] Keep the designated electrical working space clear. A licensed electrician confirms the required clearances for the actual equipment and site.
Seasonal: [one line — see below]
Anything odd? Tell me and I'll help you write it up for an electrician.
Planning info only. Hands-on electrical work → licensed electrician.
```

## Seasonal line (use the user's stated conditions)
An optional broad region or current-weather description can tailor the tip; never assume a Louisville climate, hemisphere, or season from the date. Without that context, choose a general item, such as keeping cords undamaged and alarms tested, rather than inventing local weather.
- **Portable-heater use:** connect a heater directly to its wall outlet, without a power strip or extension cord; leave at least 3 feet between it and combustible items. Follow the manufacturer's additional precautions. See the USFA references below.
- **Storm preparation:** locate flashlights and follow the outage checklist below; test GFCIs per the maker's instructions only when the red-flag screen is clear.
- **Cooling equipment:** use its existing manual for care and operating limits; leave electrical compartments closed. Repeated trips trigger the professional route.
- **Decorative lights:** inspect cords before use; use equipment rated for its intended environment and follow the manufacturer’s instructions. Never staple through wiring.

## Storm / outage checklist (on request, or Storm Watch Nudge)
- Flashlights over candles. Charge phones and power banks.
- Fridge/freezer: keep doors closed. Know when food is safe (follow USDA guidance).
- Portable generator: carbon monoxide can be fatal. Use it outside, at least 20 feet from the home; never operate it in a house, garage, or shed. Follow its manual and keep exhaust away from openings. Never feed a wall outlet from a generator. House connections belong to a licensed electrician; provide no hookup steps. See CPSC below.
- Downed lines: stay far away and call the utility/911.

## Checked public safety references
- [ESFI Home Safety](https://www.esfi.org/home-safety): recommends monthly GFCI testing; follow the device instructions and use a professional for faults.
- [USFA heater connection guidance](https://www.usfa.fema.gov/gallery/pictographs/pictograph41.html): a heater needs a direct wall connection rather than an extension lead or power strip.
- [USFA heater separation guidance](https://www.usfa.fema.gov/gallery/pictographs/pictograph27.html): combustible materials need a separation of at least 3 feet from a portable heater.
- [CPSC portable-generator precautions](https://www.cpsc.gov/Newsroom/News-Releases/2020/CPSC-Warns-Consumers-in-Path-of-Storms-to-Take-Precautions-When-Using-Portable-Generators): operate outdoors at least 20 feet from the home, never in enclosed buildings.

## Quiet rule (routine)
Capability gate: before activation and each scheduled send, require verified platform support to durably persist consent/state, atomically claim an occurrence across concurrent invocations, reconcile an uncertain claim/send, and confirm delivery. Prompt text and conversational memory are not evidence of those capabilities. If any capability is unavailable or unverified, leave automation disabled/pending, suppress scheduled sends, and offer an on-demand checklist; do not create an active schedule. Never promise exactly-once delivery or a deduplication guarantee from these instructions.
Before a scheduled send, require a current explicit opt-in to that specific routine's schedule and user-confirmed IANA timezone. Template import, a saved timezone, or a one-time request is not recurring consent. If consent is missing, paused, revoked, or the user asked for silence, send nothing; do not use the run to ask again. If this month's check is confirmed or this scheduled occurrence was already sent, send nothing. Otherwise send once and record only the occurrence/confirmation marker needed for deduplication. Answer an on-demand checklist request once without enabling a routine. Keep any personalized card private; external sharing needs approval of recipient and fields.
For delayed or retried events, recheck current consent immediately before sending. Track private `{routine_id, consent, timezone, schedule, active, last_sent_period}` state; use routine id plus scheduled local occurrence and timezone as the send key. Reconcile uncertain sends instead of resending blindly. A stop request revokes consent and marks inactive before unscheduling; report a scheduler change only after confirmed tool success. Never include this per-user state in the reusable public template.
