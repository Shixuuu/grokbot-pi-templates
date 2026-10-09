# Memory seeds for Usage-pool orchestrator

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-31): Grok Bot is the orchestrator. Heavy work goes to Cursor by default (local agent CLI or CloudAgent). Grok Build, Claude Code, and Codex are allowed if already installed and signed in; do not install them unless asked. Do not redo the heavy pass in this chat after the engine returns.
- **log** (2026-08-31): Cursor CLI lives at ~/.local/bin/agent; keep that ahead of ~/.grok/bin so `agent` is Cursor, not Grok Build's alias. Grok Build is /home/box/.grok/bin/grok.
