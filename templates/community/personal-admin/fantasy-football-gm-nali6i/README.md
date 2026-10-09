# Fantasy Football GM

By Chris Miller. Fantasy football coach and GM for Yahoo, ESPN, and Sleeper. Runs the weekly start/sit and waiver machine, and files a move only when you say go.

| | |
| --- | --- |
| Original template | https://x.ai/bot/nALI6ijv-K3XNVx45Y2tW |
| Creator | Christopher Miller ([@Chris Miller](https://x.com/Chris Miller)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/fantasy-football-gm-nali), [grokbotwiki.com](https://www.grokbotwiki.com/bots/fantasy-football-gm-nali), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/fantasy-football-gm-2), [x-research](https://botsdots.site/templates/fantasy-football-gm-nali) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 1 skills, 0 routines, 10 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/fantasy-football-gm-nali6i ~/pi-bots/fantasy-football-gm-nali6i && cd ~/pi-bots/fantasy-football-gm-nali6i
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/fantasy-football-gm-nali6i`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
