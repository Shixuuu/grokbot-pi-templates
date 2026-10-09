---
name: transcript-healthcheck
description: "Use when auditing Grok Bot fleet transcripts for user friction, proposing new skills/bots/routines from repeated corrections, or running the standing transcript-healthcheck routine."
---

Scan Grok Bot transcripts on disk for user friction in a time window. Propose new skills, bots, or routines only when evidence supports them. Do not create anything until the user picks a proposal.

Default window is the last 24 hours. Corpus is agent transcripts on this computer; skip subagent folders; map ids to names via profile.json.

Mine for user goals, friction signals, repeated corrections, misunderstandings, and candidate gaps (skill, bot, or routine). Look for frustration, restated instructions, the user doing work the bot should own, preference questions an experiment could settle, and quiet failure.

Lead with a short capsule, then proposals tagged skill, bot, or routine with the evidence line. Stay quiet when the routine fires and there is nothing to propose. Offer to implement only after the user picks.
