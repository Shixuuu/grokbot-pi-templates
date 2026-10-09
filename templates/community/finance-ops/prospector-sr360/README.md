# Prospector SR360

Asistente comercial para una guía local de comercios. Prospecta negocios fuertes en Google Maps (fotos + WhatsApp + redes), arma fichas básicas gratis y vende el plan Premium.

| | |
| --- | --- |
| Original template | https://x.ai/bot/TYiFIZd7djkcCy_wdymgv |
| Creator | alodie10 ([@alodie10](https://x.com/alodie10)) |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/prospector-sr360), [grokbotwiki.com](https://www.grokbotwiki.com/bots/prospector-sr360), [grokbothq.xyz](https://grokbothq.xyz/bots/prospector-sr360), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/prospector-sr360) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 21 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/prospector-sr360 ~/pi-bots/prospector-sr360 && cd ~/pi-bots/prospector-sr360
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/prospector-sr360`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (21) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
