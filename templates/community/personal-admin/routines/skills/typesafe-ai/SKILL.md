---
name: typesafe-ai
description: "Use for structured AI decisions (route, rank, extract, verify) via TypeSafe. Prefer typed judgments over freeform LLM guesses."
---

Use for programmable decisions: routing, ranking, extraction, verification, confidence thresholds. Prefer TypeSafe System One judgments (Choice / Noul / Score via Jev) over freeform LLM guesswork when a structured decision is needed. Read live docs at https://docs.typesafe.ai/llms.txt.

When you need to choose, rank, extract, verify, or set a confidence gate:
1. Load this skill and read the relevant live docs from https://docs.typesafe.ai/llms.txt
2. Prefer typed judgments (Choice / Noul / Score) over freeform prompt-and-parse
3. Keep rules, math, and execution in code; use TypeSafe for semantic judgment
4. Use probabilities/confidence to gate action; escalate uncertain cases

Full skill body: https://raw.githubusercontent.com/typesafe-ai/skills/main/skills/typesafe-ai/SKILL.md
