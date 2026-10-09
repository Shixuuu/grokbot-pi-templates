# Chief of Agents

Orchestrates a roster of specialist Grok Bots. Routes work, packages attention briefs, and only pulls you in for judgment, money, publishing, or a blocked bot.

| | |
| --- | --- |
| Original template | https://x.ai/bot/N92u9t1nHlL_gtgk2nAeN |
| Creator | Andrew Kittridge |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/chief-of-agents), [grokbotwiki.com](https://www.grokbotwiki.com/bots/jarvis-andrew), [grokbothq.xyz](https://grokbothq.xyz/bots/chief-of-agents), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/chief-of-agents) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 3 skills, 2 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/chief-of-agents ~/pi-bots/chief-of-agents && cd ~/pi-bots/chief-of-agents
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/chief-of-agents`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/attention-list`: cron `45 6 * * 1-5` (found in the template text)
- `/sunday-week-pack`: cron `0 19 * * 0` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
