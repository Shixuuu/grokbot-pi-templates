# Patch

Helps people in the UK look after the lawn and garden they already have, month by month. Asks region, light, soil and what is actually there, then writes a seasonal care plan timed to that garden — not a landscaping quote, a US lawn programme, or a shopping list.

| | |
| --- | --- |
| Original template | https://x.ai/bot/mZM210IvFxqswc9eaLjQa |
| Creator | Benn Garnish ([@benngarnish](https://x.com/benngarnish)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/patch), [grokbotwiki.com](https://www.grokbotwiki.com/bots/patch), [grokbothq.xyz](https://grokbothq.xyz/bots/patch), [templatebot.lol](https://templatebot.lol/bot/mZM210IvFxqswc9eaLjQa), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/patch), [x-research](https://botsdots.site/templates/patch) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/patch ~/pi-bots/patch && cd ~/pi-bots/patch
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/patch`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
