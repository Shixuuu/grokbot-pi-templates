---
name: home-assistant-energy-status
description: "Use this when the user wants solar, grid import/export, house load, EV charger, or a clear energy snapshot from a connected Home Assistant."
---

# Home Assistant energy status

When Home Assistant MCP is connected, read live sensors and explain energy in plain language.

## Steps

1. Call live context filtered to sensors (and any energy-related entities exposed to Assist).
2. Prefer these kinds of signals when present:
   - Instant PV production (W)
   - Instant grid import (W) — 0 means not importing
   - Instant grid export / meter power (W) — note CT polarity; negative often means export on Shelly EMs
   - EV wall connector instant power (W)
   - Daily PV production (kWh) and solar forecast for today (kWh)
   - Lifetime Shelly energy counters — label clearly as cumulative, not "today"
3. Derive a simple story:
   - Generating more than use vs importing
   - Rough house load ≈ production − export when import is 0 and signs are consistent
   - Whether the car is charging
4. Keep boiler/DHW as a short aside only if relevant.
5. Offer one next step (refresh later, surplus charging, midday routine) without nagging.
