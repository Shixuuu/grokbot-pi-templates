---
name: ai-native-sdlc-em
description: "use this when acting as engineering manager of an agent coding team and you need the Plan–Design–Build–Test–Deploy–Maintain loop, not just a single PR"
---

Code is not the bottleneck; plan, review, and merge still run at human speed. Run a loop: each stage commits an artifact the next stage reads, humans sit at the gates, and the agent that wrote the code cannot approve it.

## Roles

- **Product owner (the owner):** accepts `intent.md` and `spec.md`; the only merge and production gate.
- **EM (coding EM bot):** commits artifacts, fires the next play, triages review, starts the next independent slice without waiting on merge; runs a ~15-minute heartbeat that reads the kick ledger first.
- **Implementer:** Opus 5.5 via Claude Code by default (optional Muse/DSH). Plan mode, then implementation from `plan.md`. Cannot approve its own PR.
- **Reviewers:** two independent reviewer CLIs, blind dual-LGTM on the GitHub PR only, after it exists.
- **Research originator:** writes Stage-1 `intent.md` (problem, why, constraints).

## Artifact loop

```
intent.md → spec.md → plan.md → PR + tests → dual review → human merge → pipeline
                                   ↑ incident / broken demo / failed check ┘
```
Accepted intent triggers design; accepted spec triggers plan; accepted plan triggers implementation; a PR URL triggers reviewers; dual LGTM + owner merge triggers ship. Commit artifacts next to the code, **except** on repos that forbid them (e.g. the product SDK repo): keep them in the vault or local-only.

## Clay plays (always)

1. `CLAUDE.md` at repo root: build/test/lint, conventions, "things the agent gets wrong." Under a page. Repeated mistakes go here.
2. `REVIEW.md`: identical passes every PR against spec + plan. P0/P1 block; P2s get a fix pass; cap nits.
3. Skills for advisory policy; hooks for must-hold rules (no secrets in the diff, no push to main, no weakening tests during a fix).

## Build and Deploy

0. Read the kick's handoff packet: work from its artifacts, don't reopen its decisions, ask back on its open questions. Legacy kicks without a packet run as before.
1. No intent/spec/plan for a non-trivial slice → write them first.
2. Implementer commits, pushes, opens the PR; doesn't wait for reviewers.
3. Reviewers on GitHub after the PR URL exists.
4. Triage → fix pass on the same branch/session → repeat until dual LGTM.
5. Dual LGTM → ping the owner. Merge only if they asked or a standing order allows it.
6. Don't stall the next independent slice on a previous merge.

Reuse one session id per tool per task; never cold-start follow-ups.

## Test

Done = the repo's one-command test/build is green (code decides done). Bug fixes: failing test first, then the fix, without editing the test. Changes to `CLAUDE.md`, skills, or hooks deserve a replay/regression check, not just a prompt tweak.
**Reproduce before fix:** a `job_type=bug` kick needs a repro (steps, command, logs or failing test, env/versions incl. commit SHA) saved to the vault or as a failing test and linked in `packet.repro` before the implementer launches. A cheap seat may run it.

## Maintain

PR babysit triggers are deterministic (CI red, merge, a named metric). A merged PR or broken demo that needs more work becomes the next `intent.md`, not a chat-only follow-up.

## Exception paths

| Symptom | Action |
|---|---|
| Bug repro fails after ≤2 attempts | Don't launch the implementer. Ledger `blocked` + `repro_failed` + attempt record. Never fix an imagined failure. |
| Repro needs creds/prod/paid action | RED: `blocked` + `repro_needs_approval`; ask via the chief of staff. |
| Env/version mismatch | Record both envs; no failure on buildable env = repro failed. |
| Already fixed on main | `done` + note with the fixing ref. |
| Kick posted, no seat, at heartbeat | Launch it or mark `blocked` with a note; never "idle". |

## The EM does not

- Start reviewers before a PR URL, or forward one reviewer's findings to the other.
- Treat dual LGTM as merged.
- Put the owner on the critical path of mid-build approvals.
- Leave recurring findings in fix prompts instead of `CLAUDE.md`/skills.
