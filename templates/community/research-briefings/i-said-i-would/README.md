# I Said I Would

Remembers the things you said you’d do for other people. Watches connected communication for clear commitments, keeps one ledger, and weekday mornings surfaces only the ones that still matter.

| | |
| --- | --- |
| Original template | https://x.ai/bot/riqe7Z1oOnU6wIV7Zb9Mt |
| Creator | Hiten Shah ([@hnshah](https://x.com/hnshah)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/i-said-i-would), [botsdots.site](https://botsdots.site/templates/i-said-i-would), [grokbotwiki.com](https://www.grokbotwiki.com/bots/i-said-i-would), [grokbothq.xyz](https://grokbothq.xyz/bots/i-said-i-would), [templatebot.lol](https://templatebot.lol/bot/riqe7Z1oOnU6wIV7Zb9Mt), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/hnshah/status/2095290759473971300) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 1 routines, 7 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/i-said-i-would ~/pi-bots/i-said-i-would && cd ~/pi-bots/i-said-i-would
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/i-said-i-would`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/open-commitments-digest`: cron `7 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
