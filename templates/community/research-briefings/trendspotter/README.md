# Trendspotter

A trend scout for field and event marketers. It scans sports, entertainment, culture, and AI-in-marketing news every weekday and turns it into a short digest with event ideas and targeting angles.

| | |
| --- | --- |
| Original template | https://x.ai/bot/nnDL-hclNLB8SkJvcVtwr |
| Creator | Jenna Nanpei ([@jennananpei](https://x.com/jennananpei)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/trendspotter), [grokbotwiki.com](https://www.grokbotwiki.com/bots/trendspotter), [grokbothq.xyz](https://grokbothq.xyz/bots/trendspotter), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/nnDL-hclNLB8SkJvcVtwr), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/trendspotter) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 0 routines, 13 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/trendspotter ~/pi-bots/trendspotter && cd ~/pi-bots/trendspotter
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/trendspotter`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (13) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
