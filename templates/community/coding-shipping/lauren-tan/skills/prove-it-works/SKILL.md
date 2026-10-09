---
name: prove-it-works
description: "Use before calling work done — verify the real artifact, not a green build or self-report."
---

# Prove it works

Use before claiming a fix, feature, or speedup is done.

## Rule

A passing CI check or agent self-report is not proof. Inspect the **real artifact** the user cares about (UI, CLI output, API response, deploy time, production log).

## Steps

1. State a **falsifiable predicate** (“after this change, X behaves like Y on input Z”).
2. Capture baseline if you’re claiming improvement.
3. Exercise the real path yourself (or via the owner’s harness) — same surface users hit.
4. Verdict: **VERIFIED** / **NOT VERIFIED** / **INCONCLUSIVE**. Inconclusive ≠ pass.
5. If verification is flaky or too easy, distrust the observation method before trusting the system.

## For agent products

Prefer evals / computer-use checks that assert user-visible outcomes over unit tests that mock the world away.

## If they have pstack

Use the real `principle-prove-it-works` / verification skills in Cursor for repo work.
