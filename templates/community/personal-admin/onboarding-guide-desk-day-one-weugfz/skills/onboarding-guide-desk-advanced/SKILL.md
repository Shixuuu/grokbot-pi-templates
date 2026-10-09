---
name: onboarding-guide-desk-advanced
description: "Use this when an onboarding guide needs depth beyond the base arc: role-track overlays, pre-boarding, buddy program, remote and multi-timezone, compliance training, 30/60/90 scorecard, manager prep, knowledge map, feedback prompts, doc conflicts, and a pre-gate quality check."
---

# Onboarding Guide Desk — advanced module

Follow onboarding-guide-desk-operating-rules. If this module disagrees with its Gates (hard) section, Gates (hard) wins.

This module adds **structure only**. Every fact stays tagged `from <doc>` / `added by you` or is `[NEEDS HUMAN INPUT]`. Access, accounts, channel adds, and equipment stay checklist requests. Nothing leaves chat except via one exact PROCEED dispatch line.

## 1. Role-track overlays

Pick an overlay only when the owner names the track or the role description makes it plain (`added by you` or `from <doc>`). Overlays add section headings; empty headings become gaps, not filler.

| Track | Extra sections | Stays `[NEEDS HUMAN INPUT]` until stated |
|-------|----------------|------------------------------------------|
| Engineering | Dev environment setup · codebase tour order · review and deploy norms · on-call stance | First change to ship · repo list · whether on-call applies and when |
| Support / contact center | Channel and queue map · shadowing plan · escalation path by role · quality review ritual | Any target (volume, handle time, satisfaction) · when solo work begins |
| Sales | Product and pitch materials · territory or segment · pipeline tool · call shadowing | Quota, ramp schedule, commission — never inferred |
| Ops / people manager | Direct-report roster (roles only) · 1:1 setup · approval duties · team rituals owned | Headcount · budget authority · decision rights |
| Contractor | Scope from the owner's statement of work · single point of contact (role) · access end date | Engagement end · what they may not access · any rate (do not repeat it even if pasted) |

A contractor overlay never states employment classification, eligibility, or benefits. Point to the owner's HR or legal source.

## 2. Pre-boarding (before Day 1)

A separate block headed **Pre-boarding (requests — nothing ordered or granted)**:

- [ ] Request equipment `[NEEDS HUMAN INPUT: item list]` from `[NEEDS HUMAN INPUT: IT role]`. No price, vendor, or ship-to address. A paid order leaves only as `PROCEED SPEND` with every field written by the human.
- [ ] Request account for `<tool>` (`from <doc>`) from `<admin role>`.
- [ ] Request channel / group / list add `<name>` (`from <doc>`) from `<owner role>`.
- [ ] Welcome message — **draft only**, in chat or a private `DRAFT` doc when asked. It leaves only via `PROCEED SEND` with the mailbox on the line. Never copy the hire's personal address from docs or memory.
- [ ] Day 1 logistics: arrival or login time `[NEEDS HUMAN INPUT]` · location or link `[NEEDS HUMAN INPUT]`

## 3. Buddy / mentor block

- Roles only: "onboarding buddy", "mentor", "peer reviewer". A name appears only when the owner writes it and asks to include it.
- Purpose line from the owner or docs; otherwise `[NEEDS HUMAN INPUT]`.
- Cadence (e.g., weekly coffee) only if the manager states it, tagged `added by you`. Otherwise `cadence [NEEDS HUMAN INPUT]`.
- Stating a cadence creates no series, invite, or reminder. One `PROCEED INVITE` makes one event for one mailbox, and only when the human typed a clock time and a timezone.

## 4. Remote / hybrid / multi-timezone

- **Time zone is always a field** in the header: hire's zone and team zone, each tagged or `[NEEDS HUMAN INPUT]`. Never convert a doc time without a stated zone.
- **Overlap hours** are `[NEEDS HUMAN INPUT]` unless the manager states them.
- **Async intro doc** (draft in chat): who the team is (roles), where decisions are written (`from <doc>`), how to ask for help, response-time norms only if documented.
- Hybrid: onsite days `[NEEDS HUMAN INPUT]` unless documented; badge access is a checklist request.
- Proposed Day 1 blocks never guess a zone.

## 5. Compliance and security training

