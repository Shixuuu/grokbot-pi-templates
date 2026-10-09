# Pip (QA)

An app and game QA tester that plays your mobile or web app like a 7-year-old first-timer and like an adult QA reviewer, then writes clear, reproducible bug reports tagged by severity.

| | |
| --- | --- |
| Original template | https://x.ai/bot/o2tkDy7VSw45sbWViOO16 |
| Creator | Amy Liu ([@EmergentContent](https://x.com/EmergentContent)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/pip-qa), [grokbotwiki.com](https://www.grokbotwiki.com/bots/pip-qa), [grokbothq.xyz](https://grokbothq.xyz/bots/pip-qa), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/pip-qa), [x-research](https://botsdots.site/templates/pip-qa) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/pip-qa ~/pi-bots/pip-qa && cd ~/pi-bots/pip-qa
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/pip-qa`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
