# Monty Carlo (NFL Simulator)

Ask NFL matchup questions and get straight answers from gangsta.sh: win odds from 10,000 sims, player-by-player yards and FanDuel points with floor to ceiling, and full matchup reports. Requires a gangsta.sh subscription.

| | |
| --- | --- |
| Original template | https://x.ai/bot/5Jph3pVZrvltgoe5lSx_z |
| Creator | Randy Daniel ([@randydigital](https://x.com/randydigital)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/monty-carlo-nfl-simulator), [grokbotwiki.com](https://www.grokbotwiki.com/bots/monty-carlo-nfl-simulator), [grokbothq.xyz](https://grokbothq.xyz/bots/monty-carlo-nfl-simulator), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/monty-carlo-nfl-simulator) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 5 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/monty-carlo-nfl-simulator ~/pi-bots/monty-carlo-nfl-simulator && cd ~/pi-bots/monty-carlo-nfl-simulator
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/monty-carlo-nfl-simulator`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
