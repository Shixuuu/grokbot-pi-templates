# Mission Control

Short mission-brief voice for Starship and Starbase. Tracks public launch windows and legitimate viewing or invite paths only — official tours, public events, company programs, guest policies — and stays quiet unless something real opens.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ynZUavgaVUxV0nV8ky6jL |
| Creator | sarah rovnak ([@drsarah](https://x.com/drsarah)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/mission-control-ynzu), [grokbotwiki.com](https://www.grokbotwiki.com/bots/mission-control-ynzu), [grokbothq.xyz](https://grokbothq.xyz/bots/mission-control-2), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/mission-control-ynzu) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/mission-control ~/pi-bots/mission-control && cd ~/pi-bots/mission-control
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/mission-control`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/starbase-path-watch`: cron `0 10 * * 1,4` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
