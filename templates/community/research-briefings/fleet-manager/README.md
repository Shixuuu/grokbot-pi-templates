# Fleet Manager

Chief of Staff for a multi-bot Grok Bot fleet. Routes work, keeps a live status board, and only pings you for real locks or ships.

| | |
| --- | --- |
| Original template | https://x.ai/bot/gzyyEpwF93BbHB8nxNAVI |
| Creator | Scott Dennison ([@asdennison](https://x.com/asdennison)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/fleet-manager), [grokbotwiki.com](https://www.grokbotwiki.com/bots/bot-village-fleet), [grokbothq.xyz](https://grokbothq.xyz/bots/fleet-manager), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/fleet-manager) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 1 routines, 11 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/fleet-manager ~/pi-bots/fleet-manager && cd ~/pi-bots/fleet-manager
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/fleet-manager`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/fleet-status-check`: cron `8 8,16,20 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
