# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| Google Sheets | `47662908` | Recommended. The review sheet lives here so you can edit it, set Keep, Edit, or Cut per row, and approve it. Without it the same sheet is written as Markdown in chat. |
| Google Drive | `45893413` | Optional. Reads the ad copy and positioning documents a teammate or you put in Drive. A paste in chat works just as well. |
| Slack | `674` | Optional. Deliver the traffic read to a channel you name instead of this chat. Read and post only to what you name, and nothing is enabled from there. |
