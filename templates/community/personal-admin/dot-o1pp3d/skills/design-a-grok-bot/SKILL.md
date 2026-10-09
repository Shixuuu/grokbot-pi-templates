---
name: design-a-grok-bot
description: "Use this when designing or creating a new Grok Bot. Ask a few preference questions, write a tight persona that cites Fleet constitution, CreateAgent, then verify against the live profile. Coding bots bake pstack / poteto-mode + Omarchy default; CloudAgent opt-in only."
---

Create the bot. Do not ship a shareable template unless the owner asked for a template.

## Data shape

A bot is four fields, in this order:

1. **One job.** One sentence. What it does every time it wakes.
2. **Anti-jobs.** What it never does, even if asked. Adjacent work goes to a different bot.
3. **Voice.** A few words. Match the owner, or a named character. Not a generic assistant.
4. **Wake.** On-demand chat, a standing routine, or both. Quiet when there is nothing to report.

Name is short. Description carries all four. Do not pad with leftover tools, model essays, or "I can also help with..."

`CreateAgent` takes `name` and `description` only. That description is the whole persona. After create, prove it by reading `/home/box/agent-data/agents/<id>/profile.json`. Do not trust the tool ack alone.

There is no delete tool. Only create when the job is real.

## Fleet constitution (every bot)

Before writing any description, treat Fleet constitution as normative. Extend that skill when the owner adds standing rules — do not fork rules into this create path.

**Every new agent description must include a short citation line**, e.g.:

`Fleet: follow Fleet constitution.`

Place it after Voice/Wake (or at the end of the persona block). Keep it one line so future constitution rules inherit without rewriting every bot.

Do **not** mass-UpdateAgent existing bots unless the owner (or Dot after owner yes) asks for a retrofit pass.

## Fresh install (this bot, after template import)

On the first real owner message after this template is imported, do this once before designing anything:

1. Run pstack's setup-pstack skill when `~/.cursor/rules/pstack-models.mdc` is missing. Skip if the rule already exists. Do not ask permission. Then create-verification-skill only when a real repo is present and no `verify-*` skill exists.
2. **Prove the standing healthcheck routines exist on this bot.** List `/home/box/agent-data/agents/<this-agent-id>/automations/`. If `transcript-healthcheck` is missing, create it with `update_state` (target `routine`, action `create`): name `transcript-healthcheck`, schedule weekday morning, prompt pointing at Transcript healthcheck skill, quiet when nothing to propose. If `routine-healthcheck` is missing, create it the same way: name `routine-healthcheck`, schedule weekly Monday morning, prompt pointing at Routine healthcheck skill, quiet when nothing to propose. Tell the owner what you created (or that both were already there).
3. Offer once: "want a checkup of every bot's routines?" Run Routine healthcheck only if they say yes.

Skip steps already done in this chat. Do not re-create routines that already exist.

## Intake

Ask only preference questions no experiment can settle. Typical set, skip any already answered:

- the one job
- voice and name, if they care
- standing routine vs on-demand
- who it talks to (this owner, other bots, an outside channel)

Do not ask for tools, plugins, or model if you can copy a working sibling. Do not ask "should I create it?" after the job is clear. Create it.

## Coding bots

Bar is pstack — mandatory under Fleet constitution. Bake into the description: **Coding = pstack / poteto-mode**; **default build on Omarchy**; **CloudAgent is opt-in only**. Unslopped, short replies. If pstack is not installed, say so and keep the same tightness anyway.

## Non-coding bots

Same tightness, different job. ONLY job in the first sentence, Fleet constitution citation, stay quiet when empty, never do the adjacent verb. If asked to code: refuse and hand off to a coding bot / Dot unless tiny and in-scope.

## After create

Read the live profile back. Confirm the Fleet citation (and coding line if coding) is present. Tell the owner the name and the one-job line. Mention they delete from the sidebar (right-click, Delete) if they hate it.

If the job needs a standing routine, immediately SendToAgent that new bot with an explicit instruction to create the routine. Confirm to the owner that you messaged it.
