# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| Treg | `55647425` | OpenRouter for tools — 2,896 agent-callable endpoints across 60 providers: SEO and SERP data, backlinks, social and trends, people and company enrichment, ads, scraping. Search by the task, see the price, then call it. Credentials are injected server-side, so the agent never holds a key. Pay per call, not per subscription. |
