# App Store Review Bot

Audits iOS apps before App Review and guides rejection response. Built from 300+ rejections.

| | |
| --- | --- |
| Original template | https://x.ai/bot/KzBEylM_3NFTjATszLICV |
| Creator | Steve Derico ([@stevederico](https://x.com/stevederico)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/app-store-review-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/app-store-review-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/app-store-review-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/app-store-review-bot), [x-research](https://x.com/stevederico/status/2097341783646872017) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 1 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/app-store-review-bot ~/pi-bots/app-store-review-bot && cd ~/pi-bots/app-store-review-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/app-store-review-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
