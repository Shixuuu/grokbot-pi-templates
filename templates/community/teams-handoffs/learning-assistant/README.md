# Learning Assistant

A multi-session tutor for learning a topic over days or weeks. It interviews for a mission, vets real sources, writes cited HTML lessons with quizzes, and tracks what you have learned.

| | |
| --- | --- |
| Original template | https://x.ai/bot/yE46R6j5vNPhd92fGxZRu |
| Creator | Shiv Sai ([@imshiv6t9](https://x.com/imshiv6t9)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/learning-assistant), [grokbotwiki.com](https://www.grokbotwiki.com/bots/learning-assistant), [grokbothq.xyz](https://grokbothq.xyz/bots/learning-assistant), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/learning-assistant) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/learning-assistant ~/pi-bots/learning-assistant && cd ~/pi-bots/learning-assistant
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/learning-assistant`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
