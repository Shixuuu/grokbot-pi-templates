---
name: cli-engineer-from-commits
description: "Use when designing, implementing, reviewing, testing, releasing, or diagnosing a coding-agent CLI — mandatory method from real commits."
---

# CLI engineer capability playbook (from real commits)

Derived from ten recent main commits on a coding-agent CLI. Numbers and file coordinates were verified in-repo; estimates are labeled as estimates.

## Four layers
1. **Execution** — own every shell command; know progress and exit reason.
2. **Judgment** — decide completion from evidence for the original request; repair paths where evidence never arrives.
3. **External contracts** — adapt to provider API rules; manage token cost from measurement.
4. **Release** — block bad binaries; minimal fixes for platform defects.

## First principle: claim ≠ observation
Model text, UI copy, and tool Ok/Err returns are not facts. Facts are state changes recorded by the process owner.

| Layer | Do not trust | Trust |
|---|---|---|
| Execution | tool returned Ok | leading `Exit code: N` |
| Execution | sent SIGKILL | leader_reaped / group_absent / pipes_closed |
| Execution | model said tests passed | TestsMeasured passed>0 event |
| Judgment | build exit 0 | original request conditions (HEAD/remote/tracked files) |
| Release | tag pushed | binary `--version` matches tag |
| Experiment | "we fixed cancel" | writes continuing after CLI exit |

Rules: one computation of each fact; confirmed vs unconfirmed are different states; process exit ≠ side effects cleaned.

## Process ownership
Owning a command is not remembering a PID. Own state Starting→Running→Stopping→Finished, cancel flags, stdout/stderr paths. On timeout/cancel: SIGTERM → grace (within cleanup budget, ≤500ms) → SIGKILL → reap/group/pipes confirmation. If cleanup is unconfirmed, block further workspace changes. Never reattach leftover records by PID after restart.

Checklist: run_id/command/cwd/start/deadline/state/exit reason/exit code/cleanup fields present; exit reason separate from cleanup; TERM→grace→KILL; session end / Esc / worker error all clean up; unsupported platforms refuse before run.

## Wait ≠ deadline
`timeout_ms` is the process deadline (user-stated deadlines do not extend because output appeared). `yield_time_ms` can return Running + run_id without killing. Silence is observation, not failure.

## Guidance ≠ enforcement
Prompt fragments advise. Structured failure reasons, bash_wait/cancel, and cleanup gates enforce.

## Evidence before judgment
Exit 0 alone is not done. Preserve exit reasons in aggregates. Do not treat lock-file cleanup as feature progress. Do not claim tests passed without observed test runs. Auto-expanded validation must not replace the original request's completion condition.

## Negative-result preservation
Commit failing reproductions with WORKLOG + receipt kind that states what the evidence does *not* prove. Release notes cite known unrepaired defects. Do not mix "reproduced" with "fixed."

## Release triple-check
Tag, package version, and binary `--version` must agree before publishing assets. Test the version verifier itself. Prefer minimal platform fixes and partial recovery over global config swings.

## Mandatory non-negotiables
1. Claim ≠ observation
2. Process ownership (TERM → grace → KILL → reap)
3. Wait ≠ deadline
4. Guidance ≠ enforcement
5. Evidence before judgment
6. Negative-result preservation
7. Release triple-check

Read this playbook before any design, implement, review, test, release, or diagnose work on a coding-agent CLI.
