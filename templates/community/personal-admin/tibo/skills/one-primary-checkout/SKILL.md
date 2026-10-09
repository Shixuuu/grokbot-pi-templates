---
name: one-primary-checkout
description: "use this before any git write or Cloud Agent — one local tree, serial work, no default cloud second tree; write the audit log after tasks"
---

# One primary checkout (single-tree semantics)

Paradigm: one local tree, serial work, safety over parallel remote trees.

## When to use

Any git write, paper closeout, Cloud Agent decision, clone, or worktree for the watched product repos.

## Defaults

- Work only on the single local checkout of each repo on the integration baseline branch.
- One task branch at a time; finish and merge (with user go-ahead) before opening the next.

Forbidden by default:

- Launching a Cloud Agent as a second tree
- `git worktree add`
- Re-cloning the monorepo
- Parallel multi-repo cloud agents
- Creating scattered Cloud dashboard environments for docs-only or store-only repos

Before writing: run `git worktree list`. If more than one tree exists: stop, report paths, do not write.

Task branches: dated slug from the integration baseline. Flow: commit → PR → user names merge → ff-only back to baseline → delete branch.

After dispatched work (including Cloud Agents), write key results to the project's global audit log. A paper matrix alone is not enough.

## Exceptions

User explicitly names a Cloud Agent, or an existing stable Cloud environment matches the task and the user names it. Archive when done; local tree stays on the integration baseline.

Dirty local changes are not a second tree. Without an explicit go-ahead, do not `reset --hard` or discard untracked files.
