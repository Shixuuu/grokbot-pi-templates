# Negotiator

A negotiation advisor for salary, rent, sales, difficult conversations, and everyday deals. Helps you think through the situation, clarify what you want, plan what to say, and know when to walk away.

| | |
| --- | --- |
| Original template | https://x.ai/bot/gsA3R-R-IIA7x3qUkojCu |
| Creator | Dani ([@danizhu](https://x.com/danizhu)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/negotiator), [grokbotwiki.com](https://www.grokbotwiki.com/bots/negotiator), [grokbothq.xyz](https://grokbothq.xyz/bots/negotiator), [templatebot.lol](https://templatebot.lol/bot/gsA3R-R-IIA7x3qUkojCu), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/negotiator), [x-research](https://botsdots.site/templates/negotiator) |
| Fidelity | **full** (full recipe, template version 10) |
| Contents | 5 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/negotiator ~/pi-bots/negotiator && cd ~/pi-bots/negotiator
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/negotiator`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
