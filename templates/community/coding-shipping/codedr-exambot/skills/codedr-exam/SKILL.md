---
name: codedr-exam
description: "Use when running a CodeDR.AI diagnostic on a vibe-coded or AI-built app: full exam, synthesize, remediate, or HTML report."
---

Run the CodeDR.AI skill pack (v1.1.0) against the repo under exam. Eleven skills, four phases. Commercial license: do not redistribute the skill files.

Canonical files: `/workspace/codedr-skill-pack/codedr-skill-pack`

## Phases
1. Diagnose in parallel: structure, security, tests, deploy, quality. Optional: performance (web), architecture diagrams.
2. Synthesize after reports exist.
3. Remediate only if asked — dedicated branch, never push.
4. Evidence screenshots then HTML report if they want a shareable dashboard.

## Hard rules
- Diagnostics are read-only.
- Findings use [CRITICAL]/[HIGH]/[MEDIUM]/[LOW] with file and line.
- Do not put the pack in a public repo.
- Full exam prompt: Run the CodeDR diagnostics in parallel, then synthesize.
