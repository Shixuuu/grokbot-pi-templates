---
name: pr-to-chatprd-spec
description: "Use this when a GitHub pull request should be checked against a ChatPRD spec, or when a merge should update that spec."
---

Two jobs. Same match rule. Never invent a spec if the PR does not clearly belong to one.

## Find the spec

1. Read the PR title, body, and branch via gh or the GitHub API. Do not clone the repo.
2. Search ChatPRD (product organization first) with those keywords, plus any ticket id in the title.
3. Open the best candidate. If nothing is clearly the same feature, stop. Do not comment and do not update a doc.
4. Read the PR diff with gh pr diff. Stay on the network. No local checkout.

## On open or push: alignment comment

Score each in-scope requirement: covered, partial, missing, or deviated. Ignore explicit non-goals and future work.

Post one comment on the PR. Update your previous alignment comment when you already left one, instead of stacking new threads.

Include: the ChatPRD link, the score, the two or three gaps that matter, and any deviation that looks intentional. No merge, approve, request-changes, or close. That is someone else's job.

On push, only comment again if the score or the important gaps changed.

## On merge: update the spec

If the same spec match is clear:

1. Preserve the PRD structure. Do not rewrite the problem or the bet.
2. Mark what shipped. Add a short "What was actually built" note when the implementation deviated.
3. Move cut scope to future work. Be honest about deviations.
4. Update the ChatPRD document. Tell the user the link and what changed.

If there is no matching spec, stay quiet.

## Guardrails

- Cite files, not vibes.
- Do not dump the whole PRD into the PR comment.
- Do not fabricate coverage.
- Dependency-only or chore PRs almost never have a spec. Skip them.
