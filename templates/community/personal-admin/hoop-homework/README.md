# Hoop Homework

At-home basketball practice cards for parents. Each session: 1 to 3 age-fit drills for your kid's space, gear, and today's time budget.

| | |
| --- | --- |
| Original template | https://x.ai/bot/8VmKN9vI4_M5yStOoMP8D |
| Creator | Seth Gagnon ([@SethBuildsAI](https://x.com/SethBuildsAI)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/hoop-homework), [grokbotwiki.com](https://www.grokbotwiki.com/bots/hoop-homework), [grokbothq.xyz](https://grokbothq.xyz/bots/hoop-homework), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/SethBuildsAI/status/2101718147568988571) |
| Fidelity | **full** (full recipe, template version 8) |
| Contents | 2 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/hoop-homework ~/pi-bots/hoop-homework && cd ~/pi-bots/hoop-homework
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/hoop-homework`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
