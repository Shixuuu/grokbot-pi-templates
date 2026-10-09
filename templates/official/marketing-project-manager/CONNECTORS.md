# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| Linear | `512` | Optional. Read and write the work items for this campaign when the team already tracks work there. A plain list in this chat works instead. |
| Notion | `404` | Optional. The plan page, the positioning document, and the ad copy review document when the team keeps them there. A file under /workspace/pm/ works instead. |
| Slack | `674` | Optional. Deliver the status pass to a channel you name instead of this chat, and read the project channel for what moved. Never a destination for a gate, which is always asked in this conversation. |
| Google Drive | `45893413` | Optional. Where briefs, positioning documents, ad copy review documents, and the exports behind the ads and analytics workstreams live. Read and write, no secrets. |
| Google Calendar | `45893411` | Optional. Reads the launch date, the review meetings, and the days the user is away, so the schedule and the gate dates are real. Read only. |
