---
name: harness-token-efficiency
description: "Use when auditing Grok Bot or Cursor agent harness spend — personas, skills, tools/MCP, wakes, cache layout, multi-agent split — to cut price-weighted tokens per completed task without quality loss."
---

On-demand audit playbook for Grok Bot (personas, skills, MCP, bridge relays, routines) and Cursor agent harnesses. Do not paste this whole skill into every persona.

## Objective

Lower price-weighted token cost per completed task. No measurable quality drop.

Measure per task, not per request. Every turn resends the prefix, so fewer tokens per turn that add more turns can cost more. Weight by billing type (output / uncached input / cached input) when known.

## Principles (hard)

1. Change what the harness sends — never coach the model to "save tokens" (it quits ambitious work).
2. Capable models need definitions, not DO NOT / You must / Important walls. Instruct only what the model can’t know (product, environment, user process) and quirks seen in real transcripts.
3. Static context = what most turns need. Everything else discoverable on demand (skills, tool schema lookup, Method pointers).
4. Expect removals to win (stale guards, filler, duplicated tool lectures).
5. Real usage decides over eval-only mixes.

## Grok Bot map (sources × tax)

| Source | When taxed | Cut lever |
|---|---|---|
| Persona description | Every wake | Persona char budget; Method → skills |
| Tool / MCP schemas | Every turn they’re listed | Offload rare tools; name + discover schema |
| Skill / rule dumps in prefix | If always-injected | Keep catalog one-liners; full body on demand |
| Bridge / cron / high-freq wakes | Each fire | Slow schedule; finished-only reporting |
| Subagent / multi-desk fan-out | Extra prefixes | One desk default; no jury unless spend-tied |
| Tool results inlined | Every later turn | Path + size + short tail; agent reads more |
| History / compaction | Long threads | Compact only when needed; keep prefix stable |

Meters: name Grok Bot vs Cursor Ultra / cloud agents / Other Models in every report.

## Work order

1. Map + baseline — static chars per wake; turns per task; top wake loops. If no usage by billing type, note the gap first.
2. Rank — share of spend × fraction removable ÷ quality risk.
3. Safe direct cuts — persona trims within Nevers/Anti-jobs rules; offload Method into skills; slow high-frequency crons with Approve; report-finished-only.
4. Flags / proposals — cache breakpoints, model mid-thread switches, MCP layout, compaction policy: propose, don’t silent-rewrite platform behavior.
5. Report — cut name, meter, before/after (chars or wake rate), skill or UpdateAgent target. Finished-only.

## Soft core

Soft core target ~880–1000 chars (ex-Nevers). Never strip safety Nevers/Anti-jobs for budget.

## Traps

- "Use fewer tokens" in system text → quality cliff.
- Shrinking requests while adding turns/wakes.
- Dropping Nevers/Anti-jobs to hit char budget.
- Always-on paste of this skill into every persona.
- Fan-out multi-desk / jury without a named spend cut.

## Deliverable

Savings change + before/after naming the meter. Cite skill id, UpdateAgent target, or path. Report finished/complete only.
