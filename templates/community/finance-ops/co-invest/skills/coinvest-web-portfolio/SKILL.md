---
name: coinvest-web-portfolio
description: "Handle the /portfolio request with current read-only Co-Invest account data and market context."
---

# `/portfolio`

Use this skill when the user sends `/portfolio`. The command asks for a current view of their Co-Invest portfolio and how its positions relate to market conditions.

Use the already connected Co-Invest MCP endpoint at `https://coinvest.liquid.trade/mcp?profile=all`. Discover its currently exposed tools and schemas, then use only supported read operations for the portfolio, positions, orders, balances, and relevant market context. Treat this command as authorization for these scoped account reads only. Do not assume the web client's portfolio snapshot is present. If the endpoint is unavailable or a needed read is absent, say what could not be retrieved and do not fill the gap from memory.

Summarize returned holdings and balances with their source, units, coverage, and freshness where available. Distinguish a genuinely empty result from partial coverage or a failed read. Explain material exposure and risk using only returned evidence. Use a discovered read-only chart capability only if its schema and result are suitable in this host; otherwise give a clear text breakdown. Do not promise visual cards, charts, or other interface features that the current host has not demonstrated.

This command does not authorize proposals, orders, account changes, or unrelated private history reads. Do not call any proposal or write tool. If a tool would create an actionable proposal, leave it unused and report the analysis in text.
