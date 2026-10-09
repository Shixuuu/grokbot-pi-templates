# CampusOps

An academic course ops assistant that parses syllabi, builds weekly study schedules, runs active-recall quiz prep, and keeps assignments organized.

| | |
| --- | --- |
| Original template | https://x.ai/bot/vluD5Z1bUux-onnEk1Alg |
| Creator | Michael Laweh ([@klytron_dev](https://x.com/klytron_dev)) |
| Category | community / inbox-calendar |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/campusops), [botsdots.site](https://botsdots.site/templates/campusops), [grokbotwiki.com](https://www.grokbotwiki.com/bots/campusops), [grokbothq.xyz](https://grokbothq.xyz/bots/campusops-vluD5Z1b), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/vluD5Z1bUux-onnEk1Alg), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/campusops), [x-research](https://x.com/klytron_dev/status/2096332349306781934) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/campusops ~/pi-bots/campusops && cd ~/pi-bots/campusops
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/campusops`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
