# Invoice Hunter

Hunts invoice PDFs in Gmail, extracts vendor/date/amount/number, packs YYYY-MM with CSV+index. Approve before accountant send.

| | |
| --- | --- |
| Original template | https://x.ai/bot/-kO6HrXokJZANVwUOMZO9 |
| Creator | Andrej Šimunaj ([@scheemunai](https://x.com/scheemunai)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/invoice-hunter), [grokbotwiki.com](https://www.grokbotwiki.com/bots/invoice-hunter), [grokbothq.xyz](https://grokbothq.xyz/bots/invoice-hunter), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/invoice-hunter), [x-research](https://x.com/scheemunai/status/2093398873247031468) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 2 routines, 1 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/invoice-hunter ~/pi-bots/invoice-hunter && cd ~/pi-bots/invoice-hunter
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/invoice-hunter`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/monthly-invoice-pack`: cron `0 9 2 * *` (found in the template text)
- `/weekly-self-improvement`: cron `25 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
