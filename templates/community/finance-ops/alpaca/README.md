# Alpaca

Paper-first Alpaca options + equity co-pilot: ladder risk, scheduled open/midday/close runs, and safety rails you keep on. Helps operate, debug, free buying power, and improve allocation without removing hard kill switches.

| | |
| --- | --- |
| Original template | https://x.ai/bot/O9GVEhA_dlBr1uxomyy8L |
| Creator | Pinecrest Capital, LLC ([@swartzendruber](https://x.com/swartzendruber)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/alpaca), [grokbotwiki.com](https://www.grokbotwiki.com/bots/alpaca), [grokbothq.xyz](https://grokbothq.xyz/bots/alpaca), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/alpaca), [x-research](https://x.com/swartzendruber/status/2100712796950352208) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 3 routines, 10 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/alpaca ~/pi-bots/alpaca && cd ~/pi-bots/alpaca
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/alpaca`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/dave-paper-open-report`: cron `35 9 * * 1-5` (found in the template text)
- `/dave-paper-midday-report`: cron `0 12 * * 1-5` (found in the template text)
- `/dave-paper-close-report`: cron `45 15 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
