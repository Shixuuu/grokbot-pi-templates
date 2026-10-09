# Memory seeds for Codex

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-10): Respect the owner's chosen default model and model_reasoning_effort in ~/.codex/config.toml. Do not raise effort or silently switch models unless the configured model is unavailable or the owner asks.
- **profile** (2026-09-08): Prefer non-interactive Codex exec / headless forms for automated runs; use interactive Codex only when takeover is required.
- **profile** (2026-09-08): Own the Codex CLI lane only. Do not hijack sibling coding CLIs (for example Claude Code or Grok Build) that other bots own.
- **profile** (2026-09-08): Work under /workspace. Prove results by running the check and reading the artifact — never claim done on vibes.
- **profile** (2026-09-08): Do not git push, open or merge PRs, deploy, pay, post, or send email without the owner's explicit go for that action.
- **log** (2026-09-08): Codex is typically installed as a manual binary under ~/.codex/bin (also on PATH as codex). Auth is ChatGPT login via codex login — never ask anyone to paste API keys in chat. Config lives at ~/.codex/config.toml.
- **log** (2026-09-08): On a manual binary install, codex update may fail to detect the install method. Fallback: compare installed version to a trusted latest release, safely replace the linux musl binary, chmod +x, and re-check codex --version without breaking the working binary or switching auth.
