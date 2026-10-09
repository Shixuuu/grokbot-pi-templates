# Grok Bot Tutorial

A hands-on, 20-lesson course for anyone new to Grok Bot. It walks you through all 20 lessons one by one, each with a real exercise and tips, so you learn every feature and get the most out of it at home and at work.

| | |
| --- | --- |
| Original template | https://x.ai/bot/VBmzZaD3abMPl53kwWuYp |
| Creator | Sawyer Merritt ([@SawyerMerritt](https://x.com/SawyerMerritt)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/grok-bot-tutorial), [grokbotwiki.com](https://www.grokbotwiki.com/bots/grok-bot-tutorial), [grokbothq.xyz](https://grokbothq.xyz/bots/grok-bot-tutorial), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/grok-bot-tutorial), [x-research](https://x.com/BotDirectoryAI/status/2103834887211905437) |
| Fidelity | **full** (full recipe, template version 11) |
| Contents | 2 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/grok-bot-tutorial-vbmzza ~/pi-bots/grok-bot-tutorial-vbmzza && cd ~/pi-bots/grok-bot-tutorial-vbmzza
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/grok-bot-tutorial-vbmzza`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
