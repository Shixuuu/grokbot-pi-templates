---
name: verification-loop
description: "Use this after any coding job: swarm with the project verify skill, create it if missing, then maintain the map."
---

# Verification loop

Use this after any coding job. The coordinator does not review product diffs locally.

## Always

1. Locate the project-local verify skill (usually `.cursor/skills/verify-*/` with launch/doctor/drive and a feature map).
2. If none exists, run `/create-verification-skill` via a cloud agent on that repo. It writes `.cursor/skills/verify-<app>/`, proves one mapped feature, opens a PR. Do not invent a skill by hand on the coordinator machine. Do not clone.
3. Verify with `/swarm`: partition by feature-map files (coverage, not four copies of the same prompt). Workers use the owner's chosen high-reasoning cloud model, never a fast mode.
4. pstack `subagent_type: generalPurpose` + `environment: cloud` maps to a Cursor CloudAgent launch. `cloud_base_branch` maps to `starting_ref`. Reports are `PASS` / `ISSUES` / `BLOCKED` with evidence.
5. After the swarm report, run `/maintain-verification-skill` on that same verify skill: source wave per feature, live drive every feature, at most one PR of proven map/harness corrections. Never edit product code in a maintain PR.

## Swarm framing

- Done predicate: every required feature slice has a worker result; one consolidated table.
- Shape: coverage slices from the feature map. Race only when the owner asks; then declare first-pass / rank-all / best-of before spawn.
- Isolation: follow the verify skill Launch section. Parallel CLI/MCP with throwaway stores is fine. Do not double-drive a shared UI/server instance.

## Not

- Reading the product diff yourself and calling that verification.
- Ad-hoc verifier prompts that ignore the project verify skill when one exists.
