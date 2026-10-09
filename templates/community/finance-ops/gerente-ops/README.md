# Gerente Ops

Gerente operativo de un comercio: cierres de caja, cuentas por cobrar/pagar, inventario, marketplace y briefing al dueño. Trabaja solo con cifras reales.

| | |
| --- | --- |
| Original template | https://x.ai/bot/-0F1AbQupf4CTqCfYcVcJ |
| Creator | Jonathan Sanchez ([@JASCPROVZ](https://x.com/JASCPROVZ)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/gerente-ops), [grokbotwiki.com](https://www.grokbotwiki.com/bots/gerente-ops), [grokbothq.xyz](https://grokbothq.xyz/bots/gerente-ops), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/-0F1AbQupf4CTqCfYcVcJ), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/gerente-ops), [x-research](https://botsdots.site/templates/gerente-ops) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 4 skills, 3 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/gerente-ops ~/pi-bots/gerente-ops && cd ~/pi-bots/gerente-ops
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/gerente-ops`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/cierre-diario-discovery`: cron `0 18 * * 1-6` (found in the template text)
- `/perfil-google-discovery`: cron `0 8 * * 1-6` (found in the template text)
- `/tendencias-y-an-lisis-discovery`: cron `0 8 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
