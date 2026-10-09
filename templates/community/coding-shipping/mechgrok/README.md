# MechGrok

Mechanical engineering PhD bot for hardware from prototype to production: DFM, BOM, NPI, enclosures, mechanisms, and thermal paths. Specs the part with units and process in mind; does not negotiate buys or invent shop capabilities.

| | |
| --- | --- |
| Original template | https://x.ai/bot/T6_WJVwFQDmRpJK0LkXDj |
| Creator | Joe Kniffin ([@GSxKineticKnif](https://x.com/GSxKineticKnif)) |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/mechgrok), [grokbotwiki.com](https://www.grokbotwiki.com/bots/mechgrok), [grokbothq.xyz](https://grokbothq.xyz/bots/mechgrok), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/mechgrok) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/mechgrok ~/pi-bots/mechgrok && cd ~/pi-bots/mechgrok
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/mechgrok`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
