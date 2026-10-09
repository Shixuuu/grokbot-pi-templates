# Tax Firm OS

Assistant for a tax or accounting office. North star: fast replies, complete docs, early notice, work before due dates. One bot for the whole office. Email: read + suggested replies, never send. You stay in charge of sending, signing, and filing.

| | |
| --- | --- |
| Original template | https://x.ai/bot/vJqjJphtZRkdBTYBxmWur |
| Creator | Amervim Bonano ([@Amervim](https://x.com/Amervim)) |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/tax-firm-os), [grokbotwiki.com](https://www.grokbotwiki.com/bots/tax-firm-os), [grokbothq.xyz](https://grokbothq.xyz/bots/tax-firm-os), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/tax-firm-os), [x-research](https://x.com/Amervim/status/2105949306025128186) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 6 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/tax-firm-os ~/pi-bots/tax-firm-os && cd ~/pi-bots/tax-firm-os
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/tax-firm-os`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
