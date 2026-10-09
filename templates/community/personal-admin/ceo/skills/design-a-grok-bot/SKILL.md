---
name: design-a-grok-bot
description: "Use when designing or creating a new Grok Bot. Ask a few preference questions, write a tight persona, CreateAgent, then verify against the live profile. Always bake the fleet HARD RULE: no bot does coding; product/code work goes through Grok Build via ceo only when explicitly asked. On a fresh install, run setup-pstack first and ensure healthcheck routines exist."
---

# Design a Grok Bot

Create the bot. Do not ship a shareable template unless the user asked for a template.

## Fleet HARD RULE — bake into EVERY new bot description

Always include this (or equivalent clear wording) in every `CreateAgent` description:

**HARD RULE:** Never make code changes — no repo edits, commits, PRs, CloudAgent coding, or source/file patches. No bot does coding. All product/code work goes through Grok Build (`grok` CLI) on ceo's computer, only when the user explicitly asks for that specific change in the same conversation. Updating a live product site/repo also requires an explicit ask + Grok Build path via ceo.

Do not create a bot that patches repos, runs CloudAgent coding, or edits product source. If the job needs code, the bot coordinates and routes to ceo → Grok Build; it does not write the code itself.

## Data shape

A bot is four fields, in this order:

1. **One job.** One sentence. What it does every time it wakes.
2. **Anti-jobs.** What it never does, even if asked. Adjacent work goes to a different bot. Always include the fleet HARD RULE above.
3. **Voice.** A few words. Match the user, or a named character. Not a generic assistant.
4. **Wake.** On-demand chat, a standing routine, or both. Quiet when there is nothing to report.

Name is short. Description carries all four. Do not pad with leftover tools, model essays, or "I can also help with..."

`CreateAgent` takes `name` and `description` only. That description is the whole persona. After create, prove it by reading `/home/box/agent-data/agents/<id>/profile.json`. Do not trust the tool ack alone.

There is no delete tool. Only create when the job is real.

## Fresh install (this bot, after template import)

On the first real user message after this template is imported, do this once before designing anything:

1. Run pstack's setup-pstack skill when `~/.cursor/rules/pstack-models.mdc` is missing. Skip if the rule already exists. Do not ask permission. Then create a verification skill only when a real repo is present and no `verify-*` skill exists.
2. **Prove the standing healthcheck routines exist on this bot.** List `/home/box/agent-data/agents/<this-agent-id>/automations/`. If `transcript-healthcheck` is missing, create it with `update_state` (target `routine`, action `create`): name `transcript-healthcheck`, schedule `44 8 * * 1-5`, prompt pointing at Transcript healthcheck skill, quiet when nothing to propose. If `routine-healthcheck` is missing, create it the same way: name `routine-healthcheck`, schedule `49 8 * * 1`, prompt pointing at Routine healthcheck skill, quiet when nothing to propose. Tell the user what you created (or that both were already there).
3. Offer once: "want a checkup of every bot's routines?" Run Routine healthcheck only if they say yes.

Skip steps already done in this chat. Do not re-create routines that already exist.

## Intake

Ask only preference questions no experiment can settle. Typical set, skip any already answered:

- the one job
- voice and name, if they care
- standing routine vs on-demand
- who it talks to (this user, other bots, an outside channel)

Do not ask for tools, plugins, or model if you can copy a working sibling. Do not ask "should I create it?" after the job is clear. Create it.

## Product / former coding bots

There are no coding bots that write code. If the job is product-shaped:

Bake into the description the fleet HARD RULE, unslopped short replies, coordinate specs and handoffs — never patch the repo. When code is needed: SendToAgent ceo to run Grok Build after an explicit ask from the user.

## Non-coding bots

Same tightness, different job. Bake ONLY job, fleet HARD RULE, stay quiet when nothing to report, never do the adjacent verb, concrete how.

## After create

Read the live profile back. Tell the user the name and the one-job line. Mention they delete from the sidebar (right-click, Delete) if they hate it.

If the job needs a standing routine, immediately SendToAgent that new bot with an explicit instruction to call update_state to create the routine. Confirm to the user that you messaged it.
