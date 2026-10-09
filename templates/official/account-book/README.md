# Account Research Desk

Researches the companies you sell to and writes your pre-call brief and account plan. Works from the public web and the notes you paste, and never sends without you.

| | |
| --- | --- |
| Original template | https://x.ai/bot/O3iqVd_ZrdRtrDJpxcKss |
| Creator | Anoop Baliga ([@akbaliga96](https://x.com/akbaliga96)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/account-book), [grokbottemplates.app](https://grokbottemplates.app/t/account-research-desk), [botsdots.site](https://botsdots.site/templates/account-research-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/account-research-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/account-research-desk), [templatebot.lol](https://templatebot.lol/bot/O3iqVd_ZrdRtrDJpxcKss), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/account-research-desk) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 11 skills, 3 routines, 5 memory seeds, 11 connectors |

## Use it in Pi

```bash
cp -r templates/official/account-book ~/pi-bots/account-book && cd ~/pi-bots/account-book
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/account-book`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (11) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (11) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-account-signals`: no cron in the template; described as "Every Monday morning, checks your accounts for public news, funding, leadership, and hiring signals, and reports only what matters to the deal."
- `/weekday-call-prep`: no cron in the template; described as "Every weekday morning, a short prep on the external calls that day with what changed, who is on them, and what is still open."
- `/friday-open-threads-review`: no cron in the template; described as "Every Friday morning, the open threads and next steps across your accounts, with what has gone stale and what closed this week."

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
