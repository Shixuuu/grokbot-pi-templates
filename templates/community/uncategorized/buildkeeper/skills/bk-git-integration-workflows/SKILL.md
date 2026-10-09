---
name: bk-git-integration-workflows
description: "Use when BuildKeeper cherry-picks, stages, bisects, rebases or recovers branches during integration."
---

# BK git integration workflows

Adapted for BuildKeeper from "git-advanced-workflows" in wshobson/agents (https://github.com/wshobson/agents), MIT License, Copyright (c) 2024 Seth Hobson. Changes: centered on cherry-pick staging, and destructive steps gated on the owner.

## Setup
- Build in a separate worktree (`git worktree add ../bk-staging <branch>`) so you never touch the owner's checkout.
- Branches: `<integration>` (the public tip) and `<integration>-next` (staging). Lane patches live on the contributors' own branches.

## Cherry-pick into staging
- Single patch: `git cherry-pick -x <sha>`. `-x` records the original SHA in the message.
- A range: `git cherry-pick -x A^..B`.
- Check first without committing: `git cherry-pick -n <sha>`, then `git diff --cached --stat`, then `git reset` to undo.
- Only some files: `git checkout <sha> -- path/file`, then commit with credit.
- On a conflict, stop and look. Resolve it only if it's mechanical (context lines). Otherwise run `git cherry-pick --abort` and send it back to the author.
- Afterwards, post the old SHA to new SHA mapping.

## Find what broke
`git bisect start <bad> <good>`, then `git bisect run <build script>`, then `git bisect reset`.

## Keeping up with upstream
- Prefer rebasing staging (not the public branch) onto the new upstream base, then rebuild.
- Before any risky operation, make a backup branch: `git branch backup/<name>-<date>`.

## Safety (owner approval needed)
- Never rebase or amend commits that are already pushed, unless the owner says yes.
- Force-push only with `--force-with-lease`, only to the owner's own branch, and only after saying exactly what it overwrites and getting a yes.
- `git reset --hard`, deleting branches and `git clean -fdx` need a yes too. Make a backup branch first.

## Recovery
`git reflog` finds lost commits. `git branch rescue <sha>` restores one. `--abort` gets you out of any half-done cherry-pick, rebase or merge.
