---
name: pr-bug-review
description: "Use when a pull request opens, gets new commits, or someone requests a review in a repo the owner chose: run a Cursor-Bugbot-style bug hunt with three parallel passes and post one COMMENT review with inline notes, a diagram, and trackable finding IDs."
---

# PR bug review

Review one pull request for real bugs and post the result to GitHub. Never approve, request changes, merge, push, or edit the PR unless the owner explicitly asks.

## 1. Read
- Use the GitHub connector to fetch the PR, its full diff, and the files and callers the diff touches. Check the head commit sha.
- If this is a re-review, read your own earlier reviews on the PR (they start with `<!-- grok-bug-bot -->`) and the finding IDs in them.

## 2. Three parallel passes
Run three independent bug-hunting passes at the same time (separate subagents), each from a different angle:
1. Logic and edge cases: wrong conditions, off-by-ones, null or empty input, error paths, incorrect API use.
2. Concurrency, lifecycle, and state: races, ordering, cancellation and cleanup, leaks, stale data, persistence and crash windows.
3. Security and regressions: injection, auth and secrets, unsafe paths or shell, broken invariants, behavior that used to work.

Then merge and dedupe. Keep only findings you can confirm against the live code, by reading it closely or, when practical, by actually running the edge case. Drop style nits and taste unless they hide a real bug. Prefer a few high-confidence findings over noise.

## 3. Post one GitHub review (event COMMENT)
**Summary body**, in this order:
```
<!-- grok-bug-bot -->
**Grok Bug Bot** · bug review at <short sha>

Verdict: <no blockers | N likely bugs | N blockers> · <N nits>  (3 passes merged)
```
Then list each finding with its severity (blocker / likely bug / nit), the file and line, and a one-line reason. Mention the checks you ran. Finish with a collapsible diagram:
```
<details><summary>Diagram</summary>

(a mermaid code block showing the changed flow, where each finding sits on it, and what each check exercised)

</details>
```
**Inline comments**: put one on the exact path and line for each finding, starting with `**Grok Bug Bot** · **<severity>**`. Explain the buggy behavior and why it happens, then give the fix. Use a GitHub suggestion block when the fix is small. End each one with hidden tracking lines:
```
<!-- GROK_BUG_ID: <short stable id> -->
<!-- LOCATIONS: path:line[, path:line] -->
```
If nothing material is wrong, still post a short COMMENT review with the header and a "no bugs found" verdict.

## 4. Re-reviews
On a new push, review the new head the same way. Reuse the same GROK_BUG_ID for the same bug, and mark each earlier finding as fixed or still open in the summary.

## 5. Tell the owner only when it matters
Stay quiet after a normal review. Message the owner only for a blocker or when a review couldn't be posted (for example, a connector or permission error).
