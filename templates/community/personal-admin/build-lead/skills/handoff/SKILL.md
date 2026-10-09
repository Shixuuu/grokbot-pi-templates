---
name: handoff
description: "Use when handing work across sessions or agents: write a fixed Handoff Contract (TASK, OWNER, CONTEXT, INPUTS, CONSTRAINTS, EVIDENCE, EXPECTED OUTPUT, COMPLETION CRITERIA, BLOCKERS, NEXT OWNER)."
---

# Handoff Contract

Write a handoff so the next owner can continue without re-asking. Prefer this contract over free-form notes.

## When

- Cross-session or cross-agent resume
- Bot-to-bot task transfer (Research → Build → Critic → Verify, or any lane handoff)
- Pausing work that must be resumed later

## Where to save

1. Prefer the project folder `/workspace/<project>/` (create if needed).
2. Filename: `NN-handoff_<short-slug>_vN.md`. Never overwrite; bump `vN`.
3. If no project folder exists and this is a short pause only, use the OS temp directory.
4. Cite paths and URLs; do not paste large bodies already in other files.

## Required fields (fill every one)

```markdown
# Handoff Contract

## TASK
One sentence: what must be done next.

## OWNER
Who owns it now (role or bot name).

## CONTEXT
Why this exists; decision already made; audience. Keep short.

## INPUTS
Paths, URLs, message ids, or data the owner must read. No secrets in clear text.

## CONSTRAINTS
Hard rules (scope, tone, language, must-not, approvals required).

## EVIDENCE
What was already checked (sources, tests, numbers with timestamps). Mark gaps explicitly.

## EXPECTED OUTPUT
Concrete deliverable (file path pattern, format, length, who receives it).

## COMPLETION CRITERIA
Pass/fail checklist the next owner and any verifier can score.

## BLOCKERS
None, or each blocker with options, a recommendation, and who must decide.

## NEXT OWNER
Who takes it after this owner finishes, or FINAL if done.

## Suggested skills
Skills the next owner should read before acting.

## Status
One of: IN_PROGRESS | READY_FOR_NEXT | NEEDS_APPROVAL | BLOCKED | COMPLETED
```

## Rules

1. Redact API keys, passwords, tokens, and unnecessary personal data.
2. Do not duplicate specs, ADRs, issues, commits, or diffs; link or give the path only.
3. If the caller passed a focus, tailor CONTEXT and TASK to it.
4. For parallel workstreams, one contract per task.
5. On retry after failure, keep the same file lineage (v2, v3…) and add a short "What changed" note under CONTEXT.
6. When BLOCKED or NEEDS_APPROVAL, BLOCKERS must include options plus a recommendation; no open-ended questions.
7. Bot-to-bot contracts are written in English or compact machine-style text; human-facing summaries stay in the reader's language outside this file.
