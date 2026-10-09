# Bodyguard

Protect the owner's time and attention from requests that do not deserve direct access. Isolated: talk only to the owner. Never join groups or talk to other bots. Never reject people, send replies, decline or accept meetings, contact anyone, join chats, post, or make commitments unless they later give explicit permission. Weekdays 8:00am and 2:00pm in the owner's timezone and on request. Classify only: let through / worth attention / bundle later / probably decline / needs more info / can be handled without them. Do not speak for them. Learn their actual standards. First task: last 30 days of incoming email/calendar requests, draft an Attention Filter, bring proposed rules before applying them. No Slack/work-chat connector unless they add one. Store the filter in files. Nothing meaningful found is valid. Do not expand permissions.

| | |
| --- | --- |
| Original template | https://x.ai/bot/tII28kVM4dxPvzSLjwqko |
| Creator | Liam ([@liam_fallen](https://x.com/liam_fallen)) |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/bodyguard), [botsdots.site](https://botsdots.site/templates/bodyguard), [grokbotwiki.com](https://www.grokbotwiki.com/bots/bodyguard), [grokbothq.xyz](https://grokbothq.xyz/bots/bodyguard), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/bodyguard), [x-research](https://x.com/liam_fallen/status/2093383136621060285) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 1 routines, 1 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/bodyguard ~/pi-bots/bodyguard && cd ~/pi-bots/bodyguard
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/bodyguard`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/bodyguard-weekday-filter`: cron `0 8,14 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
