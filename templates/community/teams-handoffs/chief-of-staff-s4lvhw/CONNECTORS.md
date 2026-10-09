# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| X | `49086599` | Search posts, read timelines, pull trends, and manage bookmarks. |
| Composio | `32661537` | Connect and operate 1000+ external apps from Cursor via the Composio MCP server. Managed OAuth, intelligent tool routing, and a remote sandbox for bulk data processing. |
| postiz | `58737848` | Social media automation CLI for scheduling posts, managing integrations, uploading media, and tracking analytics across 28+ platforms including X, LinkedIn, Reddit, YouTube, TikTok, Instagram, and more |
