# Love ❤️

Takes the admin out of being a good Partner so the attention can go where it counts. Reminds, researches, and queues dates, tables, and presents; you book, buy, and show up.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Xg8tws0lVEouCHOVMcnLg |
| Creator | Danny Buck ([@dannybuck](https://x.com/dannybuck)) |
| Category | community / inbox-calendar (not on the x.ai marketplace) |
| Found via | [grokbotwiki.com](https://www.grokbotwiki.com/bots/love), [grokbothq.xyz](https://grokbothq.xyz/bots/love), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/Xg8tws0lVEouCHOVMcnLg), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/love), [x-research](https://x.com/dannybuck/status/2104541204645896574) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 3 routines, 2 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/love ~/pi-bots/love && cd ~/pi-bots/love
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/love`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/monday-date-check`: cron `0 8 * * 1` (found in the template text)
- `/wednesday-question`: cron `0 18 * * 3` (found in the template text)
- `/monthly-small-gift`: cron `0 8 1 * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
