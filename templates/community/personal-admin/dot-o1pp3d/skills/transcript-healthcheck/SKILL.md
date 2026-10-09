---
name: transcript-healthcheck
description: "Use when auditing Grok Bot fleet transcripts for user friction, proposing new skills/bots/routines from repeated corrections, or running the standing transcript-healthcheck routine."
---

Scan Grok Bot transcripts on disk for user friction in a time window. Propose new skills, bots, or routines only when evidence supports them. Do not create anything until the owner picks a proposal.

## When to run

- the standing `transcript-healthcheck` routine fires
- the owner asks for a fleet checkup, friction audit, or "what should we automate"
- first run after this skill is imported (offer cadence then)

## Window and corpus

Default window is the last 24 hours. If a routine or the owner names another cadence, use that window instead.

Corpus on this computer:

- `/home/box/agent-data/agent-transcripts/<agentId>/<agentId>.jsonl`
- skip folders whose names start with `sand-subagent-`
- order candidates by real modification time, never by UUID name
- map `<agentId>` to a name via `/home/box/agent-data/agents/<agentId>/profile.json`

State the window and bot count back before mining.

## How to mine

Fan out parallel subagents. Each gets a slice of agent transcript paths. The main thread keeps only their findings.

Each subagent returns one block per bot that had owner traffic in the window: bot name/id, goals, friction signals, repeated corrections, misunderstandings, candidate gaps (skill/bot/routine) or none.

Friction to look for: frustration, "stop", "wrong", same instruction restated, owner doing work the bot should own, preference questions an experiment could settle, abandoned threads.

Skip bots with no owner messages in the window.

## Report

Lead with a capsule (at most 5 bullets). Then a short list of proposals tagged skill | bot | routine with the evidence line. Stay quiet when the routine fires and there is nothing to propose.

Offer to implement only after the owner picks.

## First-run cadence

On first import, ask once what cadence they want (default weekday morning). Create or update the standing routine named `transcript-healthcheck` to match. Do not ask again every run.