A checklist of requests, each with a source tag:

- [ ] Complete `<training name>` (`from <doc>`) · due `from <doc>` or `[NEEDS HUMAN INPUT]` · assigned by `<role>`
- [ ] Security setup steps (`from <doc>`) — e.g., the doc's stated sign-in method; never invent one.
- [ ] Acknowledge `<policy name>` (`from <doc>`)

Never state that a law or regulation requires something. If asked what is legally required, decline the fact and add: "Confirm with your HR or legal source." Do not repeat background-check, immigration, or health details.

## 6. 30/60/90 scorecard

Add under **30 / 60 / 90** when the owner asks for tracking:

| Milestone | Outcome | Check (manager-stated) | Evidence | Status |
|-----------|---------|------------------------|----------|--------|
| 30 | `[NEEDS HUMAN INPUT]` | `[NEEDS HUMAN INPUT]` | `[NEEDS HUMAN INPUT]` | Not started |
| 60 | … | … | … | Not started |
| 90 | … | … | … | Not started |

- Status values: **Not started · On track · Needs support**. Only the owner changes them.
- Evidence is what the manager names, not your inference.
- Print beneath the table: *This tracks the plan, not the person. It is not a performance rating.*
- No numbers, percentages, or targets unless the manager wrote them.

## 7. Manager-side companion checklist

Deliver as a **separate section or artifact** headed **Manager prep (not for the hire)**. Same id, labeled companion. Never merge it into the hire's guide.

- [ ] Confirm 90-day outcomes and checks (clears gaps in §6)
- [ ] Name the buddy role and, if desired, the person
- [ ] File access requests from the checklist with the admin role
- [ ] Name the first small task
- [ ] Block own calendar for Day 1 (owner-only reminder only if asked: no attendees, no body, no series)
- [ ] Confirm time zones and overlap hours
- [ ] Resolve flagged doc conflicts (§10)

## 8. Knowledge map

- **Reading order:** numbered docs the owner supplied, each with why it matters (tagged). An order you suggest is marked `proposed order` and adds no facts.
- Docs the hire needs but nobody supplied: `[NEEDS HUMAN INPUT: doc for <topic>]`.
- **Glossary expansion:** only terms and definitions present in the docs, tagged. A term that appears without a definition is `[NEEDS HUMAN INPUT]`. No general-knowledge definitions of internal jargon.

## 9. Feedback loops

Question prompts for the manager to use, not judgments and not scheduled messages:

- **Week 1:** What was clearer or less clear than expected? Which access is still missing? Who has been most helpful to ask, and for what? What would you change about Day 1?
- **Day 30:** Which outcomes feel within reach, and which need support? What doc was missing or out of date? What do you want more or less of from your buddy? What one thing should the next hire get on Day 1?

No answers are pre-filled or scored. Timing is owner-stated or `[NEEDS HUMAN INPUT]`; no timed nudges or series.

## 10. Multi-doc conflicts and freshness

- Show both claims side by side with their tags:
  `Standup time: 9:30 (from team doc) vs 10:00 (from wiki page) — [NEEDS HUMAN INPUT: which is current]`
- Note each doc's date only if the doc shows one; otherwise "date not shown." Never assume the newer-looking doc wins.
- Each conflict is one guide gap and appears in Open gaps and in Manager prep.
- The owner resolves it: re-tag the chosen fact `added by you` and log it in REFINE.

## 11. Quality self-check before GATE

Run and state pass/fail in Craft notes:

- [ ] Guide-gap count equals the unique topics in Open gaps; every `UNKNOWN`, "not named", and `[NEEDS HUMAN INPUT]` maps to one topic.
- [ ] Every fact carries a tag; no untagged tools, rituals, contacts, or policies.
- [ ] No number, target, quota, date, or cadence the owner did not write.
- [ ] No person named unless the owner supplied and asked to include it.
- [ ] Access, accounts, channel adds, and equipment appear only as requests.
- [ ] No legal or benefits claim stated as fact.
- [ ] No personal data of the hire, credentials, or rates.
- [ ] Scorecard carries the not-a-rating line.
- [ ] Manager prep is separate from the hire's guide.
- [ ] Conflicts shown with both sources and counted as gaps.
- [ ] Id `OB-####` in header and gate packet; no dispatch line shown with an empty field.
