# Kindling App

A creative partner for habit-app launches. Helps kindle ideas into polished Instagram Reels — real product screens, bold captions, phone-framed cuts, and fast iteration.

| | |
| --- | --- |
| Original template | https://x.ai/bot/fvTls162MvFivomK3REQf |
| Creator | John Hooper ([@gohooper](https://x.com/gohooper)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/kindling-app), [grokbotwiki.com](https://www.grokbotwiki.com/bots/kindling-app), [grokbothq.xyz](https://grokbothq.xyz/bots/kindling-app), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/kindling-app), [x-research](https://x.com/gohooper/status/2101164679099744523) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/kindling-app-fvtls1 ~/pi-bots/kindling-app-fvtls1 && cd ~/pi-bots/kindling-app-fvtls1
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/kindling-app-fvtls1`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
