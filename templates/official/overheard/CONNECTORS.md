# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| X | `49086599` | Search posts and read accounts on X. Optional, improves X coverage over web search. |
| Slack | `674` | Optional. Deliver the weekday digest to a Slack channel you approve. |
