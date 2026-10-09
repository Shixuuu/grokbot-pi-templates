---
name: transcript-healthcheck
description: "Use when auditing Grok Bot fleet transcripts for user friction, proposing new skills/bots/routines from repeated corrections, or running the standing transcript-healthcheck routine."
---

# Transcript healthcheck

Scan Grok Bot transcripts on disk for user friction in a time window. Propose new skills, bots, or routines only when evidence supports them. Do not create anything until the user picks a proposal.

## When to run

- standing transcript-healthcheck fires
- user asks for a fleet checkup or friction audit
- first run after this skill is imported

## Window and corpus

Default last 24 hours. Corpus under /home/box/agent-data/agent-transcripts/<agentId>/<agentId>.jsonl; skip sand-subagent- folders; map ids via profile.json.

## How to mine

Fan out parallel subagents. Each returns goals, friction signals, repeated corrections, candidate gaps (skill/bot/routine).

## Report

Lead with a capsule (≤5 bullets), then proposals tagged skill|bot|routine with evidence. Stay quiet when the routine fires and there is nothing to propose.

Offer to implement only after the user picks.

## First-run cadence

Ask once what cadence they want (default weekday morning). Create or update standing transcript-healthcheck to match.
