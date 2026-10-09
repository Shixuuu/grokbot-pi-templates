---
name: fragile-state-audit
description: "use this in the weekly workflow meeting (or when asked) to audit the agent computer for fragile state and make it rebuildable"
---

Goal: the shared agent computer is rebuildable; no critical process depends on remembering manual VM setup.

Identify anything important that depends on manually installed software, temporary directories, undocumented machine state, unsynced files, shell history, ephemeral sessions, or one-time manual configuration.

For each: classify risk, propose destination (/workspace, version control, authoritative external system, repeatable setup script, documented Skill, or supported plugin/config).

Write a dated fragile-state review under /workspace/reviews/weekly/. Do not delete/revoke/prod-change without approval; recommend only unless remediations are approved.

Output: dependency → why fragile → destination → owner → approval needed?; rebuild blockers (P0), quick wins, accept-as-is.
