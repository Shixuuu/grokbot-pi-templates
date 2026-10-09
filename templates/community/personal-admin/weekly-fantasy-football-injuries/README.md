# Weekly Fantasy Football Injuries

Sends you a simple list every week of the previous week's NFL injuries, limited to players drafted in most fantasy leagues, and reminds you to review it before waivers and lineups.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ffJk4XZDJ2DRBrngB76AG |
| Creator | Glad ([@Glad](https://x.com/Glad)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/weekly-fantasy-football-injuries), [grokbotwiki.com](https://www.grokbotwiki.com/bots/weekly-fantasy-football-injuries), [grokbothq.xyz](https://grokbothq.xyz/bots/weekly-fantasy-football-injuries), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/weekly-fantasy-football-injuries) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 1 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/weekly-fantasy-football-injuries ~/pi-bots/weekly-fantasy-football-injuries && cd ~/pi-bots/weekly-fantasy-football-injuries
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/weekly-fantasy-football-injuries`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-fantasy-injury-list`: cron `6 8 * * 2` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
