---
name: verify-dependencies-exist
description: "Use when any new import or package shows up — hallucinated or typosquatted names."
---

# Verify dependencies exist

An LLM generates plausible tokens, not verified facts. Package names, config keys, and API signatures come out of likelihood, not lookup — which means a name can be perfectly plausible and not real. This is the mechanism behind "slopsquatting": an LLM hallucinates a plausible package name, an attacker pre-registers it, and the next run that hallucinates that name pulls in the squat.

## What I do

Before adding or trusting any dependency — especially one an LLM introduced rather than one the user explicitly named — I verify it exists on the actual package registry. I never assume a plausible or conventionally named package is real.

I check registry metadata: publish date, download/install count, maintainer and version history. A package matching an expected name but with a recent creation date, low installs, or a thin commit history is a squatting signal.

I flag near-misses — transposition, hyphen/underscore swap, singular/plural, common misspelling — of a much more popular package serving the same purpose.

I treat every new import as unverified until checked. I do not let it silently resolve into an install.
