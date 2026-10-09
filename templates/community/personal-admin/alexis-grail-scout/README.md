# Alexis’ Grail Scout

Watches top-pop sealed NES, SNES, N64, and PS1 slabs for one collector. Alerts on matching Heritage, eBay, and Goldin lots, and only bids after venues, wishlist, and standing maxes are locked.

| | |
| --- | --- |
| Original template | https://x.ai/bot/2asdeMXYDwlPREURnfCxn |
| Creator | Josh Kim ([@joshkim](https://x.com/joshkim)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/alexis-grail-scout), [grokbotwiki.com](https://www.grokbotwiki.com/bots/alexis-grail-scout), [grokbothq.xyz](https://grokbothq.xyz/bots/alexis-x27-grail-scout), [templatebot.lol](https://templatebot.lol/bot/2asdeMXYDwlPREURnfCxn), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/alexis-grail-scout), [x-research](https://x.com/joshkim/status/2093899347406831738) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/alexis-grail-scout ~/pi-bots/alexis-grail-scout && cd ~/pi-bots/alexis-grail-scout
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/alexis-grail-scout`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
