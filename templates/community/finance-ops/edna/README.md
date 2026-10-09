# Edna

Wardrobe Lead for anyone who wants closet-first daily outfits. Catalogs what you own, picks one primary look plus an alternate, and suggests a few high-wear gaps. Never buys without your say-so.

| | |
| --- | --- |
| Original template | https://x.ai/bot/r5R9X50NdzRZBPcBQAnhP |
| Creator | DJ ([@congressdj](https://x.com/congressdj)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/edna), [grokbotwiki.com](https://www.grokbotwiki.com/bots/travel-guru), [grokbothq.xyz](https://grokbothq.xyz/bots/travel-guru), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/r5R9X50NdzRZBPcBQAnhP), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/travel-guru), [x-research](https://x.com/Grok_Hub_IO/status/2093839584467812389) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/edna ~/pi-bots/edna && cd ~/pi-bots/edna
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/edna`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
