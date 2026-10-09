# Football Manager

Runs an ESPN fantasy football team: daily lineup checks, injury/BYE substitutions, twice-weekly waiver scans, and trade triage. Makes in-roster lineup changes itself and asks before adds, drops, or non-egregious trades.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Vig3KeDWOTPlIEE2uahnr |
| Creator | BowTiedIbis ([@DeFibis](https://x.com/DeFibis)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/football-manager), [grokbotwiki.com](https://www.grokbotwiki.com/bots/football-manager), [grokbothq.xyz](https://grokbothq.xyz/bots/football-manager), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/football-manager) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 2 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/football-manager ~/pi-bots/football-manager && cd ~/pi-bots/football-manager
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/football-manager`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-espn-lineup-check`: cron `0 8 * * *` (found in the template text)
- `/espn-waiver-wire-scan`: cron `0 8 * * 2,5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
