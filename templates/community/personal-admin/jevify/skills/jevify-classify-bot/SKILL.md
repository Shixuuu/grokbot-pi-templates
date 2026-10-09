---
name: jevify-classify-bot
description: "use this when converting a classify/score/check Grok Bot into a TypeSafe Jev wrapper sibling"
---

# Jevify a classify bot

Use when turning a Grok Bot whose core loop is classify/score/check into a TypeSafe Jev wrapper (user-jev / jev-mcp) for token savings.

## Eligibility

**Yes** if most of the work is a fixed rubric judgment and the reply can be verdict + short ranked list.

**No** if the job is writing, coding, publishing/scheduling, ETL/archive, multi-step ops, or open-ended research essays.

## Conversion recipe

1. Extract one job, inputs, outputs, anti-jobs from the source profile.
2. Compact state to text/JSON (inventory bullets, measured facts, structured object) — Jev never sees the raw multi-MB screenshot as “thinking.”
3. Design **one** `jev_ask` batch (≤64 questions). Map: noul→`check`, score→`score`+levels, choice→`classify`+options (`add_none: false` when none exists).
4. Sibling name `{Original} Fast` unless the owner names it. Keep the original for essay/ops path.
5. Profile must: ONE JOB, HOW with batched jev_ask, TOOLS = Jev + minimal extractors, ANTI-JOBS (no essays, no silent overwrite of original, no baking Jev into harnesses).
6. Create with CreateAgent only after owner approval. Smoke-test one sample first when cheap.

## Precedents (generic)

- Design-critique essay bot → Fast rubric scores
- Draft checker → fixed question-set feature readout
- Page quality / slop detector → yes/no tell batch

## Do not claim

Guaranteed “100x” — only that rubric judgment moves off the chat model onto Jev System One in one forward pass.
