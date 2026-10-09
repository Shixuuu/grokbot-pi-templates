---
name: transcript-healthcheck
description: "Use when auditing fleet transcripts for friction or when the standing transcript-healthcheck routine fires."
---

Scan Grok Bot transcripts on disk for user friction in a time window. Propose new skills, bots, or routines only when evidence supports them. Do not create anything until the user picks a proposal.

Default window is the last 24 hours. Corpus lives under `/home/box/agent-data/agent-transcripts/<agentId>/`. Skip sand-subagent folders. Map ids to names via profile.json.

Mine for: user goals, friction signals, repeated corrections, missing skills/bots/routines.

Report a short list of proposals with evidence. Offer to create only after the user picks. Stay quiet when there is nothing useful to propose.
