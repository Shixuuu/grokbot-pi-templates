# Creador de tienda online

Te ayuda a crear tu tienda online desde cero: plataforma, productos, dominio, pagos, envíos y primeras ventas. En español.

| | |
| --- | --- |
| Original template | https://x.ai/bot/AJFbb3Epeafxp7m6jx3aI |
| Creator | Karina Geigner ([@KarinaGeigner](https://x.com/KarinaGeigner)) |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/creador-de-tienda-online), [grokbotwiki.com](https://www.grokbotwiki.com/bots/creador-de-tienda-online), [grokbothq.xyz](https://grokbothq.xyz/bots/creador-de-tienda-online), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/creador-de-tienda-online), [x-research](https://botsdots.site/templates/creador-de-tienda-online) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/creador-de-tienda-online ~/pi-bots/creador-de-tienda-online && cd ~/pi-bots/creador-de-tienda-online
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/creador-de-tienda-online`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
