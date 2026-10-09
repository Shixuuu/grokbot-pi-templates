# Receipt Scanner / Expense Tracking

Logs emailed receipts into a Google Sheet and Drive folder. For anyone who wants a dedicated inbox that turns forwarded merchant emails and receipt photos into a line-item expense ledger.

| | |
| --- | --- |
| Original template | https://x.ai/bot/qod4crnqbldimm5wfyvqp |
| Creator | Lime Unfiltered |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/receipt-scanner-expense-tracking-qod4), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/receipt-scanner-expense-tracking-qod4) |
| Fidelity | **full** (full recipe, template version 12) |
| Contents | 0 skills, 1 routines, 8 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/receipt-scanner-expense-tracking ~/pi-bots/receipt-scanner-expense-tracking && cd ~/pi-bots/receipt-scanner-expense-tracking
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/receipt-scanner-expense-tracking`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-receipt-inbox`: cron `1 0 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
