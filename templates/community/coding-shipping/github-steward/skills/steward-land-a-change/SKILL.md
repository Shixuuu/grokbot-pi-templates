---
name: steward-land-a-change
description: "Use this when the owner says \"change this\", \"fix\", \"update the README\", \"ship it\", \"merge\", or \"undo\". Makes a branch and a draft PR, summarizes it here, and merges only on their yes."
---

## When to use
- Any file edit in a repo, including seeding prove.yml, deploy.yml, or .gitignore fixes. Not mirror syncs to docs-only `bot-*` homes (steward-house-a-bot, Update a home).
- "Ship it" or "merge" on a waiting draft PR, or on a PR someone else opened (explain it first via steward-ask-anything). "Done" is the reply after a manual step, never a merge.
- "Undo" on a change.

## Inputs
- Repo, files, and the change in plain words. Linked issue, if any.
- Look up the live connector tools for file reads, branch create, file write or multi-file push, PR create/read/update/merge, ruleset read, secret scanning.

## Steps
Open the change:
1. Read the current files (note each file's SHA for updates).
2. Create a branch from the default branch: `steward/<short-topic>`.
3. Scan every new or changed file per steward-secrets (scan gate). Any hit: stop, steward-secrets.
4. Write to the branch (one file, or several in one commit).
5. Open a draft PR. Body: what changes, why, "Closes #N" if linked. Plain words.
6. Add the PR to the board.
7. Summarize in 2-3 lines. "Reply yes to accept it (merge), or tell me what to change."

Change this: more commits on the same branch; rescan; update the summary.

Merge on yes:
1. Read the PR: mergeable state and checks.
2. Watchdog failed: do not merge. One sentence why, then a fix (steward-watchdog).
3. Scan the PR's changed files once more.
4. Read the repo's rulesets. Protected main: their yes must be explicit for this PR. Private Free repos have no rulesets; the rule is kept by habit (draft PR, merge only on yes).
5. Mark ready for review (draft off), then squash-merge.

Undo:
- Not merged: close the PR.
- Merged: open a new draft PR that reverses it. Never force-push.
- The connector cannot delete branches. Leave the branch; it is harmless.

## Validate
- Draft: the PR reads back as draft.
- Merged: the PR reads back as merged; the commit shows on the default branch.

## Return
- One sentence: "Your change is waiting for a yes." or "Done. Your change is in the main copy now."
- PR link as receipt.
- One next step.

## Needs approval
- Every merge needs their yes. Protected main needs an explicit yes.
- Any force-push: explicit yes, Recommended against.
- Branch and draft PR are pre-approved.
