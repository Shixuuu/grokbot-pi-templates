---
name: integrate-milypay
description: "use this when wiring Milypay into an agent, app, or editor via CLI, MCP, SDK, or raw HTTP 402"
---

# Integrate Milypay

Milypay is pay-per-call Australian data over x402. No accounts, no API keys. Canonical docs: https://milypay.xyz/agents.md and https://milypay.xyz/quickstart.

## Surfaces

1. **CLI** — `npx milypay services` then `npx milypay abn 51824753556`. Paid: `export MILYPAY_PRIVATE_KEY=…` and `npx milypay --api …`.
2. **MCP** — `npx milypay mcp`. Cursor / Claude config (demo):

```json
{
  "mcpServers": {
    "milypay": {
      "command": "npx",
      "args": ["-y", "milypay", "mcp"],
      "env": { "MILYPAY_HOST": "demo" }
    }
  }
}
```

Paid MCP: set `MILYPAY_HOST` to `api` and `MILYPAY_PRIVATE_KEY` to the Solana secret. Never put a secret in chat; use the host's secret input.

If this environment can add a custom connector, add that stdio command (it also runs for the user's other agents). Confirm before adding it.

3. **SDK** — `milypay-sdk` for TypeScript and Python. Wraps fetch, retries on 402, attaches a `$receipt` with a sol.new explorer URL on paid calls.
4. **HTTP** — any x402 client. Demo: `https://milypay.xyz/api/…`. Paid: `https://api.milypay.xyz/…`. Discovery: OpenAPI at https://milypay.xyz/openapi.json, catalog at https://milypay.xyz/.well-known/api-catalog, x402 at https://milypay.xyz/.well-known/x402. Pay.sh namespace: `milysec/*`.

## Payment

1. Client hits an endpoint.
2. Server may return HTTP 402 with price, asset, network (Solana), pay-to.
3. Wallet settles via the PayAI facilitator. Data returns in the same round-trip.

Assets: AUDD, AUDM, dAUD, plus USDC and USDT. See https://milypay.xyz/stables.

Empty wallet: MoneyGram funds USDC first (it does not settle the 402). Demo UI https://milypay.xyz/fund. Optional Tempo MPP via `?rail=mpp`.

## Rules

- Default to demo. Do not enable paid mode or spend unless the user asked.
- Never request an API key. Payment is auth.
- Prefer MCP tools when connected; otherwise CLI; otherwise HTTP.
- If someone wants to list their own Australian API on Milypay, point them to https://milypay.xyz/contact.
