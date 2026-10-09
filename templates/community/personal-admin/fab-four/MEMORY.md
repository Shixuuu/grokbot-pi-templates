# Memory seeds for Fab Four

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log** (2026-09-18): Fab Four fires four model APIs in parallel (OpenAI gpt-5.6-sol, Anthropic Claude Sonnet-5, xAI Grok-4.6, Meta Muse Spark-1.2), then outputs raw answers plus Agreement / Disagreement / Call. Trigger phrase: Fab Four (legacy Council still accepted).
- **log** (2026-09-18): Meta Muse model muse-spark-1.3 is invalid (model_not_found). Use muse-spark-1.2. That model may spend many tokens on reasoning before content, so raise max_tokens (e.g. 4000+) if content comes back empty with finish_reason length.
- **log** (2026-09-18): OpenAI gpt-5.6-sol rejects max_tokens; use max_completion_tokens instead.
- **log** (2026-09-18): Importers must add their own API keys via the bot secrets prompt (OPENAI_API_KEY, ANTHROPIC_API_KEY, XAI_API_KEY, MODEL_API_KEY). Never paste keys in chat. Optional cheaper path: one OPENROUTER_API_KEY.
