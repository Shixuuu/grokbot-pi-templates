---
name: fab-four
description: "Use when the user asks a Fab Four (or legacy Council) question, prefixes with \"Fab Four:\" / \"Council:\", or wants a multi-model parallel poll across ChatGPT, Claude, Grok, and Muse Spark with agreement/disagreement/call."
---

# Fab Four

Fire four model APIs in **parallel** on every Fab Four question. Do not call them one after another. Do not skip a lab just because another already answered.

Treat `Fab Four: …` as the question being everything after the colon. Otherwise use the user's full question. Also accept legacy `Council: …` the same way.

## Endpoints

1. **ChatGPT / OpenAI**
   - `POST https://api.openai.com/v1/chat/completions`
   - `Authorization: Bearer $OPENAI_API_KEY`
   - model: `gpt-5.6-sol`
   - Prefer `max_completion_tokens: 1200` (this model rejects `max_tokens`).
   - body: `{ "model": "gpt-5.6-sol", "messages": [{"role":"user","content": USER_QUESTION}], "max_completion_tokens": 1200 }`

2. **Claude / Anthropic**
   - `POST https://api.anthropic.com/v1/messages`
   - `x-api-key: $ANTHROPIC_API_KEY`
   - `anthropic-version: 2023-06-01`
   - model: `claude-sonnet-5`
   - body: `{ "model": "claude-sonnet-5", "max_tokens": 1200, "messages": [{"role":"user","content": USER_QUESTION}] }`

3. **Grok / xAI**
   - `POST https://api.x.ai/v1/chat/completions`
   - `Authorization: Bearer $XAI_API_KEY`
   - model: `grok-4.6`
   - body: `{ "model": "grok-4.6", "messages": [{"role":"user","content": USER_QUESTION}], "max_tokens": 1200 }`

4. **Muse Spark / Meta**
   - `POST https://api.meta.ai/v1/chat/completions`
   - `Authorization: Bearer $MODEL_API_KEY`
   - model: `muse-spark-1.2` (not `1.3` — that ID 404s)
   - Prefer `max_tokens: 4000` or higher: this model may spend many tokens on reasoning before content; empty content with finish_reason length means raise the limit and retry.
   - body: `{ "model": "muse-spark-1.2", "messages": [{"role":"user","content": USER_QUESTION}], "max_tokens": 4000 }`

## Credentials

Use env secrets only. Never print, log, or echo a key. Ask once through the bot secrets prompt — never in chat.

Required (direct path):
- `OPENAI_API_KEY`
- `ANTHROPIC_API_KEY`
- `XAI_API_KEY`
- `MODEL_API_KEY`

If a key is missing, skip that lab and say so in the output.

Optional cheaper path: one `OPENROUTER_API_KEY` against `https://openrouter.ai/api/v1/chat/completions` with models:
- `openai/gpt-5.6-sol`
- `anthropic/claude-sonnet-5`
- `x-ai/grok-4.6`
- Meta Muse via OpenRouter only if a matching Muse ID is listed; prefer direct `api.meta.ai` + `muse-spark-1.2` when `MODEL_API_KEY` is set.

Prefer OpenRouter when that key is present and the four direct keys are not.

## Output format

### ChatGPT
<raw answer or skip reason>

### Claude
<raw answer or skip reason>

### Grok
<raw answer or skip reason>

### Muse Spark
<raw answer or skip reason>

### Agreement
Bullets of claims at least two models share.

### Disagreement
Bullets of conflicts. Name who said what.

### Call
Your synthesis. Be specific. If the four split, say which side you take and why.

## Rules

- Same user question to every model. Do not rewrite it per lab unless a provider rejects the payload.
- Wait for all four (or all that have keys) before synthesizing.
- Sensitive actions still need approval.
- After the first successful run, ensure this skill exists and offer a Routine trigger on the phrase "Fab Four" if one is not already set.
