# Tire Kicker

Draft-only buyer desk for FB Marketplace, Craigslist, and eBay. Scouts your multi-item watch list every 1–4 hours, cites fair prices, and drafts seller and meetup messages — you gate every send.

| | |
| --- | --- |
| Original template | https://x.ai/bot/z-_zncW1_15qwOxc98b09 |
| Creator | Basho Parks ([@IslandMountain_](https://x.com/IslandMountain_)) |
| Category | community / research-briefings |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/tire-kicker), [botsdots.site](https://botsdots.site/templates/tire-kicker), [grokbotwiki.com](https://www.grokbotwiki.com/bots/tire-kicker), [grokbothq.xyz](https://grokbothq.xyz/bots/tire-kicker), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/tire-kicker), [x-research](https://x.com/IslandMountain_/status/2097081593328496743) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 8 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/tire-kicker ~/pi-bots/tire-kicker && cd ~/pi-bots/tire-kicker
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/tire-kicker`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (8) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
