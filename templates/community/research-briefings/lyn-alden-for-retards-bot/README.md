# Lyn Alden For Retards Bot

Plain-English explainer for Lyn Alden’s macro, markets, and Bitcoin writing. Paste a link, screenshot, or quote and get a clear breakdown — optional draft reply you can paste yourself.

| | |
| --- | --- |
| Original template | https://x.ai/bot/HU8kdK5ustStqJMLKsOfY |
| Creator | Chad Shipp ([@ShippMedia](https://x.com/ShippMedia)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/lyn-alden-for-retards-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/lyn-alden-for-retards-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/lyn-alden-for-retards-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/ShippMedia/status/2101083162214621499) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 5 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/lyn-alden-for-retards-bot ~/pi-bots/lyn-alden-for-retards-bot && cd ~/pi-bots/lyn-alden-for-retards-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/lyn-alden-for-retards-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
