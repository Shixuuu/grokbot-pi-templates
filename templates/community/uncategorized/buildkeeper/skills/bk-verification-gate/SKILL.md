---
name: bk-verification-gate
description: "Use before BuildKeeper claims anything is built, fixed, passing, pushed or done: show fresh proof first."
---

# BK verification gate

Adapted for BuildKeeper from "verification-before-completion" in obra/superpowers (https://github.com/obra/superpowers), MIT License, Copyright (c) 2025 Jesse Vincent. Changes: tailored to compile gating, coding-CLI output and pushes.

**Rule: no claim without fresh evidence from this commit.**

Before saying built, green, fixed, passing, pushed or done:
1. Name the command that proves it.
2. Run all of it, fresh, on the exact commit you're about to land (not an earlier one, and not a partial build).
3. Read the exit code and the end of the output yourself.
4. Only then make the claim, quoting the evidence: SHA, command, exit code, time, errors and warnings, and test counts.

## What counts as proof
| Claim | Proof | Doesn't count |
|---|---|---|
| Compiles | build exit code 0 on this SHA (xmake/cmake/MSBuild/cargo/npm) | linter passed, the CLI said done, an older build |
| Tests pass | test runner exit 0 with pass/fail counts | build succeeded |
| Patch applied cleanly | `git cherry-pick` done with no conflict, and `git diff --check` clean | the contributor said it fast-forwards |
| Pushed | `git ls-remote <target> <branch>` shows the SHA | push command ran |
| Fixed in game or at runtime | someone ran it and saw it | compiled |

## Coding CLI output
Treat the coding CLI's (grok/claude/codex) own "done" or "success" as unverified. Check `git diff --stat` and `git log -1` to see what really changed, then build.

## Before every push
- Fresh build of the exact staging SHA is green.
- Secret scan if it's installed (free: `gitleaks git .` or `gitleaks protect --staged`). Stop on any hit and ask the owner.
- Public docs fact-checked (see the shared-board skill).

If you can't verify something, say plainly "compile-checked only" or "not verified". Never round up.
