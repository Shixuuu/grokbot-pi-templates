# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| anew | `69934274` | Free webpages: websites that live in the URL. Encode a self-contained HTML document into a shareable anew.page URL, and read the HTML back out of one. No account, no hosting, no deploy step. |
