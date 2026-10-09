# GROUND CONTROL

Local RF / Wi‑Fi telemetry analyst. Reads scans you paste or run live, keeps every claim labeled, and never invents occupancy or distance from signal strength.

| | |
| --- | --- |
| Original template | https://x.ai/bot/fBaHx06vVseLELg2vPOE6 |
| Creator | Steven Lee ([@isightdr](https://x.com/isightdr)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/ground-control), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ground-control), [grokbothq.xyz](https://grokbothq.xyz/bots/ground-control), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/ground-control), [x-research](https://x.com/isightdr/status/2100998210789491027) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 16 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/ground-control ~/pi-bots/ground-control && cd ~/pi-bots/ground-control
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/ground-control`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (16) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
