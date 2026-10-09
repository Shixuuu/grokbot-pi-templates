# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| Figma | `657` | Optional. Reads your files for references and design reviews, and draws mocks, screens, and decks when a cloud agent can't. |
| Slack | `674` | Optional. Reads a thread you point at so a prototype starts from the real discussion. Posts only a draft you approve. |
| X | `49086599` | Optional. Searches posts and threads for craft research. Web search works without it. |
