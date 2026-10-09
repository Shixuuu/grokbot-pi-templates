---
name: coinvest-web-markets
description: "Handle the /markets request with a news-led briefing and up to five supported assets to watch."
---

# `/markets`

Use this skill when the user sends `/markets`, asking for a current market briefing. The source web command calls for a news-led scan across five themes and five related assets. Adapt that intent to tools actually exposed by the connected Co-Invest MCP endpoint at `https://coinvest.liquid.trade/mcp?profile=all`.

Discover the current tools and schemas first. Use available read-only news, broad market catalog, positioning, unusual-volume, trader-positioning, and prediction-market reads where useful. Run independent reads together when supported. Build themes from current returned evidence, and confirm each proposed asset against the live Co-Invest market catalog. Never reuse a previous turn's list as current proof. For each asset, state a direct, evidence-backed link to its theme and the main uncertainty. Aim for five supported picks only when the evidence supports five; return fewer and name the coverage gap rather than forcing weak links. Cite returned news links near the claims they support. Keep any directional view clearly framed as market research, not an order or actionable proposal.

Mention two or three prediction-market contexts only when the currently discovered endpoint returns them. Use the returned question or event and the probability for that specific outcome; do not call a multi-outcome leg the leader without the full outcome ladder. Omit this section if the capability or suitable data is unavailable.

The source web UI can render special market-pick cards. Do not assume those cards or a `market_picks` tool exist here. Use a discovered rendering capability only after verifying its schema and that its behavior is read-only and does not draft or propose an order; otherwise present supported picks as concise text. Never call an order, proposal, or write tool from `/markets` alone.

Use the instrument type actually returned; a commodity, crypto or index contract is not a stock merely because it is a perpetual. If a news quote differs from the current quote, resolve its instrument and date before comparing them. Otherwise omit the numeric comparison and explain the gap instead of claiming the prices agree or prove a catalyst.
