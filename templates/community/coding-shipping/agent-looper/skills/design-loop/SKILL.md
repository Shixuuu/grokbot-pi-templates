---
name: design-loop
description: "Use when creating or tightening an Agent Looper cycle before running the harness."
---

Design a measurable Agent Looper cycle before running the harness. Agent Looper owns the grind; this chat owns the finish line.

Before freezing, prefer an unknowns preflight when verify or deps are unfamiliar. Design in chat, then freeze. Do not edit GOAL.md mid-run — frozen files are restored if a worker edits them (GOAL.md, loop.json, verify.sh, VERIFY.skill.md, RESEARCH.md, PERMISSIONS.md, setup.sh) and that visit fails. Creating a frozen basename that did not exist at loop start (for example planting setup.sh) is also removed on restore and fails the visit, so it cannot persist into the next run. Alternatively, agent-loop-prompt can draft GOAL.md + verify.sh from an idea (judge scaffolds; freeze lint + human confirm; 10-minute wall and abort once GOAL.md + verify.sh pass freeze; still treat verify as the hard gate). Between runs, label a diverse sample of .cursor/loop-exports/ before adding a new verify.sh or REVIEWS.md check (error discovery; see unknowns-preflight). Freeze during a run is unchanged.

The unknowns preflight must include install-agent-looper's detect-all-harnesses step: which workers are actually on PATH and importable from the CLI you will run (cursor, cline, opencode, pi, codex, dsh, muse, claude), repo-local vs global binary, and where keys already live on this machine. Ask the user that last part. Do not assume. Do not paste secrets. Pin runtime in loop.json when they named one so a costPreset cannot silently pick another worker. Muse and Claude are explicit only and are not on costPreset minmax. When loop.json sets runtime cursor, repo defaults that pin OpenCode escalateModel (for example Go minmax) are dropped — use reviewRuntime / reviewModel for a Composer worker plus another judge, not escalateModel. Cursor judge default is grok-4.7 (0.7.0+).

Bundle under .cursor/loops/<name>/:
- GOAL.md — frozen spec
- optional RESEARCH.md / PERMISSIONS.md
- loop.json — verify plus per-loop overrides
- verify.sh — exit 0 means done
- optional setup.sh (or loop.json setup) — harness bootstrap once before the first worker; failure parks waiting and does not spawn a worker
- optional VERIFY.skill.md when verifyMode is skill

GOAL.md needs a four-part finish line: outcome, scoreboard (verify.sh), permission (maxIterations / stagnation), and budget (stop when further work is not worth it). Name wiring before freeze (EDGE DATA, REDUCER, FAILURE POLICY, HUMAN GATE). Include a Goal paragraph with canonical paths, acceptance criteria tied to the verifier, constraints, and out of scope.

verify.sh must be measurable. Exit 0 only when the finish line is met. Prefer repo-local scripts over empty checks or a command that always succeeds. For AI-touched work, consider secret and dependency smoke from the harness templates. Acceptance criteria in GOAL.md must point at this verifier, not at agent self-assessment. Freeze lint rejects gameable greps.

Env vs product: exit 75 (EX_TEMPFAIL), exit 127 (command not found), or a VERIFY_CLASS=env line parks the loop (status waiting, HITL) instead of another worker. Other non-zero exits are product failures and keep iterating. Do not use 75/127 for product failures.

loop.json needs verify (usually bash .cursor/loops/<name>/verify.sh). Repo defaults supply runtime unless this file overrides. Set reviewGate true for visual or impact leftovers. Do not copy false from smoke loops. Optional preview is trust-gated by agent-loop-prompt and is not executed by agent-loop run. Unknown well-formed opencode-go/ and cline-pass/ slugs may soft-gate (warn, $0 until priced); maxCostUsd still rejects worker or escalateModel slugs with no pricing row.

Out of scope: running the harness (use install-agent-looper) and writing a full REVIEWS.md overlay (use review-gate).
