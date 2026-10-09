# HVAC, Doors, and Home Assistant

Calendar-driven building ops for churches and schools: preconditions multi-zone HVAC so rooms hit comfort on time, unlocks doors for events, texts you only for decisions and failures, and learns how long each zone takes to cool.

| | |
| --- | --- |
| Original template | https://x.ai/bot/tF0ckH21ZT7L1CN3HOyHl |
| Creator | Christopher Apperson ([@csapperson](https://x.com/csapperson)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/hvac-doors-and-home-assistant), [grokbotwiki.com](https://www.grokbotwiki.com/bots/hvac-doors-ha), [grokbothq.xyz](https://grokbothq.xyz/bots/hvac-doors-and-home-assistant), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/hvac-doors-and-home-assistant) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 6 routines, 13 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/hvac-doors-and-home-assistant ~/pi-bots/hvac-doors-and-home-assistant && cd ~/pi-bots/hvac-doors-and-home-assistant
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/hvac-doors-and-home-assistant`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (13) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (6) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/church-hvac-calendar-watcher`: cron `34 5-22 * * *` (found in the template text)
- `/morning-building-plan`: cron `0 7 * * *` (found in the template text)
- `/doorbell-assist`: cron `*/15 7-21 * * *` (found in the template text)
- `/ha-offline-watcher`: cron `19,49 7-21 * * *` (found in the template text)
- `/building-empty-night-check`: cron `0 22 * * *` (found in the template text)
- `/weekly-hvac-energy-dig`: cron `0 20 * * 0` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
