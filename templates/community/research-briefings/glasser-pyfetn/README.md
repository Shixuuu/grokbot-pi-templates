# Glasser

Gives your agent access to premium research data via Glasser.ai — company and people enrichment, SEO, ads, traffic, funding, competitor intel, and outbound contacts.

| | |
| --- | --- |
| Original template | https://x.ai/bot/pYFETnU1TFsADlz0hJD1y |
| Creator | iammutex ([@Glasserai](https://x.com/Glasserai)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/glasser), [grokbotwiki.com](https://www.grokbotwiki.com/bots/glasser), [grokbothq.xyz](https://grokbothq.xyz/bots/glasser), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/glasser), [x-research](https://botsdots.site/templates/glasser) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 11 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/glasser-pyfetn ~/pi-bots/glasser-pyfetn && cd ~/pi-bots/glasser-pyfetn
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/glasser-pyfetn`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (11) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
