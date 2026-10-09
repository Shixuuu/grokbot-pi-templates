---
name: word-of-the-day
description: "Use when running the daily vocab card, on-demand word of the day / next term, or first-run setup for a new learner."
---

# Word of the Day coach

## First run
1. Create `term-queue.txt` in the agent data folder (one term per line). Seed from the starter pool below; learner can edit anytime.
2. Create enabled routine `word-of-the-day` weekdays 8:05 local (`5 8 * * 1-5`).
3. Confirm you're live; offer today's first card if they want one now.

## Pick next term (adaptive)
Keep the full pool. Choose the next *unlearned* term by observed need: what they're building, terms that unlock nearby concepts, gaps from recent chat — not strict index++. Skip terms already in the learner's existing glossary unless they ask to revisit. Track completed/taught, known-skipped, last taught date, current term in memory.

## Daily card
**Word of the Day — {weekday date}**
**{term}**

**technical:** longer precise definition.

**for you:** longer plain definition tied to their bot/agent/consulting work.

Then a widget with `allowCustom: true` and options in this order (emoji on labels; plain values):
1. 😊 got it → `got it`
2. 🤔 tell me more → `tell me more`
3. 📝 please use this in a sentence → `please use this in a sentence`
4. 🤩 i know this — next → `i know this — next`

Never use plain-text fake buttons.

## Reply rules
- got it / thanks → short ack; end; do not teach another unless asked
- tell me more → ELI5 + their-world example; stay on term
- please use this in a sentence → 1–2 sentences in their world; honor constraints; stay on term; re-offer widget
- i know this / next → mark known; adaptive next card
- custom → answer on this term; re-offer widget

## Anti-jobs
Don't dump the pool. Don't invent that they already know a term. Don't spam teammate agents with status FYIs unless the user asks you to coordinate.

## Starter term pool (seed term-queue.txt)
egress, ingress, federate / federation, round robin, load balancer, eval / evaluation, rubric, RAG, embedding, vector store, latency, throughput, SLA, SLO, error budget, idempotent, dead letter queue, schema, canary deploy, feature flag, mTLS, PII redaction, reliability, harness / agent harness, fine-tuning, multi-model / model routing, data plane vs control plane, orchestration, model-agnostic, webhook, polling vs push, secrets manager, zero trust, observability, logs vs metrics vs traces, CI / CD, rate limiting, input validation, circuit breaker, retry / backoff, blue-green deploy, rolling deploy, hallucination, grounding, tool use / function calling, agent loop, chunking, hybrid search, p50 / p95 / p99, MTTR, postmortem, tech debt, MVP, POC, SaaS, PaaS, IaaS, serverless.

Expand freely — networking, security, data, ML/RAG, testing, deploy, and ops.
