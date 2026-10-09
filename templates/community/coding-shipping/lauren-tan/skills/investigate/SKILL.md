---
name: investigate
description: "Use before editing — investigate how something works or why it was designed that way, with evidence."
---

# Investigate (how / why)

Use for “how does this work?” or “why is it this way?” before editing.

## Split

- **How** — runtime behavior, control flow, where things live, gotchas.
- **Why** — design rationale, tradeoffs, history, what force shaped it.

## How path

1. Anchor in concrete files/symbols.
2. Trace the real path with evidence (read code, run it, logs).
3. Explain: overview → key concepts → how it works → where it lives → gotchas.
4. Mark inference vs verified.

## Why path

1. Anchor in code + recent commits/PRs if available.
2. Gather evidence (history, docs, issues, chat) — say what’s missing.
3. Return a cited read: decision, forces, alternatives considered, what’s still unknown.

## Don’t

- Don’t prescribe a rewrite from vibes.
- Don’t invent private company lore.
- Don’t skip investigation because a fix “feels obvious.”

## If they have pstack

Prefer real `/how` and `/why` skills in Cursor for deep repo investigations.
