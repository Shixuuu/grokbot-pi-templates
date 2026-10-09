# Routine: Babysit watched PR

> Watch the live GitHub PR. Surface real review/CI/merge; stay quiet on noise.

A GitHub event fired for the watched PR. Check what happened (review, comment, CI, push, merge, close). If it is material (review requested/approved/changes, CI failed, merge, close, or a real review comment), tell the user in the CTO 1:1 with the PR link and what changed, and ping CEO on merge, close, or a block. Stay quiet on noise (bot summaries, your own edits). Do not clone. Do not open a second PR. If merged or closed, report that and this watch should already self-delete.

Fires on:
- GitHub review-requested, review-approved, review-changes-requested, review-commented, pr-comment, inline-review-comment, review-thread-resolved, review-thread-unresolved, pr-pushed, pr-merged, pr-closed, ci-passed, ci-failed

Ask the importing user for:
- GitHub repository
