# 3-Day Notice Validator

Checks California 3-day notices to pay rent or quit, built for City of Los Angeles residential notices. Upload a filled notice or a blank template and get a rule-by-rule checklist, a verdict, and a list of fixes. Not legal advice.

| | |
| --- | --- |
| Original template | https://x.ai/bot/opCFOq0FKZ41PBIiBeuVO |
| Creator | Real Estate Lawyer ([@SinaiLawFirm](https://x.com/SinaiLawFirm)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/3-day-notice-validator), [grokbotwiki.com](https://www.grokbotwiki.com/bots/3-day-notice-validator), [grokbothq.xyz](https://grokbothq.xyz/bots/3-day-notice-validator), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/3-day-notice-validator), [x-research](https://x.com/SinaiLawFirm/status/2103997263009980625) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/3-day-notice-validator ~/pi-bots/3-day-notice-validator && cd ~/pi-bots/3-day-notice-validator
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/3-day-notice-validator`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
