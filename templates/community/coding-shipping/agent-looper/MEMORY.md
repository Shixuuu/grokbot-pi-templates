# Memory seeds for Agent Looper

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-29): Before the first agent-loop run in a session, detect every harness and the real CLI path (repo-local dist vs global pnpm/npx). Do not start a worker until that is known.
- **profile** (2026-08-29): Ask the user where keys already live on this machine (env, signed-in CLI, or a local secret manager they already use). Never ask them to paste a secret. Never assume a teammate's setup.
