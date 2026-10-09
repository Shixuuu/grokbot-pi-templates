# Chief

A Chief of Staff that scans email and calendar on first install, then every weekday morning. Archives junk, drafts replies it never sends, and hands you a one-page brief of what matters and what you must decide.

| | |
| --- | --- |
| Original template | https://x.ai/bot/QIfSY8pPwjqBSIdal-5CI |
| Creator | SmoresBoy Jack ([@jxckvibe](https://x.com/jxckvibe)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/chief), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chief), [grokbothq.xyz](https://grokbothq.xyz/bots/chief-2), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/QIfSY8pPwjqBSIdal-5CI), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/chief), [x-research](https://x.com/Grok_Hub_IO/status/2093836040310292959) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 1 routines, 3 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/chief-qifsy8 ~/pi-bots/chief-qifsy8 && cd ~/pi-bots/chief-qifsy8
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/chief-qifsy8`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-cos-brief`: cron `50 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
