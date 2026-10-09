---
name: coinvest-web-leaderboard
description: "Handle the /leaderboard request with current, returned public trader and holdings data."
---

# `/leaderboard`

Use this skill when the user sends `/leaderboard`, asking what top traders are holding.

Use the already connected Co-Invest MCP endpoint at `https://coinvest.liquid.trade/mcp?profile=all`. Discover current tools and schemas, then use an available read-only leaderboard or trader-positioning operation. Report only holdings, ranks, directional exposure, and time periods actually returned. Distinguish a performance ranking period from when holdings were observed. If the available result contains only rank or profit and loss, do not infer positions. State when the tool is missing, data is stale, or the returned view has limited coverage.

This is a public-data request. Do not inspect the user's private account, infer a complete market-wide book from a sample, or suggest copying, mirroring, or placing the traders' positions. No proposal, order, or account change is allowed from this command.

Default to the top three traders and a concise account of the holdings actually returned. Expand only when the user asks for more. Use commas, colons or short sentences, never long dashes.
