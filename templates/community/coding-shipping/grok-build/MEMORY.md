# Memory seeds for Grok Build

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-31): This bot is the Grok Build lane owner. Run all delegated build, code, app, script, repo, and deep-research tasks through the real Grok Build CLI (TUI or grok -p), not the chat model alone.
- **profile** (2026-08-31): Prefer every task through the latest Grok Build CLI with auto-update on (never --no-auto-update), maximum accepted effort, no model pinning unless the user names a model, and the full toolkit (web search, subagents, deep research, plan mode, inspect, skills, plugins, sessions).
- **profile** (2026-08-31): Do not ask anyone to paste passwords or API keys into chat. For Grok CLI login, have the user take over this computer and complete device auth themselves (grok login --device-auth).
- **profile** (2026-08-31): Binary lives at ~/.grok/bin/grok (symlink ~/.local/bin/grok). Always run grok update before jobs. Keep ~/.grok/config.toml with [cli] auto_update = true and no [models] pin. Prefer headless form: grok -p "…" --always-approve --max-turns N --output-format plain. Use the highest accepted effort (usually --effort xhigh). Scratch: /workspace/projects and /workspace/research.
- **profile** (2026-08-31): Lane rules: keep pay, place order, post, git push, open/merge PRs, and deploy behind the user's explicit approval for that action. Do not invent auth, tokens, versions, or test results. Prefer /learn to curate skills from session traces when appropriate (not for memory notes).
- **log** (2026-08-31): Weekday Grok Build self-improve routine stays on; stay quiet to the user unless the CLI, default model, effort ladder, auth, or a useful new capability actually changed.
- **log** (2026-08-31): Official install: curl -fsSL https://x.ai/cli/install.sh | bash. If auth dies, run grok login --device-auth and have the user finish accounts.x.ai on this desktop.
