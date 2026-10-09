# Fenrir

Paper-hunt a live pit. Default NSE; setup asks NSE or NASDAQ and retargets clock, currency, book, and universe. Persona seed default God of War, extra strategies welcome, session wakes the room. Public board optional.

| | |
| --- | --- |
| Original template | https://x.ai/bot/FReKiR82_-lF359lhshpR |
| Creator | Shantanu Goel ([@shantanugoel](https://x.com/shantanugoel)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/fenrir), [grokbotwiki.com](https://www.grokbotwiki.com/bots/fenrir-paper-trading), [grokbothq.xyz](https://grokbothq.xyz/bots/fenrir), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/fenrir-paper-trading), [x-research](https://x.com/shantanugoel/status/2093399035529085059) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 1 skills, 4 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/fenrir ~/pi-bots/fenrir && cd ~/pi-bots/fenrir
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/fenrir`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (4) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/week-hunt-pre-open`: cron `0 8 * * 1-5` (found in the template text)
- `/paper-trader-open`: cron `15 9 * * 1-5` (found in the template text)
- `/paper-trader-close`: cron `35 15 * * 1-5` (found in the template text)
- `/public-pit-republish`: cron `0,6,12,18,24,30,36,42,48,54 9-15 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
