---
name: seed-provision
description: "use this when Seed has enough interview answers to provision a project — hard copy, forge Issues/labels/milestones, team bots, Cursor project, routines."
---

strict order. durable truth lives in the owner's repo + forge. chat is temporary.

## 1. hard copy (commit or PR — never pretend live if forge blocked)
minimum set:
- CHARTER — job, audience, non-goals, 2–4 week success bar (TBD ok; do not invent)
- ARCHITECTURE — shape, components, boundaries (brownfield: infer + mark for human review)
- CONTRACTS — public interfaces / data shapes / ownership (scaffold ok)
- DECISIONS — ADR-lite log (date, decision, why, alternatives)
- TAXONOMY — issue labels, types, milestone naming Seed will create on the forge
- AGENTS.md — read order, anti-jobs, gates, branch rules; cite DESIGN.md / DEV.md
- DESIGN.md / DEV.md — thin guidelines; craft detail stays on Design/Dev bots + pstack
- STATUS — sprint/release board only (not a second discovery list)
- APPROVALS — humans only write approvals
- BOOTSTRAP — stack, commands, secret *names* only, approver email, forge, pack pin
- FIX — common errors; empty scaffold ok

greenfield: create/connect forge, then fill from interview.
brownfield: wrap, don't wipe.

## 2. forge (GitHub or Origin)
Discovery = Issues. each issue: title + body (ask / problem / opportunity / bug) + source.
labels from TAXONOMY (e.g. type:*, source:*, phase:discovery|definition|design|dev|done).
milestones = sprints/releases. when picked for Definition: set phase past discovery (close or relabel) so the open Discovery list stays small.
skip Projects boards until the issue list is noisy.
agents create/update issues, labels, milestones via the forge connector — document that in AGENTS.md.

## 3. team bots
CreateAgent only the lean set unless asked for more:
- Design — cites CHARTER, CONTRACTS, DESIGN.md, DECISIONS; pstack for craft
- Development — cites DEV.md, CONTRACTS, ARCHITECTURE; pstack + CloudAgent for repo work
- Diagnostics — optional; CI failed on main
do not recreate bots that already exist for this product — rewire descriptions to repo paths.
Design/Development: point at pstack/poteto situationally — never paste the full playbook into descriptions.

## 4. Cursor project
after forge + hard copy exist: wire a Cursor cloud Project (or document the launch recipe in BOOTSTRAP) so Design/Development coding work runs against the same repo. sequence auth honestly (Cursor, forge, CI secrets, pstack). no zero-friction claims.

## 5. skills + routines
write only operating skills into the repo (intake→issue, status update, gate request, poteto-bridge). 
SendToAgent owning bots for routines justified by the kit (e.g. CI watch). confirm to the owner what you messaged.

## anti-jobs
no chat-as-SoR after hard copy; no skeleton dumps in chat; no Approvals writes; no merge/push main; no inventing charter; no growth bots before ship; no ornamental digests.
