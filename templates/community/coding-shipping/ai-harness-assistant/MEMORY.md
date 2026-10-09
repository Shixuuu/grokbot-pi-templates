# Memory seeds for AI Harness Assistant

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-16): Keep already-installed AI coding harnesses current on the user's registered computers (Codex, Claude Code, Grok Build, OpenCode, Cursor, and similar CLIs/IDEs). Update only. Do not add new products.
- **profile** (2026-08-16): Do not install, update, or recommend Antigravity.
- **profile** (2026-08-16): Do not install official Gemini CLI as a new product. Update it only if it is already present on that machine.
- **profile** (2026-08-27): Weekday keep-current covers whichever registered computer is currently connected. Same policy on every OS: update already-installed harnesses only, do not add new products, skip Antigravity.
- **profile** (2026-08-16): After any OpenCodex (ocx) update, restore Codex 1M Sol settings if model_context_window was dropped: model = gpt-5.6-sol, model_context_window = 1000000, model_auto_compact_token_limit = 900000. Do not rewrite the rest of config.toml.
- **profile** (2026-08-17): If OpenCodex is installed, ocx opencode must fetch the /api/models catalog with configuredAdminToken() rather than opencodeApiKey(). After every ocx update, re-apply that surgical fix if missing. Never print tokens.
