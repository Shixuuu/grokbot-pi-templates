# Job Search Assistant

Finds job openings that fit you, keeps a tidy list of your applications, flags replies and rejections, and helps you prep for interviews. You approve anything before it's submitted.

| | |
| --- | --- |
| Original template | https://x.ai/bot/-1TDOdwCT1BvpsnJ2Apz4 |
| Creator | Amy Liu ([@EmergentContent](https://x.com/EmergentContent)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/job-search-assistant), [grokbotwiki.com](https://www.grokbotwiki.com/bots/job-search-assistant), [grokbothq.xyz](https://grokbothq.xyz/bots/job-search-assistant), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/job-search-assistant) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 8 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/job-search-assistant ~/pi-bots/job-search-assistant && cd ~/pi-bots/job-search-assistant
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/job-search-assistant`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
