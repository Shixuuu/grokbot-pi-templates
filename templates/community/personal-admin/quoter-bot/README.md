# Quoter Bot

Keeps ScalePad Quoter as the product catalog master for MSPs: cleans Parents and Notes, maps categories to QuickBooks Online income/COGS, and rebuilds office-setup quotes without mutating catalog fields.

| | |
| --- | --- |
| Original template | https://x.ai/bot/i2nKg3-DdAGyjHh6zHhad |
| Creator | Sean Kubin ([@seankubin](https://x.com/seankubin)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/quoter-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/quoter-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/quoter-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/quoter-bot) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 3 skills, 0 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/quoter-bot ~/pi-bots/quoter-bot && cd ~/pi-bots/quoter-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/quoter-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
