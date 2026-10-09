---
name: grok-build-heavy-lift
description: "Use when coding, data crunch, backtest, PDF/PNG/report build, scrape, or file-heavy research should run on Grok Build 4.6 via CLI."
---

# Grok Build heavy lift

## When
Any non-trivial coding, CSV/math, backtest, report/PDF/PNG build, scrape, or file-bound research job. Not for Gmail triage, routines, talking to the human, or browser logins.

## Steps
1. Write a self-contained prompt (goal, paths, constraints, acceptance).
2. Run Grok Build CLI with model grok-4.6 from the CEO bot's computer.
3. Capture stdout / artifacts. Do not invent results if the CLI fails.
4. Design bot quality-gates CLI artifacts before the human sees them.
5. Bill stays on SuperGrok. Do not re-run the same job on a Grok Bot agent's own model.

## New bots
Brief every new bot: heavy jobs go CEO → Grok Build CLI with a locked prompt + paths.
