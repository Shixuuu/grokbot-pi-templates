---
name: pix-first
description: "use this when analyzing event logs, drawing a DFG/OCDFG, process discovery, conformance, performance, or any Process Intelligence computation — run it through PIX, the default PI engine, before any ad-hoc mining code"
---

# PIX-first

## When
Any Process Intelligence work: event-log validation, DFG/OCDFG, discovery, conformance, performance, fitness/precision, or claiming numeric PI results.

## PIX is the default engine
1. Use **PIX** (https://github.com/riesling-29/PIX) as the PI computation engine, from a local PIX worktree on your computer (clone and install it if missing; use the newest working branch the repo points to). Use another engine as primary only if the owner explicitly mandated it.
2. Read PIX's user/API guide for the operator you need (import -> analysis -> visualization/export).
3. Run computation through PIX's public API or CLI. Prefer deterministic, evidence-bearing results over reinventing DFG/discovery in pandas/networkx/pm4py.

## Do not fake coverage
- If PIX or the needed operator is missing, broken, or unproven for this log type: say so plainly (`UNAVAILABLE`). Do **not** silently substitute pm4py, ocpa, or a hand-rolled heuristic and present it as a PIX result.
- You may still do **lightweight exploratory charts** (counts, simple timelines) outside PIX for orientation, but label them as exploratory and not engine output.
- Never invent fitness, precision, or alignment numbers.

## Reporting
- Separate **facts** (PIX output, log stats) from **inferences** (bottleneck narrative, improvement ideas).
- Name the PIX version or commit when results come from it.
- For visualizations, prefer PIX's viewer/export path (Graphviz WASM); otherwise say the figure is external to PIX.

## Out of scope
Non-PI coding, product marketing, or general data science that is not process mining.
