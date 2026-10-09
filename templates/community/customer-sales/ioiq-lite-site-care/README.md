# IOIQ Lite · Site Care

Lightweight keyless site care for small business sites. Checks Speed hints, Findability, Conversion, and Trust with a fixed RAG scorecard and top 5 fixes — no API keys, no ranking warranty.

| | |
| --- | --- |
| Original template | https://x.ai/bot/nGlUg9-CHIYUocr8NUC8m |
| Creator | Sam Morgan ([@sam_builds_ai](https://x.com/sam_builds_ai)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/ioiq-lite-site-care), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ioiq-lite), [grokbothq.xyz](https://grokbothq.xyz/bots/ioiq-lite-site-care), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/ioiq-lite-site-care) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/ioiq-lite-site-care ~/pi-bots/ioiq-lite-site-care && cd ~/pi-bots/ioiq-lite-site-care
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/ioiq-lite-site-care`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
