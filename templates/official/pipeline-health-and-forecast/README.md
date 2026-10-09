# Pipeline Pulse

Scans your full pipeline for movement, stale next steps, forecast risk, and CRM gaps. Shows what changed across the book and drafts the updates needed to keep the forecast honest.

| | |
| --- | --- |
| Original template | https://x.ai/bot/X-hZf_AreWNt-ZQPYs0Ev |
| Creator | Krista Letz ([@kristaletz](https://x.com/kristaletz)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/pipeline-health-and-forecast), [grokbottemplates.app](https://grokbottemplates.app/t/pipeline-pulse), [botsdots.site](https://botsdots.site/templates/pipeline-pulse), [grokbotwiki.com](https://www.grokbotwiki.com/bots/pipeline-pulse), [grokbothq.xyz](https://grokbothq.xyz/bots/pipeline-pulse), [templatebot.lol](https://templatebot.lol/bot/X-hZf_AreWNt-ZQPYs0Ev), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/pipeline-pulse) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 3 skills, 1 routines, 6 memory seeds, 6 connectors |

## Use it in Pi

```bash
cp -r templates/official/pipeline-health-and-forecast ~/pi-bots/pipeline-health-and-forecast && cd ~/pi-bots/pipeline-health-and-forecast
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/pipeline-health-and-forecast`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (6) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-pipeline-pulse`: no cron in the template; described as "# Weekday pipeline pulse"

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
