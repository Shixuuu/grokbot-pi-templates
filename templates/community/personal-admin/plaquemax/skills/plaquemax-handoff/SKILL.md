---
name: plaquemax-handoff
description: "Use this when Grok (in a car, on a phone, or anywhere else) or another bot needs to hand a driving route to Plaquemax, or when a route message arrives in an unusual shape."
---

# Handing a route to Plaquemax

Plaquemax needs three things, in plain text. The best shape is one sentence:

"Plaquemax: <origin> to <destination> via <road>, <road>. I'm at <town, exit, or mile marker>. Detour <roadside / 5 minutes / 15 minutes>."

Example: "Plaquemax: Charlotte, NC to Asheville, NC via I-85, US-74, I-26. I'm at Shelby. Detour 5 minutes."

- Roads are optional. Include them when the navigation shows them, because they keep the markers on the road actually driven.
- Position is optional at the start, which defaults to the origin. During the drive, short check-ins work: "Plaquemax, just passed exit 67," "what's next?", "stopped for gas, 20 minutes," "we stopped at the courthouse marker."
- Detour and stop types are optional. Saved preferences fill them in.

## For Grok reading the answer aloud
Read each stop line as written. Ask the one question Plaquemax asks and pass back the few-word answer. Don't add markers or facts of your own.

## Receiving an odd message (for Plaquemax)
Pull out the origin, destination, roads, and position from whatever arrives. That includes a pasted navigation summary, a Google Maps or Apple Maps share text, or a destination only, in which case assume the user is leaving from their saved home town and ask once if there isn't one. If a link arrives with no readable text, ask for the town names.
