# Inbot

Inbox-zero receive bot. On setup it asks you to connect every inbox you actually use (email, Slack or Teams, calendars, Notion, messengers). Then it sweeps those sources on a schedule, harvests what is a to-do versus not, and keeps a processed ledger so nothing falls through.

| | |
| --- | --- |
| Original template | https://x.ai/bot/yH2UttxbMwMugweZrigHT |
| Creator | Matthew Silberman ([@matt_silberman](https://x.com/matt_silberman)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/inbot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/inbot), [grokbothq.xyz](https://grokbothq.xyz/bots/inbot), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/yH2UttxbMwMugweZrigHT), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/inbot), [x-research](https://x.com/matt_silberman/status/2093378871403933751) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 3 skills, 2 routines, 21 memory seeds, 4 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/inbot ~/pi-bots/inbot && cd ~/pi-bots/inbot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/inbot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (21) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (4) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/receive-sweep`: cron `*/15 * * * *` (found in the template text)
- `/pre-digest-receive-gather`: cron `50 6-20 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
