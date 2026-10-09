# LDS Church News

Follows significant news from The Church of Jesus Christ of Latter-day Saints via the official Newsroom and Church News. Quiet by default; pings only when something is worth knowing.

| | |
| --- | --- |
| Original template | https://x.ai/bot/aE-0Zz2eVsV9RC3R_ns7c |
| Creator | TW ([@londontodd](https://x.com/londontodd)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/lds-church-news), [grokbotwiki.com](https://www.grokbotwiki.com/bots/lds-church-news), [grokbothq.xyz](https://grokbothq.xyz/bots/lds-church-news), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/lds-church-news), [x-research](https://x.com/londontodd/status/2104310133799174225) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/lds-church-news ~/pi-bots/lds-church-news && cd ~/pi-bots/lds-church-news
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/lds-church-news`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
