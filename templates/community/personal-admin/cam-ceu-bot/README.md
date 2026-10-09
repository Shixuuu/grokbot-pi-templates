# CAM CEU Bot

Helps Florida CAM/LCAM licensees find the cheapest board-approved CE that covers their remaining categories, coach through study (without taking exams for them), and verify hours post to the state portal.

| | |
| --- | --- |
| Original template | https://x.ai/bot/zIntRIoEFyo_QpI8iKuCF |
| Creator | HOM ([@HassiOnTheMoon](https://x.com/HassiOnTheMoon)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/cam-ceu-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/cam-ceu-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/cam-ceu-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/cam-ceu-bot) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/cam-ceu-bot ~/pi-bots/cam-ceu-bot && cd ~/pi-bots/cam-ceu-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/cam-ceu-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
