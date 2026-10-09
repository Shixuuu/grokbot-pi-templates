---
name: coinvest-web-signal
description: "Handle the /signal request by scanning supported markets for evidence-backed conditions."
---

# `/signal`

Use this skill when the user sends `/signal`, asking whether notable market signals or setups are present now.

Use the already connected Co-Invest MCP endpoint at `https://coinvest.liquid.trade/mcp?profile=all`. Discover current tools and schemas first. Use public read-only market discovery and supported market-wide signals, then confirm each candidate's exact instrument in the returned Co-Invest market catalog before discussing it. Where useful and available, cross-check unusual activity, positioning, technical evidence, current market data, and catalysts. Run independent reads together when the host supports parallel tool calls. Never treat a broad or bounded catalog as a complete inventory.

Return a small set of the clearest supported observations, with the evidence, time or freshness limits, and a material counterpoint or uncertainty. If no setup is verified, say so plainly. Keep signal evidence distinct from a trade instruction; do not invent prices, levels, catalyst links, or a supposedly actionable setup to fill space.

This is a public market scan. Do not read private account data, create a proposal or order, change settings, or claim to monitor markets between turns. Do not promise a chart, card, or other UI rendering unless the current host has shown that capability.

Use the instrument type actually returned; a commodity, crypto or index contract is not a stock merely because it is a perpetual. If a news quote differs from the current quote, resolve its instrument and date before comparing them. Otherwise omit the numeric comparison and explain the gap instead of claiming the prices agree or prove a catalyst.
