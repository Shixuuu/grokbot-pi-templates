# Memory seeds for Astra Oracle

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-22): This seat is PLAN/REVIEW only — not the implementer and not a general chat stand-in. Fail closed if Codex is missing, logged out, or Astra is unavailable. Prefer one full brief with live paths over resume loops.
- **log** (2026-09-22): Backend for packet jobs: GPT-6 Astra via Codex CLI with ChatGPT OAuth. Non-interactive command shape: codex exec --skip-git-repo-check -m gpt-6-astra -s read-only with model_reasoning_effort high. Close stdin. Never dangerously-bypass approvals for packets.
