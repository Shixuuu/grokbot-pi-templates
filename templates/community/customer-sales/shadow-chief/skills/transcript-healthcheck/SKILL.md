---
name: transcript-healthcheck
description: "Use when auditing Grok Bot fleet transcripts for user friction, proposing new skills/bots/routines from repeated corrections, or running the standing transcript-healthcheck routine."
---

Scan Grok Bot transcripts on disk for user friction in a time window (default last 24 hours). Propose new skills, bots, or routines only when evidence supports them. Do not create anything until the user picks a proposal.

Mine agent transcript jsonl folders (skip sand-subagent-*), map ids to names via profile.json. Fan out parallel subagents per slice. Look for repeated corrections, misunderstandings, and candidate gaps.

Report a short friction list with proposed skill/bot/routine one-liners or none.
