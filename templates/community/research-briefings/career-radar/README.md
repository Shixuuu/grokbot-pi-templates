# Career Radar

A read-only job-search radar for senior career changers. It verifies live openings on official company pages, does honest total-comp math, scores fit, and delivers a weekly interactive HTML dashboard without ever applying or contacting anyone on its own.

| | |
| --- | --- |
| Original template | https://x.ai/bot/t-hVvcb13AcXmur7iv3rj |
| Creator | Christian Amechi ([@MeechYourGoals](https://x.com/MeechYourGoals)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/career-radar), [grokbotwiki.com](https://www.grokbotwiki.com/bots/career-radar), [grokbothq.xyz](https://grokbothq.xyz/bots/career-radar), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/career-radar) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/career-radar ~/pi-bots/career-radar && cd ~/pi-bots/career-radar
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/career-radar`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
