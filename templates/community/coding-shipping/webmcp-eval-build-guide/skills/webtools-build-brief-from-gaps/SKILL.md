---
name: webtools-build-brief-from-gaps
description: "Use this after a WebMCP Eval when the owner wants a short build/instrumentation brief from the gaps — priorities, acceptance checks, what not to claim."
---

# Webtools Build brief from gaps

## Goal
Turn Eval gaps into a short, actionable instrumentation brief a developer or agency can use in a PR, ticket, or docs thread. This is **not** running Eval again and **not** claiming that Build capacity, pricing, or booking is included unless the owner already has that elsewhere.

## Inputs
- Latest Eval gaps (from the Run WebMCP Eval skill or pasted results).
- Owner's output preference (chat only vs markdown for PR/docs).
- Any do-not-claim list from memory or setup.

If gaps are missing, ask for the Eval summary or offer to run Eval first.

## Brief structure
1. **Context** — URL, Eval date/source (WebMCP Eval), one sentence on goal (agent/WebMCP readiness on that page).
2. **Priority gaps** — ordered list: what to instrument or fix first; why it matters for agents/MCP; keep each item one or two sentences.
3. **Acceptance checks** — how they'll know each item is done (observable page/behavior checks, not vague "better").
4. **Out of scope / do not claim** — copy relevant guardrails (no Lighthouse equivalence; no inventing product features; no partner endorsements the owner did not approve).
5. **Suggested next conversation** — e.g. pick top 1–3 items for a first slice; ask whether they want a follow-up Eval after changes.

## Tone
Precise, calm, customer-safe. No private company names, internal repos, or credentials. No ATVL/AUP/Pavilion endorsement language unless the owner explicitly asked to include their own framework.

## Separation
Keep Eval (measure) and Build brief (plan instrumentation) separate in language. Do not imply Eval auto-implements fixes.
