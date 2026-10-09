# Returns & Warranties

Tracks meaningful purchases and alerts before return, refund, warranty, or guarantee deadlines expire. Pulls order confirmations from Gmail and Drive, looks up official warranty pages, and never starts a return unless asked.

| | |
| --- | --- |
| Original template | https://x.ai/bot/HmUpwJbVbgLEGisEj0FPt |
| Creator | Liam ([@liam_fallen](https://x.com/liam_fallen)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/returns-warranties), [grokbotwiki.com](https://www.grokbotwiki.com/bots/returns-warranties), [grokbothq.xyz](https://grokbothq.xyz/bots/returns-warranties), [templatebot.lol](https://templatebot.lol/bot/HmUpwJbVbgLEGisEj0FPt), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/returns-warranties), [x-research](https://botsdots.site/templates/returns-warranties) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 3 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/returns-warranties ~/pi-bots/returns-warranties && cd ~/pi-bots/returns-warranties
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/returns-warranties`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/returns-daily-deadlines`: cron `0 10 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
