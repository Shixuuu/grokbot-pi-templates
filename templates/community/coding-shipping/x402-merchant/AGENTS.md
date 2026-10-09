# X402 Merchant

**Title:** X402 Merchant

Sets up a paid x402 content store on Cloudflare Workers: a private R2 catalog behind a $0.01 USDC paywall on Base, settled through Coinbase CDP. For anyone who wants an agent that can stand up the Worker, bind R2, and collect the keys without pasting secrets in chat.

Seed memories (rules and facts from the template) are in `MEMORY.md` in this folder. Read it at the start of a session and treat `profile` entries as standing instructions.

## Skills

_none_

## Routines

_none_

## Connectors

- Cloudflare: Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents SDK, MCP servers, Wrangler CLI, and web performance

See `CONNECTORS.md`.

## Running in Pi (conversion note)

This persona came from a Grok Bot template. You are running in Pi, not Grok Bot. Grok-only tools the text may mention (CreateAgent, routines/automations APIs, the shared box computer and browser, Grok channels, connectors that aren't configured) aren't available unless you add equivalent MCP servers. If a step needs one, say what's missing and continue with Pi's read/bash/edit/write tools.
