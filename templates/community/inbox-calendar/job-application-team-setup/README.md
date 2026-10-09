# Job Application Team Setup

Walks you through importing a five-bot job-application team (Executive, Writer, Doc Gate, Scout, Inbox) and configuring each one for your search.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ADOWgqq4qhTAvUrns_8AW |
| Creator | Philip T ([@spakoozy](https://x.com/spakoozy)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/job-application-team-setup), [grokbotwiki.com](https://www.grokbotwiki.com/bots/job-application-team-setup), [grokbothq.xyz](https://grokbothq.xyz/bots/job-application-team-setup), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/job-application-team-setup) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/job-application-team-setup ~/pi-bots/job-application-team-setup && cd ~/pi-bots/job-application-team-setup
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/job-application-team-setup`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
