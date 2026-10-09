# Compression Scanner Grok bot

Finds stocks, ETFs and crypto coiling in tight compression patterns and draws one clean two-sided chart per setup, with long and short entries and targets on real swing levels. A setup counts only on a candle close through an entry. Charts and captions only, not financial advice.

| | |
| --- | --- |
| Original template | https://x.ai/bot/l4hipk4BQ-0Kn3ua16zQB |
| Creator | Right Wing Inkorporated ([@rightwingink1](https://x.com/rightwingink1)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/compression-scanner-grok-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/compression-scanner), [grokbothq.xyz](https://grokbothq.xyz/bots/compression-scanner), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/compression-scanner-grok-bot), [x-research](https://x.com/rightwingink1/status/2104357611974099221) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/compression-scanner-grok-bot ~/pi-bots/compression-scanner-grok-bot && cd ~/pi-bots/compression-scanner-grok-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/compression-scanner-grok-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
