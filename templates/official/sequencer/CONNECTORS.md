# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| Gmail | `45893410` | Recommended, and the usual voice source when the user's mail runs here. Reads sent outbound and booked-meeting threads to build the voice card, and stages each touch as a draft. If their mail is elsewhere, about 3 pasted samples do the same job and drafts are staged as text in chat. |
| Google Sheets | `66339841` | Recommended. The sequence tracker lives here when the user works in sheets, one row per contact per sequence. A CSV upload carries the same columns when it does not. |
| Salesforce | `47725205` | Optional, and one CRM option among peers. Supplies ownership, open-opportunity stages for the pause guard, and title winners during discovery. A CRM with no connector runs through a browser sign-in or a CSV export instead. |
| Google Calendar | `45893411` | Optional. Confirms which threads really ended in a booked meeting, so the voice card weights the touches that worked, and blocks review time for sending. |
| Slack | `674` | Optional. Adds team chat to inbox triage when a sequenced contact reaches the user there. Read only, never used to train cold voice. |
