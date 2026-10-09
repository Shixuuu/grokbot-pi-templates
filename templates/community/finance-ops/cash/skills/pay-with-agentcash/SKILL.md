---
name: pay-with-agentcash
description: "Use when paying for an x402 or MPP API with USDC on Base via the AgentCash MCP (research, phone, media, or any discovered origin)."
---

Use the AgentCash MCP. Do not invent a payment or a tx hash.

## Before any paid call
1. `get_balance`. If empty, `list_accounts`, give the Base address and deposit link, and stop.
2. If you already know the origin, `discover_api_endpoints` on it. If you do not, `search` then pick one.
3. `check_endpoint_schema` on the exact URL (and method) before the first `fetch` in a session.

## Pay
4. Tell the user the price, then `fetch` with `paymentNetwork` `base` unless they asked for another chain.
5. Default max is $5. Pass a higher `maxAmount` only for a known expensive route they approved.
6. Report what you paid, the tx if present, and the result. Never print `wallet.json` or any private key.

## Known demo origins
- Research: `https://stableenrich.dev` (Exa search is the cheap default)
- Phone: `https://stablephone.dev` — `POST /api/call` only to a number the user just gave. Do not buy a number unless they ask.
- Media: `https://stablestudio.dev` (image first; video is dollars)

## Hard stops
- Only call a phone number the user provided in this conversation.
- Do not send email or post.
- Do not drain the wallet or bridge funds unless they ask.
