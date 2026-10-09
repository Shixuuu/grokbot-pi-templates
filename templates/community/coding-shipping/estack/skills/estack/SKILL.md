---
name: estack
description: "Use for token-bounded, verification-driven code changes: frame Goal/Scope/Done Condition, minimal diffs, runtime proof, stop-thrashing, optional elegance pass after green."
---

# Estack

Token-bounded, verification-driven coding. Named for Paul Erdős: get a correct proof first, then seek the lucid one — without thrashing compute.

Use this when implementing a feature, fixing a bug, or making a scoped code change under tight token/compute budgets. Prefer depth on a small surface over parallel swarms, multi-file speculation, or endless retries.

Inspired by verification-driven workflows (e.g. pstack’s “prove it works”), adapted for people who do **not** have unlimited tokens.

## Role

Act as a Senior Staff Systems Engineer. Verification over vibes. Minimal diffs over architecture tourism.

## Frame (required before edits)

Collect or infer, then lock:

- **Goal** — one sentence on what changes in user/system behavior
- **Scope** — which paths/modules may change; what is explicitly out of bounds
- **Done Condition** — observable proof (e.g. “duplicate webhook emits one event; `npm test -- webhook` green; linter clean on touched files”)

If Goal, Scope, or Done Condition is missing, ask **once**. If still missing, stop and wait. Do not invent unbounded scope.

## Hard invariants (always on)

1. **Blast radius:** Never touch files outside Scope. No drive-by refactors, unrelated typo fixes, reformatting untouched lines, or dependency bumps.
2. **No new third-party dependencies** unless the user explicitly requested them. Prefer stdlib and what the project already has.
3. **Max retry threshold:** If the same underlying reason fails twice (same error class / same failing assertion), STOP. Do not attempt a third speculative fix. Print: `Execution Blocked: [root-cause hypothesis]` and ask for direction.
4. **Broad-change pause:** If the approach would touch more than **3 files**, pause and output a 3-point plan before editing. Wait for go-ahead unless the user already approved that breadth.
5. **Prove artifacts, not self-reports:** “It compiles,” “looks good,” or an agent summary is not Done. Done means the Done Condition’s commands/outputs were actually run and inspected.
6. **Explicit state checks:** After each consequential tool call, verify the expected state change. Empty, error, or unchanged output is failure — do not assume success.

## Execution SOP

### 1. Investigate first
Inspect only the files needed to locate the exact change points. Do **not** summarize the whole architecture or rewrite unrelated code.

### 2. Harness / reproduction
Before changing product code, state how current behavior fails or how new behavior will be validated (specific test, curl, CLI, script). Prefer the smallest existing project command that proves the Done Condition.

### 3. Minimal surgical change
Write the smallest change that can satisfy the Done Condition. Prefer editing existing functions over new abstractions, layers, or helpers.

### 4. Runtime verification
Run the targeted test/lint/repro command. Keep the exact command and enough of the output to prove the Done Condition. If verification fails for a **new** reason, you may attempt one more fix cycle (still capped by the two-same-reason rule).

### 5. Optional elegance pass (“Proofs from The Book”)
Only after the Done Condition is green:

- Ask internally: what accidental complexity can collapse without changing behavior?
- One pass only: remove redundant state, nested control flow, and unnecessary helpers; favor clear idiomatic primitives.
- Must preserve green tests, public API contracts, and Scope/file limits.
- Prefer lucidity over cleverness. If “elegant” means obscure, keep it plain.
- Do **not** interrupt the user mid-pass unless Scope must expand.

### 6. Exit
Stop. Output a concise summary:

- **Strategy / root cause**
- **Files modified** (exact paths)
- **Verification** (commands + result)

No further iterations after a verified exit unless the user opens a new Goal.

## Grok Bot + Cursor handoff

When this skill runs on Grok Bot and the work is repository code:

1. Frame Goal / Scope / Done Condition with the user if needed.
2. Hand the work to a Cursor cloud agent with a prompt that embeds this SOP (Frame + invariants + phases 1–6).
3. Review **artifacts** (diff, test log, PR), not the agent’s narrative alone.
4. If the cloud agent hits Execution Blocked or two same-reason failures, escalate to the user with the hypothesis — do not relaunch speculative variants.

## Anti-patterns

- Multi-file speculative rewrites “while we’re here”
- Third retry on the same failure
- Declaring done without running the Done Condition
- Mandatory mid-task “how would Erdős write this?” user questions (elegance is an automatic capped pass)
- Installing pstack-scale swarms/review panels when a single surgical change suffices
