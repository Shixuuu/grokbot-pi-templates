# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| X | `49086599` | Recommended. Trends, news, and posts for topic scans, plus your own posts' numbers to learn from. Read only, and reads bill your X API credits. |
| Gmail | `45893410` | Optional. Outbound drafts in your inbox, replies from leads, and past emails to learn from. Sends only a batch you approve. |
