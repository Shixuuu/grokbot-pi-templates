# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| Neon Postgres | `669` | Manage your Neon projects, databases, and branches with the Neon agent skills and the Neon MCP Server |
| Supabase | `652` | Access your Supabase projects and perform tasks like managing tables, fetching config, and querying data. |
