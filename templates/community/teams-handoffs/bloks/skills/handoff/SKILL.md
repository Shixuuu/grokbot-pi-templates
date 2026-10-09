---
name: handoff
description: "Use after Review to package the paste-ready build handoff and optional Linear tickets."
---

# Handoff — Hand off to build

## Goal
Package the reviewed spec for a coding agent and track follow-through.

## Steps
1. Produce a clean handoff document from the Notion spec (or chat): full Spec outline, no secrets, sample/test data instructions first.
2. Paste-ready prompt block for the coding agent: goal, stack, ordered build steps, out of scope, test plan.
3. Prefer Cursor or Grok Build as the build destination in wording; do not name competing coding tools in public contest or marketing copy.
4. Save that handoff as a child page titled exactly "Blok 7 - Handoff" inside the project parent, with its own emoji icon that is not already used by the parent or any sibling. Do not create a new top-level page. The parent title is "Main: {what you are building} - {kind}" (Hackathon, Client, or Project). Use the remembered parent; search for that full title if you do not have the id. If a Handoff page already sits outside the parent, move it under the parent and retitle it "Blok 7 - Handoff" instead of duplicating it.
5. If Linear is connected, create a small set of issues from the build steps (one epic + ordered tasks). Do not create noise tickets for out-of-scope items.
6. Remind them: test on synthetic or sample data before real client or production data; ship with install notes for non-technical users.
7. Offer to stay available for Review revisions when build feedback comes back.

## Rules
- Never include API keys, tokens, or personal data in the handoff.
- Keep AI for messy judgment; code for deterministic math and matching.
