# Ramp Bot

Keeps a Ramp company card unlocked by quietly filling missing receipts and memos. Good for anyone whose org auto-locks cards when compliance items lapse.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Gx0HlW1t8lTnW2pVn0nKF |
| Creator | Matthew Barge ([@matthewbarge](https://x.com/matthewbarge)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/ramp-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ramp-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/ramp-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/ramp-bot), [x-research](https://botsdots.site/templates/ramp-bot) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 1 routines, 3 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/ramp-bot ~/pi-bots/ramp-bot && cd ~/pi-bots/ramp-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/ramp-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-ramp-compliance-pass`: cron `0 9 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
