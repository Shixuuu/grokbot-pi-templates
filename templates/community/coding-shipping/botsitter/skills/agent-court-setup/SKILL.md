---
name: agent-court-setup
description: "Use when configuring Botsitter for a new owner or when seats, systems, claim handoff, PR watch, or proof defaults change."
---

# Botsitter setup

Run once per owner (or when seats/systems change). Save answers to profile memory. Do not invent systems. Companions are created by Botsitter after SETUP (CreateAgent), not via separate marketplace imports.

## Roles (legal metaphor — teaching only)

- Botsitter = judge
- Done Challenger = prosecutor
- Claim Advocate = defendant
- Owner = final court of appeal (verdict owner)

Day-to-day titles: Botsitter / Challenger / Advocate.

## Where this sits

- Trigger: coding agent, Cursor cloud agent, or domain bot claims done.
- Slot: after that claim, before merge / ship / send / trust.
- Not: every commit; not CI; not a general chatbot.
- Promise: Done means done — or Remand + Rejection Memory until it is.

## How work reaches Botsitter

1. **Claim handoff (always on):** coding bots message Botsitter / group with goal, claim, proof_type, artifacts, claim_at. Teach the handoff line into owner-owned coding bots when asked. Import does not auto-patch other people's bots.
2. **PR watch (default OFF):** optional routine on a named repo; SETUP must opt in with repo and comment vs channel-only. Needs go to enable and to post PR comments.

## Capture

### SYSTEMS

- Code / PRs host
- Cloud coding agents (default Cursor CloudAgent)
- Artifact store for screenshots / case files
- Botsitter / Court group chat (Lead creates after SETUP)
- Optional issue tracker
- Verification tools (owner plug-in map — not hardcoded)
- Optional integrations: GitHub; Google Docs / Sheets / Slides / Drive / Gmail / Calendar — skip unused; works from pasted artifacts
- PR watch: default No; if Yes, owner/repo + findings destination

### PEOPLE

- Verdict owner (only Done | Remand | Reject)
- Botsitter (Lead) · Done Challenger · Claim Advocate
- who_verifies (importer OK for solo)
- Product name: Botsitter (Done Means Done)

### PERMISSION LINES

- Always: open cases; proof checklist; read artifacts; one cloud agent with named skill + proof contract; Rejection Memory; Verification packet; case file; message seats; CreateAgent Challenger + Advocate; CreateChannel Botsitter/Court; first-run briefs; teach claim-handoff when asked
- Needs go: publish template; external post; merge PR; share artifacts outside team; change org proof defaults; Accept before Verification PASS; turn PR watch ON; PR comments
- Never: forge verdict; invent minutes/$; hardcode company test stack into shared template; enable PR watch without naming the repo; ship without companions; ask owner to import companion templates when CreateAgent works

### DIALS

- Default proof_type: ui-before-after
- Fail closed on missing/wrong proof
- Remand→cure = one case id
- Live Botsitter ≠ offline checklist alone
- PR watch default OFF

## After capture

Confirm three seats exist (CreateAgent if missing). Confirm Botsitter channel. Remind claim-handoff line for coding bots. Point at: agent-court-proof-checklist, rejection-memory, agent-court-case-file, cloud-agent-shepherd-proof-loop, remand-verification-loop.
