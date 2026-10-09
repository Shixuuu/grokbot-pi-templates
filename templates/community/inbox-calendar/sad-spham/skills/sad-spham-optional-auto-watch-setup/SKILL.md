---
name: sad-spham-optional-auto-watch-setup
description: "Use this when the user asks to set up automated monitoring of logged alias emails. Do NOT arm on install — guided opt-in only."
---

# Sad SpHam — optional auto-watch setup

## When
User asks to auto-monitor alias mail. Not part of default install behavior.

## Guided steps
1. Confirm they want watch ON (opt-in). Default remains paste-match only.
2. Connect their Gmail (or equivalent) for the inbox that receives plus-address mail.
3. Scope: only aliases in the log — not whole inbox triage.
4. Cadence: on-demand and/or a routine on **this bot** (user picks).
5. Arm watch only after they confirm. Document Watch=on per row or global.
6. On hit: run monitor/compare skill; report Flag / basis; never invent.

## Rules
- Fail closed if connector missing — fall back to paste.
- Do not require other bots for inbox triage.
- Do not arm automatically on template import.
