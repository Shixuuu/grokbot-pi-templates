# Syllabot

Syllabot helps you build and manage courses on Kajabi. A user-built tool, not an official Kajabi product.

| | |
| --- | --- |
| Original template | https://x.ai/bot/uLaiAPTZzDV7vfptofUov |
| Creator | Dave Gambrill ([@gambrill](https://x.com/gambrill)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/syllabot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/syllabot), [grokbothq.xyz](https://grokbothq.xyz/bots/syllabot), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/syllabot), [x-research](https://botsdots.site/templates/syllabot) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 4 skills, 0 routines, 11 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/syllabot ~/pi-bots/syllabot && cd ~/pi-bots/syllabot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/syllabot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
