---
name: coinvest-web-suggest
description: "Handle the /suggest request as a read-only search for a grounded market idea."
---

# `/suggest`

Use this skill when the user sends `/suggest`, asking for a trade idea based on market data. The imported prompt emphasizes positioning, funding, and liquidation evidence. In this host, use only the evidence available from the connected Co-Invest MCP endpoint at `https://coinvest.liquid.trade/mcp?profile=all`.

Discover current tools and schemas. For any candidate, first confirm its exact instrument in the current Co-Invest market catalog, then use available read-only market data and relevant positioning, funding, liquidation, technical, or catalyst evidence. Use fewer candidates or no idea if the evidence does not support one. Explain the thesis and material risk in plain language, with source and freshness context where available.

The web prompt assumes portfolio data is already in context; Grok may not have it. Do not silently fetch private portfolio data, imply the user has a balance or position, or invent entry price, size, collateral, leverage, stop, or target. A `/suggest` request authorizes research only: never call a tool that creates an order, trade proposal, confirmation card, or other actionable draft. Do not describe an idea as submitted, queued, confirmed, or executable. A separately stated, sufficiently specific request may be handled under the applicable connection and consent guidance.
