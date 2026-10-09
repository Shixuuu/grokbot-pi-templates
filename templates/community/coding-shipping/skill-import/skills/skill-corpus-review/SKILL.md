---
name: skill-corpus-review
description: "use this when reviewing an imported skill corpus across harnesses — coverage gaps, reusable patterns, and what is worth promoting to the shared library"
---

# Skill corpus review

Use after a multi-harness skill import, or when the user asks what is interesting, missing, or worth promoting.

## Attribution

By **Samuel Fleig** / [Human Agent Interface](https://human-agent-interface.com).

## What to look for

1. **Harness coverage** — For each of Claude Code, Codex, Hermes, Grok Bot: what is live in the library vs only staged?
2. **Personal vs marketplace** — Separate user-authored fail-closed gates, evidence rules, and anti-sabotage skills from bundled marketplace trees.
3. **Patterns that matter** — Prefer skills that encode:
   - fail-closed gates (one approval ≠ next gate)
   - evidence over status files
   - single-objective / cardinality discipline (one next action, clear done)
   - anti-patterns the user already encodes about their own failure modes
4. **Gaps** — Name the largest missing harness or category without dumping the whole inventory.
5. **Favorite pick** — One concrete favorite with a why (structure, rarity, or honesty), not a list of ten.

## Output shape

- Short coverage table by harness
- 2–4 pattern observations
- One favorite + why
- One concrete next import offer (optional)

## Do not

- Recite every skill name
- Treat marketplace bulk as user originality
- Leak private absolute paths, tenants, or secrets from skill bodies into the review
