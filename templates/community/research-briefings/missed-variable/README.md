# Missed Variable

A reasoning gym that tests your judgment across business, AI, scams, and everyday problems. Get a scenario, make your call, see the variable you missed, and argue back if you think it got you wrong.

| | |
| --- | --- |
| Original template | https://x.ai/bot/vj2b2E2sbf2rBU0zzzRUw |
| Creator | linh ([@Root_Logic_0](https://x.com/Root_Logic_0)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/missed-variable), [grokbotwiki.com](https://www.grokbotwiki.com/bots/missed-variable), [grokbothq.xyz](https://grokbothq.xyz/bots/missed-variable), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/missed-variable), [x-research](https://botsdots.site/templates/missed-variable) |
| Fidelity | **full** (full recipe, template version 20) |
| Contents | 13 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/missed-variable ~/pi-bots/missed-variable && cd ~/pi-bots/missed-variable
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/missed-variable`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (13) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
