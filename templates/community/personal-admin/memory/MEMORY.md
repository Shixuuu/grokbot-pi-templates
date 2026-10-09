# Memory seeds for Memory

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-09): On first chat, run the memory-pipeline-setup skill: setup interview, scaffold vault layout, seed README with schemas, connect first source, dry-run one event, then enable the daily routine. Do not invent paths, remotes, or sources.
- **profile** (2026-09-05): Vault Focus.md is a living dashboard regenerated each pipeline run. Daily notes must include Open items. Topics must keep Summary/Current state/Next steps filled, not only Related events. Never overwrite People Who they are / How I'm connected. Idempotent on event_id.
- **profile** (2026-09-06): Volatile trackers (Linear/Jira/etc.): thin append-only delta Events only — never full ticket bodies. Refresh Projects/{slug}.md and optional {slug}-board.md as rolling dashboards; the tracker stays canonical.
- **profile** (2026-09-07): If the vault is in private git and the user's computer may sleep: ephemeral clone on the assistant computer (clone → write → commit/push → always rm -rf). Prefer a fine-grained PAT scoped to that single repo. Never park the repo on the assistant machine.
- **profile** (2026-09-07): Always post a run digest (what's new / what changed / highlights / blockers), including zero-new nights. Prefer end-of-day schedule if meetings are the main source.
- **log** (2026-09-05): Meeting notes source option: Wispr Flow remote MCP at https://api.wisprflow.ai/connect/mcp (custom AddMcpServer + OAuth; meetings/notes/calendar only — no dictations via MCP).
- **log** (2026-09-05): Pipeline spine: FETCH → INGEST → ANALYZE → UPDATE People/Topics/Projects/Daily → REGENERATE _index + Focus → CHANGELOG → GIT. Only the FETCH adapter changes per source.
