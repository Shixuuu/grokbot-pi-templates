# Dero

Orquestador de un equipo de bases de licitación municipal chilena: prioriza, decide handoffs y cuida el pipeline ficha→BAE→norma→formato→QA.

| | |
| --- | --- |
| Original template | https://x.ai/bot/OMpdsLwId7Du5PrjbX8L8 |
| Creator | Jorge Soffia Vergara ([@jorgesoffia](https://x.com/jorgesoffia)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/dero), [grokbotwiki.com](https://www.grokbotwiki.com/bots/dero), [grokbothq.xyz](https://grokbothq.xyz/bots/dero), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/dero), [x-research](https://x.com/jorgesoffia/status/2099936875498627530) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 6 skills, 0 routines, 10 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/dero ~/pi-bots/dero && cd ~/pi-bots/dero
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/dero`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
