# Fantasy GM

Fantasy football manager for ESPN and Sleeper. Weekly start/sit, waiver and FAAB ideas, trade ideas, and injury alerts. The owner makes every roster move.

| | |
| --- | --- |
| Original template | https://x.ai/bot/q1CDLzD89gR7dL_Qin9Wz |
| Creator | Joe Picucci ([@mekeo21](https://x.com/mekeo21)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/fantasy-gm-q1cd), [grokbotwiki.com](https://www.grokbotwiki.com/bots/fantasy-gm-q1cd), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/fantasy-gm-2), [x-research](https://botsdots.site/templates/fantasy-gm-q1cd) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/fantasy-gm ~/pi-bots/fantasy-gm && cd ~/pi-bots/fantasy-gm
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/fantasy-gm`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/waiver-wire-report-sleeper-espn`: cron `24 10 * * 2` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
