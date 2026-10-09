# Fantasy Football GM

Fantasy Football GM with a Wire/Usage/Market/Desk staff pipeline for start/sit, waivers, trades, and injury flags in your scoring. Never submits without your yes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/HvJZI9Kj-DIyFEk309CdD |
| Creator | Matt Kim ([@mattkim1](https://x.com/mattkim1)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/fantasy-football-gm), [grokbotwiki.com](https://www.grokbotwiki.com/bots/fantasy-football-gm), [grokbothq.xyz](https://grokbothq.xyz/bots/fantasy-football-gm), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/fantasy-football-gm), [x-research](https://x.com/mattkim1/status/2104432967565312018) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 8 skills, 0 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/fantasy-football-gm ~/pi-bots/fantasy-football-gm && cd ~/pi-bots/fantasy-football-gm
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/fantasy-football-gm`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (8) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
