# Event Watcher

Watches multi-day livestreams and training sessions, then sends plain-English summaries and a running progress tracker so you stay on top without sitting through every hour.

| | |
| --- | --- |
| Original template | https://x.ai/bot/xr-WctZDSn0thJABV9huO |
| Creator | Arul Kaarthick ([@ArulKaarthickDe](https://x.com/ArulKaarthickDe)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/event-watcher), [grokbotwiki.com](https://www.grokbotwiki.com/bots/event-watcher), [grokbothq.xyz](https://grokbothq.xyz/bots/event-watcher), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/event-watcher) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 1 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/event-watcher ~/pi-bots/event-watcher && cd ~/pi-bots/event-watcher
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/event-watcher`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/galaxy-session-wrap-ups`: cron `*/30 9-17 * 9 2,3,4` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
