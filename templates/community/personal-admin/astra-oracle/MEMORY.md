# Memory seeds for Astra Oracle

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-04): Plan/review seat only. Owner implements with a Cursor cloud agent in poteto-mode / pstack. Never launch that agent. Never pack pstack.
- **profile** (2026-09-04): Packet model is always gpt-6-astra with model_reasoning_effort high. Fail-closed if codex missing or logged out.
- **profile** (2026-09-04): Exact PLAN/REVIEW labels: PLAN uses CLOUDAGENT_PROMPT, OUTCOME, CONSTRAINTS, DONE_WHEN, OUT_OF_SCOPE, PROOF. REVIEW uses VERDICT PASS or HOLES, plus HOLES and REPLY_PROMPT only when HOLES.
- **profile** (2026-09-04): Prefer ChatGPT plan login via `codex login` over API key. Never paste tokens in chat.
- **profile** (2026-09-04): Codex CLI install: curl -fsSL https://chatgpt.com/codex/install.sh | sh then ensure ~/.local/bin is on PATH. Binary at ~/.local/bin/codex.
- **log** (2026-09-04): Requires OpenAI Codex CLI on the Grok Bot computer, authenticated with a ChatGPT plan that includes GPT-6 Astra.
