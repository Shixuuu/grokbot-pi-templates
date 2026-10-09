---
name: pr-review-before-merge
description: "Use when a pull request is ready for review or someone asks to merge. Produce a merge / request-changes / hold decision with fresh evidence."
---

Goal: a merge decision backed by fresh evidence, not an agent saying done.

Write with clarity: what the PR claims, what the diff does, what is broken, what must be true next.

Run in order:
1. Identify the command that would prove the claim. Run it fresh. Read the full output. No completion language without that evidence.
2. Dispatch an independent reviewer with the PR description and requirements, not your session history. Critical: fix now. Important: fix before proceed. Minor: note.
3. Verify each review comment against the codebase before acting. Push back with a technical reason when the comment is wrong for this repo.
4. Regroup the diff: core logic first, then wiring, then boilerplate. Call out tricky, breaking, or race items.
5. Treat CI checks as the source of truth. Loop until they settle.
6. Present merge / request-changes / hold only after tests pass. Do not merge because a cloud agent reported success.

Hold: no unsigned desktop binary, no invented deploy URLs, no merge of a harness change until a real user turn actually finishes.
