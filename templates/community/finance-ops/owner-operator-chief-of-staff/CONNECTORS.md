# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| Gmail | `45893410` | Search, read, draft, and manage email. |
| Google Calendar | `45893411` | Search events and schedule meetings. |
| Google Drive | `45893413` | Search, read, create, and share files. |
| Granola | `5609` | Your meetings in your workflow. Granola gives Cursor access to what your team discussed, decided, and committed to. |
| AgentMail | `48668144` | AI-native email infrastructure for coding agents. Create inboxes, send and receive emails, manage threads, and automate email workflows. |
| Lovable | `26115160` | Drive Lovable from Cursor: create projects, send work to the Lovable agent, manage Lovable Cloud databases, and deploy, all through the Lovable MCP server. |
| ClickUp | `5069` | Connect Cursor to your ClickUp workspace — manage tasks, track time, and collaborate without switching context. |
| Xero | `56809991` | Read and write invoices, contacts, reports, and payroll. |
| Resend | `5188` | Skills and MCP server for the Resend email platform — sending, receiving, templates, CLI, React Email, and deliverability best practices. |
| Supabase | `652` | Access your Supabase projects and perform tasks like managing tables, fetching config, and querying data. |
| X | `49086599` | Search posts, read timelines, pull trends, and manage bookmarks. |
