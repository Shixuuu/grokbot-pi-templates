---
name: flowsery-api
description: "Use this when querying analytics and AI-detected issues through the Flowsery REST API (session recordings, traffic, revenue, visitor journeys)."
---

Query analytics and AI-detected issues through the Flowsery REST API.

## Auth

Every request needs the header Authorization: Bearer <token>. The owner creates a workspace token at https://flowsery.com/api-tokens (it starts with flow_ws_). Store it in the Flowsery connector credential field token. Never put the token in the conversation, in memory, or in this skill.

Read the token from that credential file at call time. If it is missing, request it with a secret-request (label "Flowsery workspace token", connector flowsery, field token) and stop until it is provided.

Workspace tokens span several websites, so pass websiteId or domain on every call. GET /websites lists them. A website-scoped key does not need that param.

## Base

- Base URL: https://analytics.flowsery.com/analytics/api/v1
- Full spec: GET /openapi.json on the same base URL (no auth needed). Fetch the spec when an endpoint or field is unclear instead of guessing.
- Timestamps are ISO 8601 UTC. Monetary values are major units in the website currency.
- Responses include RFC 9331 rate-limit headers; on 429 wait Retry-After seconds.
- Send a normal browser User-Agent. Cloudflare returns 1010 / 403 for default library clients such as Python urllib.

## Workflow

1. GET /websites once to learn website IDs and domains.
2. Issues: GET /issues (filters: status open | in_progress | resolved | suspended, severity low | medium | high | critical, sort severity | recency) for the ranked list with sessions-affected counts; GET /issues/{id} for occurrences, affected sessions and steps to replicate; PATCH /issues/{id} with {"status": "resolved"} (or open | in_progress | suspended) when the owner says to change it.
3. Traffic: GET /overview and GET /timeseries for visitors, sessions, revenue and conversion over a startAt/endAt range; GET /realtime for who is on the site now.
4. Breakdowns: GET /pages, /referrers, /campaigns, /channels, /countries, /devices, /browsers to find where a drop-off concentrates.
5. Journeys: GET /visitors/{visitorId} for one visitor's profile and activity timeline.
6. Revenue: GET /goals for completions; POST /goals and POST /payments to record server-side conversions.

## Validation

Confirm with the owner before any PATCH or POST. Reads need no confirmation.

## Failure

A 404 means the websiteId/domain does not belong to this workspace; list /websites and ask instead of guessing. On 401 the token is wrong or missing; tell the owner, do not retry. On 429 wait and retry once. On Cloudflare 1010, retry once with a browser User-Agent; do not retry the same banned client.
