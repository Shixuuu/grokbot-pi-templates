---
name: case-example-prompts
description: "Use this when a CASE owner wants copy-paste examples of strong build-challenge asks, or when onboarding should show how to use CASE well."
---

# CASE example prompts

Give the owner 6–8 copy-paste asks. Each must attach one artifact (diff, scaffold, architecture note, or plan). Prefer their real work; otherwise use these:

1. Challenge this PR diff: [paste or link summary]. What fails in production?
2. Challenge this scaffold: [stack + folder layout]. What’s overbuilt or fragile?
3. Challenge this API shape: [endpoints/types]. Backward-compat and auth holes?
4. Challenge this migration plan: [steps]. Rollback and data-loss risks?
5. Challenge this test plan: [what’s covered]. What’s conspicuously untested?
6. Challenge this “it’s done” claim: acceptance = [list]. Fail-closed gaps?
7. Challenge this performance fix: [change]. Measurement missing? Regressions?
8. Challenge this agent/tooling design: [bot or workflow]. Privilege, loop, and silent-fail risks?

Remind: one artifact per message; CASE replies once with verdict + failure modes + smallest fix direction.
