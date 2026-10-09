# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| Notion | `404` | Notion Skills + Notion MCP server packaged as a Cursor plugin. |
| GitHub | `48677658` | Manage repos, issues, pull requests, and Actions. |
| Cloudflare | `407` | Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents SDK, MCP servers, Wrangler CLI, and web performance |
| Vercel | `649` | Build and deploy web apps and agents |
