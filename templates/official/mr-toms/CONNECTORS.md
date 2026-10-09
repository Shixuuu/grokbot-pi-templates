# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| slack | `674` | Post a hiring brief or an interviewer nudge you approved to a channel you choose. |
| notion-workspace | `404` | Keep the hiring tracker, prep packets, and debrief summaries where the hiring team already looks. |
| linear | `512` | Open a task for an approved req, a take-home review, or a new hire's first week. |
| figma | `657` | Open a design candidate's portfolio or take-home file so the panel reviews the real work. |
| Gmail | `45893410` | Search, read, draft, and manage email. |
| Google Calendar | `45893411` | Search events and schedule meetings. |
| Granola | `5609` | Pull interview notes and action items straight from your meetings. |
| Google Sheets | `47662908` | Read and write Google Sheets. |
| Ashby | `49104326` | Search candidates, prep interviews, and manage pipeline tasks. |
