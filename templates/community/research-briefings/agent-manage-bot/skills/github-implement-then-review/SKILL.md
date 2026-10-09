---
name: github-implement-then-review
description: "use this when running a Mac CLI implementer (Opus 5.5 via Claude Code by default) with two blind dual-LGTM reviewer CLIs on GitHub PRs"
---

This is the Build/Deploy play of the AI-native SDLC EM skill. That skill owns intent/spec/plan and the full loop; this one owns the PR.

## Blind dual-LGTM

- Two reviewer CLIs (e.g. Codex and a Claude review seat), each kicked **independently** with only the PR URL + intent/spec/plan. Never paste reviewer A's findings into reviewer B.
- **Implementer ≠ reviewer on the same PR.** If a seat implemented, swap in another reviewer (e.g. Kimi) for that PR.
- Dual LGTM = agent-complete, not merged. The owner merges.

## Order (non-negotiable)

0. **Bug jobs reproduce first.** For `job_type=bug`, a repro artifact (exact steps, command, logs or failing test, env/versions) is saved to the vault and/or worktree and linked in `packet.repro` before the implementer launches.
1. **Plan first** when intent/spec/plan exist: implement from the committed `plan.md`.
2. **Implementer ships first:** commit, push the branch, open the PR. Don't wait for reviewers.
3. **Reviewers review on GitHub** after the PR exists. Local CLI reviews are optional extras, never a gate.
4. EM triages, sends a fix pass on the same branch and session, repeats until dual LGTM.

## Handoff packet

Every kick carries a `packet`: from, to, job_type (feature|bug|docs|review|audit), objective, artifacts, decisions, constraints, open_questions, next_gate (+ repro for bugs). Send artifacts, not transcripts. Blind reviewer packets list only the PR URL + intent/spec/plan.

## Session ids

Capture one session id per tool per task at first fire; resume it on every follow-up. Keep a small uncommitted sidecar (e.g. `/tmp/<pr>-sessions.json`). Tool notes:
- Claude Code (Opus 5.5 implementer): `claude -p --permission-mode auto --model <opus-5.5> --session-id <uuid>`, then `--resume <uuid>`. Effort comes from settings at max; don't pass downgrade flags.
- Codex: `codex exec --sandbox workspace-write ...`, record the thread id, then `codex resume <id>`. `-p` on Codex means profile, not prompt.
- Kimi: `kimi -p "<prompt>"`, resume with `-S <id>`. Don't combine `--auto` with `-p`.
- Muse (optional implementer): `muse exec --json --trust-workspace --disable-approval --prompt-file prompt.md`; resume with `--session-id`.
Launch all of these through the tmux + heartbeat skill.

## Implementer

- Work in the assigned worktree/branch from a written prompt file.
- After tests pass, push and `gh pr create`; link the issue and the plan/spec.
- A reviewer finding that repeats twice goes into `CLAUDE.md` or a skill in the same pass.
- Bug jobs: first commit is the failing test from the repro, then the fix, without editing that test. If the repro doesn't fail, stop with `repro_mismatch`.

## Reviewers

Review the GitHub PR (not an unpushed commit); post findings on the PR. Follow `REVIEW.md` if present. P0/P1 block dual LGTM; P2s get a fix pass; cap nits.

## Exception paths

| Symptom | Action |
|---|---|
| Bug repro fails after ≤2 tries | No implementer launch. Ledger `blocked` + `repro_failed` note + attempt record. |
| Repro needs creds / prod / paid or external action | RED: `blocked` + `repro_needs_approval`, ask via the chief of staff. No secrets in notes. |
| Intermittent failure | Reproduced only with ≥1 captured failing run; record the hit rate. 0/N = failed. |
| Fails on reported SHA, not on main | `done` + "not reproducible on <sha>; fixed by <ref>". |
| Kick missing packet fields | Proceed with a `packet_incomplete` note; never block (except the bug repro rule). |

## Don't

- Start reviewers before a PR URL exists, or hold the PR for local reviews.
- Let the implementer approve its own PR, or treat dual LGTM as merged.
- Cold-start a tool when a session id for the task exists.
