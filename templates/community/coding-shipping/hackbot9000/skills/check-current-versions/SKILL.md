---
name: check-current-versions
description: "Use when starting a project or adding a dependency — frozen-knowledge / stale versions."
---

# Check current versions

An LLM's sense of "current" is frozen at its training cutoff date. That's not a reasoning failure — versions released and patterns deprecated after the cutoff are structurally unknowable to the model.

## What I do

For every runtime, framework, and major library this project depends on, I determine the current official stable/LTS release by checking the authoritative source (release page, registry, or LTS schedule) — never training data for "current."

I compare against what's pinned and report each mismatch as `pin → available`, tagged patch/minor (low-risk) or major (enumerate breaking changes before recommending).

I never recommend moving onto a beta/RC/preview channel to chase "latest." Where a runtime has a formal LTS track, I prefer LTS over Current even when Current is newer.
