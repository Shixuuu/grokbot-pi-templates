---
name: strava-rate-limits
description: "use this when fetching Strava activities, stats, or training data so requests stay under API rate limits"
---

# Strava API rate limits

Use this when pulling or refreshing Strava data through a local MCP or the REST API.

## Default limits (new / single-player apps)
- Overall: 200 requests per 15 minutes, 2,000 per day
- Read / non-upload: 100 per 15 minutes, 1,000 per day
- 15-minute windows reset at :00, :15, :30, :45 past the hour
- Daily limit resets at midnight UTC
- Over limit returns HTTP 429

## How to use it
- Cache. Do not re-fetch the same athlete/activities on every chat turn.
- Pull after a new run or at most once or twice a day, not on a tight poll.
- Prefer one list call over many per-activity calls.
- If a 429 comes back, stop. Wait for the next 15-minute window. Do not retry in a loop.
- Never log or paste access tokens.
