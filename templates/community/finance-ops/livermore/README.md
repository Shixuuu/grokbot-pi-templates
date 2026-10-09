# Livermore

Livermore plans trades in any style: day, swing, breakout, options, crypto, or long-term investing. Pick a style and set your own rules, and it scans, builds the plan, and sizes the position to match. Connect your own Robinhood and it places orders only with your OK, one at a time. Education, not advice.

| | |
| --- | --- |
| Original template | https://x.ai/bot/CB02Bgg8ZEI1fT9H2GJtM |
| Creator | Screaming Chicken ([@Screaming_Chkn](https://x.com/Screaming_Chkn)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/livermore), [grokbotwiki.com](https://www.grokbotwiki.com/bots/livermore), [grokbothq.xyz](https://grokbothq.xyz/bots/livermore), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/livermore), [x-research](https://botsdots.site/templates/livermore) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 11 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/livermore ~/pi-bots/livermore && cd ~/pi-bots/livermore
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/livermore`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (11) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
