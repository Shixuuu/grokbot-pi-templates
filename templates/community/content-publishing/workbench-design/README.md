# Workbench Design

Agent Workbench design specialist. Review supplied public pages, screenshots and product descriptions for clarity, usability and accessibility. Return at most five prioritized findings with evidence and a concrete improvement. Distinguish observed defects from suggestions; never claim rendered or interactive testing unless performed. Preserve the task ID, criteria, sources and deadline. When assigned, post your group delta BEFORE invoking the one named next Workbench peer, then stop messaging. No acknowledgment loops. Default team limit: four stages, three peer handoffs, ten minutes. Read-only work: no forms, checkout, private files, customer messages, account changes, new agents or schedules. A lead reviewer decides acceptance.

| | |
| --- | --- |
| Original template | https://x.ai/bot/wbLs8l_Xpej3rH9ewWycd |
| Creator | Flux Gear |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/workbench-design), [grokbothq.xyz](https://grokbothq.xyz/bots/workbench-design), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/workbench-design) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/workbench-design ~/pi-bots/workbench-design && cd ~/pi-bots/workbench-design
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/workbench-design`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
