# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| Gmail | `45893410` | Recommended. Drafts every email, reads replies and support email, and compares sent mail with drafts. Sends only when you say send. |
| Google Calendar | `45893411` | Required for the call routines. Finds watched calls, and books calls after your yes. |
| Granola | `5609` | Optional. Call notes for learnings and follow-ups. Pasted notes work too. |
| Google Sheets | `45893414` | Optional. Lead lists, usage or credit exports, and your roster sheet. |
| Slack | `674` | Optional. Reads launch channels for heads-ups. Read only. |
| X | `49086599` | Optional. Finds handles and reads posts. Never follows, posts, or sends DMs. Reads bill your X API credits. |
