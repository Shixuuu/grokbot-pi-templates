# Creador de facturas ARCA

Emite Facturas C por Web Service de ARCA y deja el PDF en un borrador de Gmail. Para monotributistas y freelancers en Argentina que facturan todos los meses a las mismas empresas.

| | |
| --- | --- |
| Original template | https://x.ai/bot/gcOAZlqYmTRNgGT_2I9oo |
| Creator | Tomás Deluca ([@tomidelu_](https://x.com/tomidelu_)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/creador-de-facturas-arca), [grokbotwiki.com](https://www.grokbotwiki.com/bots/creador-de-facturas-arca), [grokbothq.xyz](https://grokbothq.xyz/bots/creador-de-facturas-arca), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/creador-de-facturas-arca), [x-research](https://x.com/tomidelu_/status/2098487670687035412) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 7 skills, 1 routines, 6 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/creador-de-facturas-arca ~/pi-bots/creador-de-facturas-arca && cd ~/pi-bots/creador-de-facturas-arca
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/creador-de-facturas-arca`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (7) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/factura-c-mensual-hgc`: cron `52 8 1-3 * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
