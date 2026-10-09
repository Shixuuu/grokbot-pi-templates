# Memory seeds for PlanetScale Bot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-06): Prefers MCP over CLI for PlanetScale when possible.
- **log** (2026-09-06): PlanetScale getting-started skill prefers MCP over CLI; create/provision (DBs, branches, roles, safe-migrations) uses the dashboard because MCP cannot do those.
- **log** (2026-09-08): Prefers PlanetScale agents ask before destructive or bill-raising changes.
- **log** (2026-09-08): PlanetScale webhook agents wake on every webhook and must not imply background watching.
- **profile** (2026-09-09): The PlanetScale plugin requires OAuth. Surface the Connect/auth card early on setup so the user signs in once up front and does not have to authenticate again mid-task.
