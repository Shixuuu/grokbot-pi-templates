---
name: phone-calendar-receptionist
description: "Set up Bland inbound booking on Google Calendar with slot refresh and post-call booking."
---

# Phone calendar receptionist (Bland + Google Calendar)

Use when setting up or maintaining an inbound Bland number that books meetings on the owner's Google Calendar.

## Defaults to confirm once

- Calendar ID (email)
- Meeting length
- Google Meet on/off
- Weekday hours + timezone
- Dedicated Bland number (Agent Phone Plan)
- Voice (library or uploaded/cloned)

## Setup

1. Confirm Bland MCP + Agent Phone Plan via /v1/me and /v1/inbound.
2. Pull open slots with Google Calendar suggest_time.
3. Update inbound prompt with concrete slots, first sentence, timezone, voice, analysis_schema.
4. Poll routine: alert owner on every call; book + SMS when confirmed.
5. Optional webhook for faster booking.
6. Weekday morning slot refresh.

## Guardrails

Never invent availability. No outbound/charges without approval. Never print Bland secrets.
