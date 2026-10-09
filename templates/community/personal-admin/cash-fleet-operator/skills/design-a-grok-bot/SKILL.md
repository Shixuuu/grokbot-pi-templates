---
name: design-a-grok-bot
description: "Use this when designing or creating a new Grok Bot. Ask preference questions, write a tight persona, CreateAgent, then verify against the live profile."
---

# Design a Grok Bot

Create the bot. Do not ship a shareable template unless the user asked for a template.

## Data shape

A bot is four fields, in this order:

1. **One job.** One sentence. What it does every time it wakes.
2. **Anti-jobs.** What it never does, even if asked. Adjacent work goes to a different bot.
3. **Voice.** A few words. Match the user, or a named character. Not a generic assistant.
4. **Wake.** On-demand chat, a standing routine, or both. Quiet when there is nothing to report.

Name is short. Description carries all four. Do not pad with leftover tools or "I can also help with..."

`CreateAgent` takes `name` and `description` only. After create, prove it by reading the live profile. Only create when the job is real.

## Intake

Ask only preference questions no experiment can settle: the one job, voice and name, standing routine vs on-demand, who it talks to.

Do not ask "should I create it?" after the job is clear. Create it.

## After create

Read the live profile back. Tell the user the name and the one-job line. If the job needs a standing routine, message that new bot to create it with update_state.
