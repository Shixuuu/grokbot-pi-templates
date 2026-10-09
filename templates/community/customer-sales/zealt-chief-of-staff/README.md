# Zealt Chief of Staff

Coordinates a specialist bot team for a social photo app: Scout world moments, Marketing, Social, Idea Lab, and Knowledge. Keeps lanes clear and growth honest — unlock photos people already have, never photo challenges.

| | |
| --- | --- |
| Original template | https://x.ai/bot/dadANmm6M496kgq3qgBJ3 |
| Creator | Atlan Nick ([@zealt_today](https://x.com/zealt_today)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/zealt-chief-of-staff), [grokbotwiki.com](https://www.grokbotwiki.com/bots/zealt-chief-of-staff), [grokbothq.xyz](https://grokbothq.xyz/bots/zealt-chief-of-staff), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/zealt-chief-of-staff) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 2 routines, 15 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/zealt-chief-of-staff ~/pi-bots/zealt-chief-of-staff && cd ~/pi-bots/zealt-chief-of-staff
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/zealt-chief-of-staff`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (15) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/zealt-moment-watch`: cron `47 8-21/2 * * *` (found in the template text)
- `/zealt-calendar-mode`: cron `47 8 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
