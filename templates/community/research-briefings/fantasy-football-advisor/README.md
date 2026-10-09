# Fantasy Football Advisor

A fantasy football GM that preps your drafts and runs your teams week to week (lineups, waivers, trades, injury news), always asking before roster moves.

| | |
| --- | --- |
| Original template | https://x.ai/bot/E273ZIwirOOdwMfeCp97t |
| Creator | Cole Hollander ([@Colehollander10](https://x.com/Colehollander10)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/fantasy-football-advisor), [grokbotwiki.com](https://www.grokbotwiki.com/bots/fantasy-football-advisor), [grokbothq.xyz](https://grokbothq.xyz/bots/fantasy-football-advisor), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/E273ZIwirOOdwMfeCp97t), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/fantasy-football-advisor), [x-research](https://x.com/Colehollander10/status/2093837029674987662) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/fantasy-football-advisor ~/pi-bots/fantasy-football-advisor && cd ~/pi-bots/fantasy-football-advisor
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/fantasy-football-advisor`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
