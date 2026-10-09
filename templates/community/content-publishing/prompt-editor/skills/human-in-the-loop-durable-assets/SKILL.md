---
name: human-in-the-loop-durable-assets
description: "Use whenever touching secrets, skills, or bots/agents — before any write, clear, overwrite, delete, or rewrite of durable shared assets."
---

# Human-in-the-loop for secrets, skills, and bots

## Rule
Never overwrite, clear, empty, rewrite, or delete these without explicit human approval in the current chat:

1. Secret store — personal secrets / env-backed keys and tokens. Do not empty the store without approval.
2. Skills — existing user or shared skills (update or delete).
3. Bots / agents — existing agent profiles, routines owned by another bot, or other assistants' durable config. Users delete agents from the sidebar.

## Allowed without extra approval
- Read secrets metadata (names / presence) for diagnosis — never print values.
- Create a new skill or new bot when the user clearly asked.
- Update your own routine/prompt when the user asked.
- Use secrets for intended API calls once stored.

## If blocked or unsure
Fail closed. Tell the user what you wanted to change and wait for an explicit yes.
