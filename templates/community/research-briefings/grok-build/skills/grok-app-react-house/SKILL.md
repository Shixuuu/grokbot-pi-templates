---
name: grok-app-react-house
description: "Use when scaffolding or reviewing Vite/React UI for apps in a named Grok monorepo (house style fences)."
---

# Grok app React house

## When
Scaffolding or reviewing UI for apps in a named Grok monorepo (Vite + React default). This skill is the house style fence for prompts and review.

## Inputs
- Target app subfolder / routes
- PRD or kick line (outcome, done-when, fences)
- Existing patterns in the monorepo (if reviewing)
- Brand / accessibility constraints from the user

## Sequence
1. Apply defaults:
   - Vite + React + TypeScript unless the user names otherwise
   - Ship via Vercel; preview before production GO
   - One app per subfolder when multiple apps share the monorepo
   - No secrets in client bundles; env via the host only
2. Enforce taste bar:
   - Readable at a glance; one primary action per view
   - Prefer system fonts / simple type scale over novelty
   - Dark-friendly neutrals; one accent max
   - Real empty / loading / error states — no fake data labeled as live
   - Mobile-usable layouts for anything user-facing
3. Reject forbidden moves:
   - New repo per app without the user naming it
   - Sketch mocks as “done”
   - Drive-by redesign of unrelated apps in the same PR

## Validate
- Defaults and taste bar checked against the diff / scaffold
- No secrets in client code; empty/loading/error states real
- Scope limited to the named app

## Return
PASS/FAIL with one-fix notes, or scaffold checklist for the factory prompt.

## Approval
Paper / preview only by default. No production deploy, merge, or secret writes without user GO. Scaffolding and review themselves need no GO.
