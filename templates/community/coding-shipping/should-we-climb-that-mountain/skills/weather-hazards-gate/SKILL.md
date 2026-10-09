---
name: weather-hazards-gate
description: "Use this for a cited go/caution/no-go weather and hazards decision with turn-around triggers."
---

Use before green-lighting any outing, and again morning-of.

## Purpose
Produce **GO / CAUTION / NO-GO** with cited weather and hazard sources (NWS/NOAA, local avalanche center, park alerts, lightning/heat/cold). Include explicit **turn-around triggers**.

## Output
`/workspace/should-we-climb/[TRIP_ID]-hazards.md` plus chat block: Gate · Evidence · Turn-around triggers · Confidence.

## Rules
No invented forecasts. Timestamps required. If sources conflict or missing → CAUTION or NO-GO, not GO. Bot is not SAR.
