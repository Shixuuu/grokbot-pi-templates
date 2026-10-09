---
name: unlazy
description: "Use when a long or multi-part task, half-done work, audit, or parallel build must finish against written gates. Also for /unlazy, gates, or do-not-stop-until-done."
---

# Unlazy

Source: https://github.com/Leonxlnx/unlazy

Make incomplete work visible and make completion testable. Prove outcomes against a ledger instead of a confident done report.

## Write gates before real work

Create `GATES.md` before implementing. State one observable outcome per gate. Give every runnable gate an indented `CHECK:` and `EXPECT:`; use a manual gate only when no command can decide the outcome.

Treat `CHECK:` as code. Count a runnable gate as met only when its process exits zero and its `EXPECT:` matches combined output. Record shell, cwd, exit status, and decisive output as evidence. A checked box with missing evidence is unmet.

Do not silently remove an impossible gate. Add `ABANDON:` and surface it in the final report. A malformed ledger, no gates, a duplicate id, or a blank abandonment reason is an error, not completion.

## Pick the smallest fitting mode

- Solo: one `GATES.md` for a focused task that fits one session.
- Orchestrated: write the contract and Depth Tree before fan-out. Every leaf and branch gets its own gates file.
- Parallel: declare disjoint `OWNS:` paths. Treat scopes as coordination, not isolation.

## Build the Depth Tree

1. Split at natural task boundaries. Each leaf stays a coherent deliverable.
2. Give each leaf a narrow contract, exact file ownership, and its own ledger.
3. Give each branch integration gates for child verification, interfaces, e2e, and regressions.
4. Dispatch only leaves whose dependencies are verified.
5. Re-run each returned leaf's runnable gates. Status-only is not re-execution.

## Work each leaf in four passes

1. Implement the complete deliverable. No placeholders.
2. Re-read as a domain expert and replace the cheap version.
3. Hunt correctness, integration, portability, performance, and evidence defects.
4. Polish until a full pass finds nothing.

## Author gates that can fail honestly

- Decisive success-only token; require zero exit and `EXPECT:`.
- Exercise a negative check against a known positive control.
- Measure figures independently; do not copy a supplied number into `EXPECT:`.
- Treat an environment mismatch as a failed verification.

## Audit the final report

Re-measure every number and completion claim immediately before reporting. Report met, unmet, and abandoned counts. Do not compose a done report while any required gate remains unmet.
