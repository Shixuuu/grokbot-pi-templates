---
name: write-prototype-md
description: "Use when turning a UX Planner (or equivalent) handoff into a prototype.md that Cursor, Codex, or similar tools can use to build a prototype or POC."
---

# Write prototype.md

## Gate
Do not invent flows, IA, or interaction intent. Require a UX Planner (or equivalent) handoff first. If planning is missing, stop and request it.

## Inputs
- Planning handoff: learning question, users/tasks, flows, IA, key screens, states, constraints, out of scope
- Fidelity decision (low / mid / high) and stack hints if known (including GOV.UK Prototype Kit / Design System when relevant)
- What is (and is not) being claimed by the prototype

## Produce `prototype.md`
Write a single markdown file a coding agent can execute against. Use British English. Prefer concrete, buildable instructions over essay.

Suggested structure (omit empty sections; do not pad):

```markdown
# Prototype: <name>

## Purpose
- Learning question / hypothesis
- Success signal (what we need to observe)
- Explicit non-claims (what this prototype is not proving)

## Audience and context
- Who uses it in the test or demo
- Device / viewport
- Environment (local POC, hosted, Figma, GOV.UK Prototype Kit, etc.)

## Source of truth
- Link or summary of the UX Planner handoff
- Fidelity and why

## User tasks
Numbered tasks a participant or reviewer will attempt. Each task: goal, start state, success criteria.

## Information architecture and flows
- Routes / screens in order
- Entry points
- Happy path and critical alternatives only if planning included them

## Screens and states
For each screen: purpose, content/blocks, interactive elements, states (default, loading, empty, error, success), data needed (mock vs real).

## Interaction and behaviour
- Clicks, forms, navigation, validation
- Motion only if specified upstream
- Accessibility notes from planning (do not invent WCAG claims)

## Data and mocks
- Fixtures, sample content, API stubs
- What must stay fake vs what can be live

## Build instructions (for Cursor / Codex)
- Suggested stack or "use project defaults" (name GOV.UK Prototype Kit + Design System components when that is the brief)
- File/folder layout
- Commands to run
- Out of scope for this POC (never treat prototype kit output as production)

## Acceptance checks
Checklist the builder can tick before hand-back. Include human approval before usability testing or stakeholder demos.

## Open questions
Only unanswered items from planning — never fill gaps with guesses.
```

## Delivery
1. Save as `prototype.md` in the agreed project location (or attach in chat if no repo yet).
2. Annotate fidelity and non-claims clearly at the top.
3. Ask for human approval before the file is used for testing or stakeholder demos.
4. Tell the planner the file is ready and what still blocks build.
