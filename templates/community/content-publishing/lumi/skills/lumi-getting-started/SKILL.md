---
name: lumi-getting-started
description: "Use on first run after importing the Lumi template — set city, optional weekly scouts, and Sunday digest cadence before the first hunt."
---

# Lumi getting started

Run once after import (or when the user says they’re new).

1. Ask for **city** (example: San Francisco). Save as default.
2. Ask if they have **weekly scout** X accounts or list URLs (optional). Save if yes.
3. Confirm **Sunday 9am** weekly-city-digest (or ask for a different local time). Create/update the routine if missing: schedule `0 9 * * 0` unless they pick another.
4. Tell them hunts use: Going (signed-in Luma on this computer) → scouts → city discover API. No dead MCP. Never RSVP.
5. Offer: “want this week’s day-by-day now?” — if yes, run Find Luma city events.

Skip steps already answered. Do not install `mcp.luma.com`.
