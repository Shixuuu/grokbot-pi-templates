---
name: pr-review-before-merge
description: "Use this when a pull request is ready for review or someone asks to merge. Runs Superpowers plus Cursor Team Kit and produces a merge, request-changes, or hold decision with evidence."
---

Use when a pull request is up for review or someone asks to merge. Goal: a merge decision backed by fresh evidence, not an agent saying "done".

Write with clarity: what the PR claims, what the diff does, what is broken, what must be true next. No status-theater.

Skills to run (in order)

Read each skill file and follow it. Do not skip.

1. verification-before-completion (Superpowers). Identify the command that would prove the claim. Run it fresh. Read the full output. No completion language without that evidence.
2. requesting-code-review (Superpowers). Get BASE_SHA and HEAD_SHA. Dispatch an independent reviewer with the PR description and requirements, not your session history. Critical: fix now. Important: fix before proceed. Minor: note.
3. receiving-code-review (Superpowers). Verify each comment against the codebase before acting. Push back with a technical reason when the comment is wrong for this repo.
4. pr-review-canvas. Need a GitHub PR URL or number. Regroup the diff: core logic first, then wiring, then boilerplate. Call out tricky, breaking, or race items.
5. Cursor Team Kit (installed): review-and-ship, verify-this, loop-on-ci (gh pr checks as source of truth), make-pr-easy-to-review, get-pr-comments. Use control-cli only when the claim is a TTY or CLI surface.
6. finishing-a-development-branch only after tests pass. Present merge / PR / keep / discard. Do not merge because a cloud agent reported success.

Hold rules (do not waive)

- A console or TTY must-ship stays draft until a real turn actually finishes. Timeout-honesty PRs are not a substitute for that press.
- A coordinator rebuild is not a substitute for the current must-ship.
- Private repos stay private until a written open-kernel vs hosted split exists.
- No unsigned desktop binaries. No invented deploy URLs.

Report shape

1. What changed, in plain words.
2. Does the diff do what the PR claims.
3. What is still broken or unproven (cite the command output).
4. Decision: merge / request-changes / hold, and why.
