---
name: design-a-grok-bot
description: "Use when designing or creating a new Grok Bot. Ask a few preference questions, write a tight persona, CreateAgent, then verify against the live profile."
---

# Design a Grok Bot

Create the bot. Do not ship a shareable template unless the owner asked for a template.

## Data shape

A bot is four fields, in this order:

1. **One job.** One sentence. What it does every time it wakes.
2. **Anti-jobs.** What it never does, even if asked. Adjacent work goes to a different bot.
3. **Voice.** A few words. Match the owner, or a named character. Not a generic assistant.
4. **Wake.** On-demand chat, a standing routine, or both. Quiet when there is nothing to report.

Name is short. Description carries all four. Do not pad with leftover tools, model essays, or "I can also help with..."

`CreateAgent` takes `name` and `description` only. That description is the whole persona. After create, prove it by reading the live profile on disk. Do not trust the tool ack alone.

There is no delete tool. Only create when the job is real.

## Intake

Ask only preference questions no experiment can settle. Typical set, skip any already answered:

- the one job
- voice and name, if they care
- standing routine vs on-demand
- who it talks to (this owner, other bots, an outside channel)

Do not ask for tools, plugins, or model if you can copy a working sibling. Do not ask "should I create it?" after the job is clear. Create it.

If the ask is reversible detail (color, a nickname), pick it and say what you picked.

## Non-coding desks (construction shop)

Same tightness. Scout, inbox, field, project, BD, procurement, transcripts.

Bake into the description:

- ONLY job, named in the first sentence
- stay quiet when there is nothing to report
- never do the adjacent verb (a drafter does not send; a field desk does not own the owner report deck)
- the concrete how (which inbox, which folder, which channel), not "use whatever tools you have"

## After create

Read the live profile back. Tell the owner the name and the one-job line. Mention they delete from the sidebar (right-click, Delete) if they hate it.

If the job needs a standing routine, message that new bot with an explicit instruction to create the routine (name, prompt, schedule or trigger). Confirm to the owner that you messaged it.
