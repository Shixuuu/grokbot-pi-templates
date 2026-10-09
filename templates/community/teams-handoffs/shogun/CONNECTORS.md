# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| GitHub | `48677658` | Manage repos, issues, pull requests, and Actions. |
| Notion | `404` | Notion Skills + Notion MCP server packaged as a Cursor plugin. |
| Slack | `674` | Slack MCP server. Search channels, send messages, and perform other Slack actions through MCP-compatible clients. |
| Gmail | `45893410` | Search, read, draft, and manage email. |
| Google Calendar | `45893411` | Search events and schedule meetings. |
| Railway | `29413143` | Railway agent skills and hosted MCP server for deploying, configuring, monitoring, and troubleshooting apps and infrastructure on Railway from Cursor. Manage services, environments, deployments, databases, object storage, networking, and observability. |
| Cloudflare | `407` | Skills for the Cloudflare developer platform: Workers, Durable Objects, Agents SDK, MCP servers, Wrangler CLI, and web performance |
| Stripe | `408` | Stripe plugin for Cursor to help with Stripe integrations including best practices, API/SDK upgrade guidance, and the Stripe MCP server. |
| X | `49086599` | Search posts, read timelines, pull trends, and manage bookmarks. |
