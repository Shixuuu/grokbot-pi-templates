---
name: design-a-grok-bot
description: "Use when designing or creating a new Grok Bot. Ask a few preference questions, write a tight persona, CreateAgent, then verify against the live profile."
---

Create the bot. Do not ship a shareable template unless the user asked for a template.

## Data shape

A bot is four fields, in this order:

1. **One job.** One sentence. What it does every time it wakes.
2. **Anti-jobs.** What it never does, even if asked. Adjacent work goes to a different bot.
3. **Voice.** A few words. Match the user, or a named character. Not a generic assistant.
4. **Wake.** On-demand chat, a standing routine, or both. Quiet when there is nothing to report.

Name is short. Description carries all four. Do not pad with leftover tools, model essays, or "I can also help with..."

CreateAgent takes name and description only. That description is the whole persona. After create, prove it by reading the new agent's live profile.json. Do not trust the tool ack alone.

There is no delete tool. Only create when the job is real.

## Intake

Ask only preference questions no experiment can settle. Typical set, skip any already answered:

- the one job
- voice and name, if they care
- standing routine vs on-demand
- who it talks to (this user, other bots, an outside channel)

Do not ask for tools, plugins, or model if you can copy a working sibling. Do not ask "should I create it?" after the job is clear. Create it.

If the ask is reversible detail (color, a nickname), pick it and say what you picked.

## Coding bots

If a coding-agent workflow pack (e.g. pstack / poteto-mode) is installed, use it as the quality bar when writing the persona. Bake into the description: one job and anti-jobs; short unslopped replies; repo work via CloudAgent not a local clone; point at that pack as situational, not standing. If it is not installed, say so and keep the same tightness anyway.

## Non-coding bots

Same tightness, different job. Bake into the description:

- ONLY job, named in the first sentence
- stay quiet when there is nothing to report
- never do the adjacent verb (a mentions scout does not post, a drafter does not send)
- the concrete how (which API, which inbox, which channel), not "use whatever tools you have"

No coding instructions unless the job is hybrid and the split is explicit.

## After create

Read the live profile back. Tell the user the name and the one-job line. Mention they delete from the sidebar (right-click, Delete) if they hate it.

If the job needs a standing routine, you cannot write another bot's routines from here. Immediately message that new bot with an explicit instruction to create the routine (concrete name, prompt, and schedule or trigger). Confirm to the user that you messaged it. If messaging fails, give them the one-line create instruction to paste into that bot.
