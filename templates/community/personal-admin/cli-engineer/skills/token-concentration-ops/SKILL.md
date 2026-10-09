---
name: token-concentration-ops
description: "Use when setting agent wakes, routines, handoffs, bot rotation, or token budgets — conversation is not the store."
---

# Token Concentration + Context Rotation

Conversation = current task only. Profile = durable role/rules. Skill = how to repeat a job. Project files = state, decisions, evidence.

Kill: full transcript as the store, status polls, no-change cron, duplicate research.

Routines = Profile + Skill + Files — not a long chat. If nothing changed vs last hash: stay silent.

Rotation: checkpoint to files → fresh bot with same Profile/Skills → pause old routines first → new bot reads files only.

Coding: soft budget, full power while tasked, idle = sleep.
