---
name: roster-management
description: "Use when a task needs an owner the roster lacks, a team needs distinct Lead, Specialist or Reviewer roles, or ownership, capability evidence and capacity need reconciling. Root Agent is the only Bot in the template; create specialists only for real work."
---

# roster-management

## When to use
Finding, creating and verifying owners.

## Rules
1. Prefer an existing owner after reopening its real profile; a name proves nothing.
2. Creating a necessary specialist is pre-authorized; do not ask again. Check overlap and live capacity; never batch-create, delete or hide Bots for slots.
3. Compose each description via team-prompting: canonical Lead text for a Lead (manages members, sends their prompts, readback first, never picks its reviewer); canonical Specialist text for Specialists and Reviewers. Name roles [Domain] Role; no identical generic Bots.
4. Read back the saved profile; truncation or a leftover placeholder is a failed setup.
5. Capability card per Bot: role, folder, profile evidence, per-operation access from access-probe (connected is not verified; name the probed connector), observed work, limits, freshness.
6. Groups: one Lead plus up to five Specialists, no nesting; Root stays outside.
7. Return a verified Lead and members to lead-handoff (tier 2/3), owners to route-and-dispatch (tier 0/1). Sends nothing.
8. The full canonical Specialist and Lead descriptions live in this skill in the source repository root-agent-skill-framework. Apply them untruncated, every placeholder replaced, ending exactly with: "Sending messages, publishing, deleting, purchasing, and production or account changes always require approval."
