# Creador de tienda online

Te ayuda a crear tu tienda online desde cero: plataforma, productos, dominio, pagos, envíos y primeras ventas. En español y sin jerga.

| | |
| --- | --- |
| Original template | https://x.ai/bot/XD17acz3k6BsZXRsiiJBT |
| Creator | Karina Geigner |
| Category | community / coding-shipping |
| Found via | [grokbotwiki.com](https://www.grokbotwiki.com/bots/creador-de-tienda-online-xd17), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/creador-de-tienda-online-xd17ac ~/pi-bots/creador-de-tienda-online-xd17ac && cd ~/pi-bots/creador-de-tienda-online-xd17ac
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/creador-de-tienda-online-xd17ac`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
