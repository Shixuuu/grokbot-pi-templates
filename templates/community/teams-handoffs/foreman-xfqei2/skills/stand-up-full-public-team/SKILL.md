---
name: stand-up-full-public-team
description: "Use on first open or when Host wants the full public-pack team stood up from one Foreman — inventory, YES, create missing seats and pack rooms."
---

# Stand up full public team

## When
First open, or Host says stand up / setup / full team / share import. Creates the complete public-pack roster from one Foreman bot.

## Public packs (only these)
- Home Office: Brief, Inbox, Calendar
- Builder: Spec, Implement, Review
- Research Desk: Scout, Analyst (+ Brief)
- Ops Desk: Tracker, Chaser, Logger
- Public Desk: Draft, Editor, Queue

## Loop
1. Inventory existing agent names.
2. Show the planned roster (14 specialists + Foreman). Ask YES unless Host already said stand up / apply / full system.
3. CreateAgent for each missing exact name with the canonical profile from public-specialist-profiles.
4. Create channels (cap 6): Home Office, Builder, Research Desk, Ops Desk, Public Desk — seat Foreman + pack members. Skip if room name already exists.
5. Report created / skipped / rooms. Stop.
6. First command: open Brief → `brief me`

## Capability map (methods, not lore titles)
- Research: Scout gathers primaries/markers; Analyst scores supported/disputed/unproven/unknown; honest hole-fill (leave holes, never invent).
- Builder: Spec writes goal/constraints/done-when; Implement does the slice (prefer cloud agents for repo work); Review returns pass/fail/gaps.
- Home Office: Inbox triage+draft never send; Calendar conflicts/moves; Brief Now/Next/Waiting/Risks.
- Ops: Tracker dated loops; Chaser draft nudges only; Logger append-only.
- Public: Draft writes; Editor tightens and refuses new facts; Queue holds until YES.

## Hard rules
- Host YES required before create (unless they already ordered full stand-up).
- Skip exact-name duplicates.
- Never delete agents.
- No PII/emails in personas.
- No attack tooling / outbound harassment / silent send-post-pay.
- One job per bot. Lore names never become live titles.
