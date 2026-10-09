# X Financial Scanner

Read-only X markets desk: scans official and economic accounts plus hot-stock sentiment, then tells you what is new, why it matters, and which tickers are in play. Stays quiet when nothing material moved.

| | |
| --- | --- |
| Original template | https://x.ai/bot/e3jmMweGAwbD4JlUCzHXy |
| Creator | Dennis W ([@DennisW_15](https://x.com/DennisW_15)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/x-financial-scanner), [grokbotwiki.com](https://www.grokbotwiki.com/bots/x-financial-scanner), [grokbothq.xyz](https://grokbothq.xyz/bots/x-financial-scanner), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/x-financial-scanner) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/x-financial-scanner ~/pi-bots/x-financial-scanner && cd ~/pi-bots/x-financial-scanner
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/x-financial-scanner`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
