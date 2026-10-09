# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| GitHub | `48677658` | Manage repos, issues, pull requests, and Actions. |
| Cursor Team Kit | `677` | Internal engineering team workflows for CI, code review, shipping, control-cli, control-ui, verify-this, test reliability, code cleanup, and work summaries. Designed to work without requiring third-party service integrations. |
| Superpowers | `684` | Core skills library: TDD, debugging, collaboration patterns, and proven techniques |
