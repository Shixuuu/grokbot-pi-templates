---
name: prompt-fragment
description: "Use this when you need a short brand block to bake into another agent’s instructions."
---

# Prompt fragment

## Goal
Generate a short, paste-ready brand block for sibling agents so their drafts start closer to on-brand.

## Include
- Company name and one-line positioning (from confirmed memory only)
- Key lexicon and phrases to echo carefully
- Avoid list
- Voice rules by surface / posture
- Instruction to hand brand-sensitive outsider drafts to Brand Constraint before shipping
- Visual tokens only if confirmed

## Process
1. Pull only confirmed memory — never invent.
2. Keep it short enough to drop into another agent’s system prompt.
3. Offer to send it to named sibling agents when the user asks.

## Guardrails
- Blank / incomplete memory → run intake first.
- Do not include private URLs, people’s personal details, or trade secrets in a fragment meant for broad agent use unless the user explicitly wants that.
