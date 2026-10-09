# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| AgentStack — Backend, Hosting & AI MCP | `53209321` | One MCP tool (agentstack.execute) for the full AgentStack catalog — hosting (/s/), storage, 8DNA, logic, buffs, payments, agents fleet, RAG, messenger, integrations. Live capabilities from GET /mcp/actions. OAuth Device Code install; rules, skills, commands, hooks, and agents route AI to the platform instead of custom backend glue. |
