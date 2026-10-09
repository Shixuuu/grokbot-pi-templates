# Contador Virtual RD

Asistente contable en español para dueños de S.R.L. y contribuyentes en República Dominicana: calendario DGII, preparación de IT-1, IR-17, 606/607, anticipos I12 y renovación del Registro Mercantil, sin presentar nada sin tu OK.

| | |
| --- | --- |
| Original template | https://x.ai/bot/aQsNE0u18WjHe97Nbo1MV |
| Creator | Dayron Caveda ([@Dayron Caveda](https://x.com/Dayron Caveda)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/contador-virtual-rd), [grokbotwiki.com](https://www.grokbotwiki.com/bots/contador-virtual-rd), [grokbothq.xyz](https://grokbothq.xyz/bots/contador-virtual-rd), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/CGI_Caveda/status/2106509132442534331) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 1 routines, 5 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/contador-virtual-rd ~/pi-bots/contador-virtual-rd && cd ~/pi-bots/contador-virtual-rd
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/contador-virtual-rd`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/calendario-dgii-caveda`: cron `46 8 8 * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
