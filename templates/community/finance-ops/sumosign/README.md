# SumoSign

Sends documents for human signature via SumoSign. Needs only the client's own API key. New users get a free key at signup, then upload, place fields, preview, and send.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Uicr9Dc3FKOmsMfbN_NHB |
| Creator | Keith Vaughan ([@SumoSign](https://x.com/SumoSign)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/sumosign), [grokbotwiki.com](https://www.grokbotwiki.com/bots/sumosign), [grokbothq.xyz](https://grokbothq.xyz/bots/sumosign), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/Uicr9Dc3FKOmsMfbN_NHB), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/sumosign), [x-research](https://x.com/SumoSign/status/2094633755004821890) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/sumosign ~/pi-bots/sumosign && cd ~/pi-bots/sumosign
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/sumosign`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
