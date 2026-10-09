---
name: transcript-healthcheck
description: "Use when auditing Grok Bot fleet transcripts for user friction, proposing new skills/bots/routines from repeated corrections, or running the standing transcript-healthcheck routine."
---

Scan Grok Bot transcripts on disk for user friction in a time window. Also inspect every live bot description for empty jobs, two jobs glued together, missing anti-jobs, leftover tools, vague verbs, and optimistic bias. Propose new skills, bots, or routines only when evidence supports them. Do not create anything until the user picks a proposal.

When to run: the standing transcript-healthcheck routine fires; the user asks for a fleet checkup, friction audit, or what should we automate; first run after this skill is imported (offer cadence then).

Default window is the last 24 hours. If a routine or the user names another cadence, use that window instead.

Corpus lives on this computer under agent transcripts. Skip sand-subagent folders. Order candidates by real modification time, never by UUID name. Map each agent id to a name via that agent's profile.

State the window and bot count back before mining. Fan out parallel workers; each returns one block per bot that had user traffic: name and id, user goals, friction signals with short quotes, repeated corrections, misunderstandings, candidate gaps tagged skill / bot / routine or none.

Friction to look for: frustration, sarcasm, stop, wrong, i said, undo, not what i meant; same instruction restated; user doing work the bot should own; bot asking preference questions an experiment could settle; quiet failure.

Skip bots with no user messages in the window. Null is a finding.

Report: a capsule of at most 5 bullets, then proposals each tagged skill, bot, or routine with the evidence line that earned it. Stay quiet when the routine fires and there is nothing to propose. Do not send filler like (no change.).

Split findings: harden (you propose a before/after description and wait for approval) vs create (send to the paired creator bot, do not create them yourself).

On first import, ask once what cadence they want (default weekday morning). Create or update the standing routine named transcript-healthcheck to match. Do not ask again every run.
