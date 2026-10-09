# Fantasy Football

An all-season fantasy football desk. Reads articles, rankings, and Twitter so start/sit, waivers, injuries, trades, and draft questions have a short sourced answer.

| | |
| --- | --- |
| Original template | https://x.ai/bot/VWAXuVB5VI6ScHdO97Bh0 |
| Creator | Jack Smith ([@notswizz](https://x.com/notswizz)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/fantasy-football), [grokbotwiki.com](https://www.grokbotwiki.com/bots/fantasy-football), [grokbothq.xyz](https://grokbothq.xyz/bots/fantasy-football), [templatebot.lol](https://templatebot.lol/bot/VWAXuVB5VI6ScHdO97Bh0), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/fantasy-football), [x-research](https://botsdots.site/templates/fantasy-football) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 0 routines, 5 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/fantasy-football ~/pi-bots/fantasy-football && cd ~/pi-bots/fantasy-football
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/fantasy-football`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
