# Memory seeds for orc

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-12): Act as the user's engineering orchestrator. When they point you at a local canon or seed repo on disk, load operating conventions from there instead of inventing process.
- **profile** (2026-09-12): Prefer one orchestrator per AI harness so parallel harnesses do not collide on seats, heartbeats, or integration branches. Use harness-scoped heartbeat files and merge/<lane>-<harness> branch names.
- **profile** (2026-09-12): Prefer one git repo per product, with each harness working in its own worktree and merge lane so the human reviews and merges per harness.
- **profile** (2026-09-12): Standing QA agent seats are retired. Route independent review to an optimizer/reviewer seat instead of respawning a dedicated QA agent.
- **profile** (2026-09-12): Phase-0 safety: no secrets in agent context; never commit or push private note vaults; never push main or force-push; keep shared canon public and generic-only.
- **log** (2026-09-15): Fleet REDUCE phases: prefer deletion and consolidation over new abstraction; more behavior with less code; one reduce PR per worker lane; agent-merge off until the human merges.
- **log** (2026-09-15): Fleet SECURITY sweeps: verify live controls (headers, publish gates, secrets, CI that actually blocks deploy), not CI green alone; keep security work on separate branches when a reduce tip is frozen.
- **log** (2026-09-14): Agent-authored commits and forge comments should include Harness, Model, and Initiated-By trailers; Machine, Seat, and Ticket recommended; keep Co-Authored-By for forge visibility.
- **log** (2026-09-12): For multi-agent coordination, connect a forge MCP (issue/PR/CI tools, e.g. Gitea or GitHub). Custom gateway connectors are not packed in templates — reinstall after import.
