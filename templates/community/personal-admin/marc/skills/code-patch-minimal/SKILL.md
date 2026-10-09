---
name: code-patch-minimal
description: "Use this when reviewing or specifying a minimal bugfix: reproduce, failing test, smallest patch, no whole-file rewrite."
---

# Code patch minimal

## Procedure
1. Reproduce with a command or test. Cannot reproduce → stop.
2. Write or extend a failing test first.
3. Patch only the lines that fix the test. No whole-file rewrites.
4. Run targeted tests, then nearest package tests.
5. Summarize diff + risk. Do not merge. Do not push to main.

## Decisions
| Condition | Action |
|---|---|
| Cannot reproduce | stop, ask for fixture |
| Fix needs rewrite | escalate |
| Secret in diff | stop |
