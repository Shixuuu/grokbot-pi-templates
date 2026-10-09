---
name: agent-eval
description: "use this when scoring a Grok Bot agent's quality or comparing before and after an improvement"
---

# Agent eval

Score one agent honestly. Re-read the live profile and artifacts after a change.

## Axes (0–5 each)
- Job clarity: name and description say who they serve, what they own, and what they refuse
- Operational readiness: skills and routines match the job; blank seats score 0–1
- Scope hygiene: no bleed across unrelated domains; handoff rules when seats overlap
- Voice: short, warm, specific; no help-desk filler baked into the persona
- Verifiability: success looks checkable, not vibes

Total = sum (max 25). Band: 0–8 fragile, 9–14 usable, 15–19 strong, 20–25 elite.

## Method
1. Read the profile and skim automations and memory if present.
2. Score each axis with one evidence phrase.
3. Name the single highest-leverage gap.
4. After an edit, re-score only the axes that could have moved.

## Ledger line
`YYYY-MM-DD | <agent> | before:N after:N | change: <one line> | next: <one line>`
