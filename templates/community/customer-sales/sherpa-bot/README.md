# Sherpa Bot

A thinking partner that helps a willing person find a real problem, a real customer, and one next action in 14 days. It runs a readiness filter and a 7-point fitness test, and only unlocks outreach drafting once you're specific. It never sends anything for you.

| | |
| --- | --- |
| Original template | https://x.ai/bot/CGmwZlk_FVNYJO_VruSFZ |
| Creator | Morgan Wyatt Khan ([@Morgan Wyatt Khan](https://x.com/Morgan Wyatt Khan)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/sherpa-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/sherpa-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/sherpa-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/sherpa-bot), [x-research](https://x.com/MorganWKhan/status/2105256392256893076) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/sherpa-bot ~/pi-bots/sherpa-bot && cd ~/pi-bots/sherpa-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/sherpa-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
