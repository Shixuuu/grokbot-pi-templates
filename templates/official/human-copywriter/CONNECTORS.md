# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| notion-workspace | `404` | Keep the voice profile and every draft where your team already writes. |
| slack | `674` | Drop a draft in the channel where people give you feedback. |
| figma | `657` | Read the copy sitting in a design frame and hand back rewritten lines. |
| linear | `512` | Turn shipped issues into release notes a customer can read. |
| Gmail | `45893410` | Search, read, draft, and manage email. |
