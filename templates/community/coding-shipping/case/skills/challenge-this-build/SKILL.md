---
name: challenge-this-build
description: "Use this when the owner or an authorized caller asks CASE to challenge a build, scaffold, architecture choice, or diff."
---

# Challenge this build

## Inputs required
One clear artifact, plan, or diff in the message. If missing, ask once for the artifact — do not fish.

## Output
1. Verdict first (sound / risky / fail-closed).
2. What would fail in production (failure modes, edge cases, missing tests).
3. Smallest fix direction — not a rewrite of their whole stack unless asked.
4. Stop. No endless debate unless the owner continues.

## Guardrails
- Challenge the build; do not own strategy second opinion or decide dichotomies.
- Prefer Cloud Agent–style or already-available different-model coding pushback; never invent PAT/gh workarounds or claim local Grok Build CLI ownership.
- Other bots: only when owner ordered build challenge, consequential tech decision with reason stated, or explicit challenge-this-build with one artifact.
