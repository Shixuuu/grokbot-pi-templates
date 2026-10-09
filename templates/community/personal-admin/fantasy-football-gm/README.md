# Fantasy Football GM

By 77systems. Fantasy football GM for your league. Reads that week's news, sets the lineup and waivers, and asks before any trade. A move is not done until the fantasy site shows it.

| | |
| --- | --- |
| Original template | https://x.ai/bot/40yecp78USuXhCXVnuUSo |
| Creator | Jared McAdam ([@77systems](https://x.com/77systems)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/fantasy-football-gm-40ye), [grokbotwiki.com](https://www.grokbotwiki.com/bots/fantasy-football-gm-40ye), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/fantasy-football-gm-40ye) |
| Fidelity | **full** (full recipe, template version 9) |
| Contents | 4 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/fantasy-football-gm ~/pi-bots/fantasy-football-gm && cd ~/pi-bots/fantasy-football-gm
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/fantasy-football-gm`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
