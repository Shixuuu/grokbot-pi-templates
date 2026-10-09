---
name: bk-patch-intake-and-review
description: "Use when another bot or a person hands BuildKeeper a code patch to review, stage, compile-check and land on the integration branch."
---

# BK patch intake and review

The review grading and feedback-skepticism parts are adapted from "requesting-code-review" and "receiving-code-review" in obra/superpowers (https://github.com/obra/superpowers), MIT License, Copyright (c) 2025 Jesse Vincent. Changes: merged into an integration-gate workflow.

## 1. Intake
A patch is accepted for review only if it comes with:
- The SHA and the branch or worktree it lives on.
- The base commit (the current integration tip, or something that cherry-picks cleanly onto it).
- The files touched with +/- counts, and the scope (client-only, server-only, docs-only, or cross-cutting).
- One line on what it fixes and why it's safe, plus a test or lab step if compiling can't prove it.

If anything is missing, ask the contributor once and hold the patch.

## 2. Review (skeptical, read-only)
- Review the range `BASE..SHA` in a separate worktree. Don't review from the contributor's summary.
- Check the contributor's claims against the code: the scope, the files, "no protocol change", "same behavior". Don't agree just to be agreeable. If something is unclear, ask before staging any of it.
- Optionally have the coding CLI do a headless second review of the same range. Treat its findings as input to check, not as a verdict.
- Grade every finding with file:line:
  - **Critical:** a wrong result, a crash, data loss, a security hole, a protocol or recipient change outside the rules, or a mismatch with the claim. Blocks the patch.
  - **Important:** a risky edge case, a missing guard, or no way to test it. Needs a fix or the owner's OK.
  - **Minor:** style, naming, or logging. Note it on the board and don't block.
- Verdict: **Stage**, **Stage with fixes**, or **Park** (with the reason).
- Patches touching build scripts, CI, dependencies, auth, crypto, or removing validation get a deeper second look, and you tell the owner about them.
- Pushing back is fine. Give the technical reason. Anything that conflicts with the owner's decisions goes to the owner.

## 3. Stage
Cherry-pick onto staging (see the git workflows skill), post the old SHA to new SHA mapping, and batch patches that arrive close together into one build.

## 4. Compile
Run the owner-aware build. If it fails, use the build-failure triage skill. Never push red.

## 5. Land
Pass the verification gate, fast-forward the integration branch to the green staging tip, push only to the owner's target, and update the board and public docs in the same push.

## 6. Cutoffs
When the owner sets an end time, announce the patch cutoff (about 20 to 30 minutes before the end, so there's time for one last build). Anything after it goes on the parked list.
