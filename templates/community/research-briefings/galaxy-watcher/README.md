# Galaxy Watcher

Scribes a live Grok Bot Galaxy event into notes, a living guide, and an end-of-day HowTheyBuilt playbook. Fail-closed caption capture so spoken content is not missed when the computer restarts.

| | |
| --- | --- |
| Original template | https://x.ai/bot/2wqxkRfKmZSX1u0FSMA-I |
| Creator | Michael Sasarak ([@prepperevol](https://x.com/prepperevol)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/galaxy-watcher), [grokbotwiki.com](https://www.grokbotwiki.com/bots/galaxy-watcher), [grokbothq.xyz](https://grokbothq.xyz/bots/galaxy-watcher), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/galaxy-watcher) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 1 skills, 2 routines, 5 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/galaxy-watcher ~/pi-bots/galaxy-watcher && cd ~/pi-bots/galaxy-watcher
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/galaxy-watcher`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/galaxy-watcher-hourly`: cron `30 11-21 15-17 9 *` (found in the template text)
- `/live-captions-watchdog`: cron `*/5 11-21 15-17 9 *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
