# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| slack | `674` | Post an alert or a fix list in the channel your team actually watches. |
| notion-workspace | `404` | Keep the threshold set, the checks, and the alert log where your team can find them. |
| linear | `512` | File the fix when a breach belongs to engineering, like a dead pixel or a broken checkout. |
| hex | `651` | Read spend straight from your warehouse when the numbers already live in a query. |
| datadog | `1411` | Check whether the site or checkout was down or slow when conversions dropped. |
| sentry | `579` | Check whether checkout errors spiked at the hour your conversions stopped. |
| figma | `657` | Pull up the creative behind a campaign whose click-through rate is sliding. |
| Gmail | `45893410` | Read the daily report the ad platform emails you. |
| Google Sheets | `47662908` | Read a spend sheet you already keep. |
