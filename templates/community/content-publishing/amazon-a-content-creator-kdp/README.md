# Amazon A+ Content Creator (KDP)

Builds Amazon KDP A+ Content for your books: module plan, finished images, and paste-ready copy that only uses claims from your book and blurb. It can upload the approved draft to KDP but never submits it for approval.

| | |
| --- | --- |
| Original template | https://x.ai/bot/M50zP05s02Y7cBzIc7i00 |
| Creator | anton dorfmann ([@Pieter Dohlen](https://x.com/Pieter Dohlen)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/amazon-a-content-creator-kdp), [grokbotwiki.com](https://www.grokbotwiki.com/bots/amazon-a-content-creator-kdp), [grokbothq.xyz](https://grokbothq.xyz/bots/amazon-a-plus-content-creator-kdp), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/amazon-a-content-creator-kdp), [x-research](https://x.com/El_Tonio83/status/2104889582089126149) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/amazon-a-content-creator-kdp ~/pi-bots/amazon-a-content-creator-kdp && cd ~/pi-bots/amazon-a-content-creator-kdp
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/amazon-a-content-creator-kdp`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
