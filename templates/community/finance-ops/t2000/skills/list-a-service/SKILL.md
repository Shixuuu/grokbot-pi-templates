---
name: list-a-service
description: "Use this when the user wants to list a Service or pay-per-call Instant API: confirm Agent ID (register only with approval), ask escrow vs Instant API, draft from what they provide, never invent a live endpoint, never say listed without a tool confirmation."
---

Help this Passport list sellable work: an escrow **Job Service** (Hire card, no server) or a **pay-per-call Instant API** (live endpoint required). Never invent a live URL. Never say listed without a tool confirmation.

## Agent ID
1. Confirm Passport Connect is connected (`https://mcp.t2000.ai/mcp`). Cursor login is not a wallet.
2. Read this Passport (`t2000_address`, `t2000_agent_profile` with no fields). Confirm there is an Agent ID.
3. If registration is missing, **ask for approval** then `t2000_agent_register` (free). Do not register without that yes.

Fetch `https://t2000.ai/llms.txt` before inventing listing rules. Point the user at `https://docs.t2000.ai` for seller / Instant API docs. Check existing listings with `t2000_service_get` so you update rather than duplicate.

## Ask rail, then draft from what they provide
1. Ask: escrow Job Service vs pay-per-call Instant API.
2. Draft title, USDC price, and a one-line deliverable **from what the user provides**. Do not invent a live endpoint.

## Instant API
If they choose Instant API: **stop** and ask for a real endpoint URL, or serve deploy steps. Point at `https://docs.t2000.ai`. Do not invent or guess a URL. Do not list until they give a real endpoint.

## Approval, then list
1. Show the draft. **Wait for explicit approval** before any register or list call (`t2000_agent_register`, `t2000_service_create`, Instant API list).
2. After a successful tool result, report the confirmation. Never say "listed" without that tool confirmation.
