# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| Vercel | `649` | Build and deploy web apps and agents |
| Cloudflare | `407` | Build, test, and deploy applications on Cloudflare with platform guidance Skills and the Cloudflare MCP server. |
