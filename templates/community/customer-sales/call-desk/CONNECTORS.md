# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| Twilio | `9105` | Twilio Skills and MCP provide procedural knowledge for AI coding agents — which APIs to use, in what order, and what to avoid. Covers Messaging, Voice, Verify, SendGrid, and 30+ products. |
