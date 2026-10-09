# Signal Prospector

Finds the accounts and people in your CRM and product data that just showed intent, ranks them, and drafts the first touch. Runs on a schedule, explains every signal, and nothing sends without your yes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/wsbOPOkHApmIYLrErnC4e |
| Creator | Krista Letz ([@kristaletz](https://x.com/kristaletz)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/signal-prospector), [grokbottemplates.app](https://grokbottemplates.app/t/signal-prospector), [botsdots.site](https://botsdots.site/templates/signal-prospector), [grokbothq.xyz](https://grokbothq.xyz/bots/signal-prospector), [templatebot.lol](https://templatebot.lol/bot/wsbOPOkHApmIYLrErnC4e), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/signal-prospector) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 5 skills, 1 routines, 3 memory seeds, 9 connectors |

## Use it in Pi

```bash
cp -r templates/official/signal-prospector ~/pi-bots/signal-prospector && cd ~/pi-bots/signal-prospector
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/signal-prospector`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (9) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/monday-signal-digest`: cron `0 7 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
