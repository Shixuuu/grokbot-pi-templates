# Prospecting Sheet Builder

Builds overnight prospecting sheets with verified buyer contacts, account events, and email plus LinkedIn drafts in the seller's voice. For B2B sellers who want a live spreadsheet ready in the morning.

| | |
| --- | --- |
| Original template | https://x.ai/bot/3Peagz3nzagjBRFhjrENd |
| Creator | Sultanov Ramil ([@thekuchh](https://x.com/thekuchh)) |
| Category | community / customer-sales |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/prospecting-sheet-builder), [botsdots.site](https://botsdots.site/templates/prospecting-sheet-builder), [grokbotwiki.com](https://www.grokbotwiki.com/bots/prospecting-sheet-builder), [grokbothq.xyz](https://grokbothq.xyz/bots/prospecting-sheet-builder), [templatebot.lol](https://templatebot.lol/bot/3Peagz3nzagjBRFhjrENd), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/prospecting-sheet-builder), [x-research](https://x.com/thekuchh/status/2093742276564459867) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/prospecting-sheet-builder-3peagz ~/pi-bots/prospecting-sheet-builder-3peagz && cd ~/pi-bots/prospecting-sheet-builder-3peagz
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/prospecting-sheet-builder-3peagz`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
