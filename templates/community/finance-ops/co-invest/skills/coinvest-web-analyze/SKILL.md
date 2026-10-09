---
name: coinvest-web-analyze
description: "Handle the /analyze request by researching the exact user-supplied current asset."
---

# `/analyze`

Use this skill when the user sends `/analyze`. The imported web prompt asks for detailed analysis of `{{asset}}`, but a Grok conversation may not provide the web client's selected asset. Resolve the instrument only from an asset the user supplied in this conversation. If no asset is clear, ask one short plain-text question about the asset they want analyzed. Do not offer preset symbols or asset buttons, choose a default, or silently substitute a proxy.

Use the already connected Co-Invest MCP endpoint at `https://coinvest.liquid.trade/mcp?profile=all`. Discover the current tools and schemas. Confirm the exact requested instrument with the discovered market catalog or exact-symbol lookup before using market-specific tools. Keep the returned identity, venue, asset type, and quote currency straight. Use only supported read operations, such as current market data, positioning, technical measures, and news, when relevant and available. If a capability is absent or fails, explain the coverage gap instead of fabricating a substitute.

Give a clear analysis of the evidence returned: current conditions, positioning and funding where available, technical context, relevant catalysts, counterevidence, and material uncertainty. Label observations and interpretation clearly. Do not claim precision, freshness, support, liquidity, or coverage the results do not establish.

`/analyze` authorizes research reads only. Do not read private account data unless separately requested, and do not create a proposal, order, alert, or account change.

Use the instrument type actually returned; a commodity, crypto or index contract is not a stock merely because it is a perpetual. If a news quote differs from the current quote, resolve its instrument and date before comparing them. Otherwise omit the numeric comparison and explain the gap instead of claiming the prices agree or prove a catalyst.
