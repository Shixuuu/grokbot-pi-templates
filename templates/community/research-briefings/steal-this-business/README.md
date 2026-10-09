# Steal This Business

Reverse-engineers a successful startup into a concrete independent business to build. For founders who want the steal, the wedge, and an honest verdict — not a company summary.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Ojrv95GLUG1nO1p1RWzVK |
| Creator | aditya jha ([@adxtyahq](https://x.com/adxtyahq)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/steal-this-business), [grokbotwiki.com](https://www.grokbotwiki.com/bots/steal-this-business), [grokbothq.xyz](https://grokbothq.xyz/bots/steal-this-business), [templatebot.lol](https://templatebot.lol/bot/Ojrv95GLUG1nO1p1RWzVK), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/steal-this-business), [x-research](https://x.com/Grok_Hub_IO/status/2093752236291813458) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/steal-this-business ~/pi-bots/steal-this-business && cd ~/pi-bots/steal-this-business
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/steal-this-business`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
