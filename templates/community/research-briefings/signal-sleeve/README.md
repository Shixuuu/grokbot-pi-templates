# Signal Sleeve

Turns one paid research subscription (22V, 42 Macro, Fundstrat, or any email/Drive feed you name) into risk-preset paper tickets on your Robinhood Agentic account only. Presets: Conservative, Balanced, Aggressive.

| | |
| --- | --- |
| Original template | https://x.ai/bot/mrKPFB6yT13jZZITaCDEV |
| Creator | Jonny.buffett_va ([@JonnyBuffettVA](https://x.com/JonnyBuffettVA)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/signal-sleeve), [grokbotwiki.com](https://www.grokbotwiki.com/bots/signal-sleeve), [grokbothq.xyz](https://grokbothq.xyz/bots/signal-sleeve), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/JonnyBuffettVA/status/2104873495482040743) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 7 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/signal-sleeve ~/pi-bots/signal-sleeve && cd ~/pi-bots/signal-sleeve
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/signal-sleeve`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (7) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
