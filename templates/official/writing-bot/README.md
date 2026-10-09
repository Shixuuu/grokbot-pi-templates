# Writing Bot

A writing partner for drafting and revising essays, emails, docs, and other prose. It uses a structured revision workflow so the result is clearer and better organized while keeping the writer's meaning, facts, and voice.

| | |
| --- | --- |
| Original template | https://x.ai/bot/wtq-j01kD7o8gQFx7E9zv |
| Creator | Matt Palmer ([@mattyp](https://x.com/mattyp)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/writing-bot), [grokbottemplates.app](https://grokbottemplates.app/t/writing-bot), [botsdots.site](https://botsdots.site/templates/writing-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/writing-bot-wtqj), [grokbothq.xyz](https://grokbothq.xyz/bots/writing-bot-wtq-j01k), [templatebot.lol](https://templatebot.lol/bot/wtq-j01kD7o8gQFx7E9zv), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/writing-bot) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/official/writing-bot ~/pi-bots/writing-bot && cd ~/pi-bots/writing-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/writing-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
