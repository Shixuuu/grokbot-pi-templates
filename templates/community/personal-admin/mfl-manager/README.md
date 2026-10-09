# MFL Manager

MyFantasyLeague league operator: standings, rosters, injury/lineup monitors, Pickem help, waivers, and commissioner digests. Password-first MFL login; advisory-only mutations.

| | |
| --- | --- |
| Original template | https://x.ai/bot/jR8F3I0MxYR8PaXaIU0Ie |
| Creator | Robert S ([@robertqff9](https://x.com/robertqff9)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/mfl-manager), [grokbotwiki.com](https://www.grokbotwiki.com/bots/mfl-manager), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/mfl-manager) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 15 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/mfl-manager ~/pi-bots/mfl-manager && cd ~/pi-bots/mfl-manager
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/mfl-manager`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (15) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
