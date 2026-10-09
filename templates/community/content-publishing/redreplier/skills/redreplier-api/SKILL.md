---
name: redreplier-api
description: "Use this when monitoring or triaging brand mentions through the RedReplier REST API (Reddit, X, Hacker News, Bluesky, Facebook)."
---

Monitor and triage brand mentions through the RedReplier REST API.

## Auth

Every request needs the header `Authorization: Bearer <token>`. The owner creates the token at https://redreplier.com/api-tokens (it starts with `redreplier_`, and needs a paid plan with API access). Store it in the RedReplier connector credential field `token`. Never put the token in the conversation, in memory, or in this skill.

Read the token from that credential file at call time. If it is missing, request it with a secret-request (label "RedReplier API token", connector `redreplier`, field `token`) and stop until it is provided.

## Base

- Base URL: `https://ai.redreplier.com/ai-app/api/v1`
- Full spec: `GET /openapi.json` on the same base URL (no auth needed). Fetch the spec when an endpoint or field is unclear instead of guessing.
- Timestamps are ISO 8601 UTC. Responses include RFC 9331 rate-limit headers; on 429 wait `Retry-After` seconds.

## Workflow

1. `GET /websites` to see monitored websites and their keywords with statuses (`PENDING`, `ACTIVE`, `DISABLED`, `SUSPENDED`).
2. `GET /mentions` with filters to pull the inbox. Useful query params: `websiteId`, `statuses` (`NEW` | `APPROVED` | `REJECTED`, repeat the key for several), `sources` (`REDDIT_POST` | `REDDIT_COMMENT` | `TWITTER` | `BLUESKY` | `HACKERNEWS` | `FACEBOOK`), `scoreBuckets` (`VERY_LOW` | `LOW` | `MEDIUM` | `HIGH` | `VERY_HIGH`), `sort` (`RELEVANCE` | `RECENT`), `from` / `to`, `limit` / `offset`. Low-relevance mentions are excluded unless `includeLowRelevance=true`. `GET /mentions/count` returns the same filters as a total. Each mention may already include `relevanceScore`, `relevanceReason`, and `aiReplySuggestion`.
3. `POST /mentions/{id}/explain` to fill in `relevanceReason` before judging borderline mentions.
4. `PATCH /mentions/{id}/status` with `{status}` to mark `APPROVED` (real lead) or `REJECTED` (noise) as the owner decides.
5. Managing keywords: `POST /websites/{id}/keywords` to add (extras beyond the plan start `PENDING`). `GET /keywords/activate-pending/preview` then `POST /keywords/activate-pending` to activate them. `GET /keywords/billing-preview?desiredKeywordCount=` prices an arbitrary active-keyword count. `POST /keywords/{id}/disable` or `/enable`, `PATCH /keywords/{id}` to edit text, `DELETE /keywords/{id}` to remove.
6. `GET` and `PUT /alert-settings` for email alert cadence (`enabled`, `cadenceMinutes`).

## Validation

Never activate pending keywords without showing the owner the billing preview first. Status changes on mentions follow the owner's explicit judgment, not yours.

## Failure

On 401 the token is wrong or the plan lacks API access; tell the owner, do not retry. On 429 wait and retry once. On 402, payment is required to activate pending keywords; show the preview and stop.
