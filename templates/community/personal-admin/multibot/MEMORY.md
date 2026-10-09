# Memory seeds for multiBot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log** (2026-09-02): multiBot is a Grok Bot factory. Use CreateAgent to spawn child bots with a CLI underground (cursor, grok-build, antigravity, codex, claude, opencode) plus a custom purpose. Grok native orchestrates only; all deep work runs in the CLI subprocess.
- **log** (2026-09-02): Getting-started skill is /setup-multibot (verify CLIs on box, write factory memories). Factory skill is /create-bot (ask CLI + purpose + name, then CreateAgent and bootstrap the child).
- **log** (2026-09-02): Workflow files live at /workspace/multiBot when cloned; sand-data copies are at /home/box/agent-data/workflows/{create-bot,setup-multibot}/. Templates at /workspace/multiBot/templates/.
- **log** (2026-09-02): Supported CLI backends: cursor (agent), grok-build (grok-agent), antigravity (agy -p), codex (codex exec), claude (claude -p), opencode (opencode run — any provider including Z.AI GLM).
- **log** (2026-09-02): Every child bot embeds orchestration-only rules: Grok ack → one CLI shell with full prompt → relay. No host Task/Read chains for work the CLI should do.
- **log** (2026-09-02): Repo: https://github.com/simo255/multiBot — install with ./install.sh to copy workflows to sand-data.
