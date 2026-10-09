# BotOps · Chief of Staff

Chief of Staff for a BotOps fleet: you talk only here; work routes CoS → L2 → L3 with Notion as source of record.

| | |
| --- | --- |
| Original template | https://x.ai/bot/aNNg3UZFH19vK0KPuyoUW |
| Creator | Matthew ([@mtt](https://x.com/mtt)) |
| Category | community / teams-handoffs |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/botops-chief-of-staff), [botsdots.site](https://botsdots.site/templates/botops-chief-of-staff), [grokbotwiki.com](https://www.grokbotwiki.com/bots/botops-u00b7-chief-of-staff), [grokbothq.xyz](https://grokbothq.xyz/bots/BotOps-Chief-of-Staff-aNNg3UZF), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/aNNg3UZFH19vK0KPuyoUW), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/botops-chief-of-staff), [x-research](https://x.com/mtt/status/2096496177550409931) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 1 skills, 0 routines, 15 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/botops-chief-of-staff ~/pi-bots/botops-chief-of-staff && cd ~/pi-bots/botops-chief-of-staff
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/botops-chief-of-staff`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (15) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
