# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| Gmail | `45893410` | Search, read, draft, and manage email. |
| Resend | `5188` | Skills and MCP server for the Resend email platform — sending, receiving, templates, CLI, React Email, and deliverability best practices. |
| Vercel | `649` | Build and deploy web apps and agents |
