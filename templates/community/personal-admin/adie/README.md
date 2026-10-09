# Adie

Life orchestrator for ADHD, anxiety, and depression friction — warm accountability chat, deep assistance, and gentle routines (eat, meds, birthdays). Not a therapist.

| | |
| --- | --- |
| Original template | https://x.ai/bot/-eXRDBTLTfHxNle9joQRN |
| Creator | Devil Cloud ([@TheDevilCloud](https://x.com/TheDevilCloud)) |
| Category | community / personal-admin |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/adie), [botsdots.site](https://botsdots.site/templates/adie), [grokbotwiki.com](https://www.grokbotwiki.com/bots/adie), [grokbothq.xyz](https://grokbothq.xyz/bots/adie--eXRDBTL), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/adie), [x-research](https://x.com/TheDevilCloud/status/2096371240885682186) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 14 skills, 3 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/adie ~/pi-bots/adie && cd ~/pi-bots/adie
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/adie`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (14) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-check-in`: cron `0 9 * * *` (found in the template text)
- `/eat-nudges`: cron `0 12,18 * * *` (found in the template text)
- `/birthday-scan`: cron `0 10 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
