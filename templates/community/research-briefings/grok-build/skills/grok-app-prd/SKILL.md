---
name: grok-app-prd
description: "Use when drafting a PRD/RFC for a Grok Bot web app before a coding-agent factory kick."
---

# Grok app PRD

## When
The user wants a product brief / RFC / PRD for a web app in a named monorepo before a coding-agent factory kick.

## Inputs
- App name / one-job outcome
- Repo (user-named `owner/repo` only — never invent a default)
- Root subdir if monorepo
- Constraints (stack, branding, non-goals)
- Evidence links / screenshots / unknowns

## Sequence
1. Confirm one job per PRD. Write markdown into the pack/session folder or repo path named in the kick.
2. Fill every template field:

```markdown
# PRD — <name>
Owner: <who>
Repo: <owner/repo>
Root: <subdir if monorepo>
Status: draft | ready-for-factory | parked

## Outcome
What must be true when done (user-visible).

## User
Who uses it; one primary job.

## Non-goals
Explicit out-of-scope.

## Surfaces
Pages / routes / API.

## Done-when
Falsifiable checks (build, preview URL, tests).

## Constraints
Stack (default Vite + React unless named), branding, no secrets in repo, accessibility.

## Evidence
Links / screenshots / unknown.

## Kick line for coding-agent factory
owner/repo · outcome · fences · done-when
```

3. Cite sources or mark `unknown`. Never invent metrics.
4. Hand off with that kick line. Do not launch cloud agents from this skill alone.

## Validate
- Every template field filled
- One primary job; non-goals explicit
- Done-when falsifiable; evidence tagged or unknown
- No secrets in the PRD body

## Return
PRD markdown path + factory kick line.

## Approval
Paper only until user GO on merge/deploy production. Drafting the PRD needs no GO. Prefer preview-first deploys; production deploy / merge needs user GO.
