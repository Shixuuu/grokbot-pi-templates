# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| pstack | `9717366` | if you want to go fast, go deep first. pstack helps you write less, but higher quality code. rigorous agent workflows you can parallelize with confidence. |
| Cloudflare | `407` | Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents SDK, MCP servers, Wrangler CLI, and web performance |
| Railway | `29413143` | Railway agent skills and hosted MCP server for deploying, configuring, monitoring, and troubleshooting apps and infrastructure on Railway from Cursor. Manage services, environments, deployments, databases, object storage, networking, and observability. |
| Google Drive | `45893413` | Search, read, create, and share files. |
| Gmail | `45893410` | Search, read, draft, and manage email. |
| X | `49086599` | Search posts, read timelines, pull trends, and manage bookmarks. |
| Higgsfield | `5420454` | Generate images, videos, and more using Higgsfield MCP from Cursor. |
| Chrome Devtools for Agents | `21020287` | Help your agent build, debug, and verify your code correctly. With Chrome DevTools for agents, your AI agent can interact with the Chrome browser to test code, emulate users, and catch bugs using Chrome DevTools’ capabilities before shipping. |
