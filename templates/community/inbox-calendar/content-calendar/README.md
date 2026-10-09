# Content Calendar

Owns the cross-channel posting calendar only — slots, multi-day arcs, conflicts, and 1 post per day per channel in the owner’s timezone. Substantive desks draft; the hub green-lights. Never writes post copy or publishes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/B_WCQAMMbhkNU2r3r4YNO |
| Creator | ladybarrelmaker ([@ladybarrelmaker](https://x.com/ladybarrelmaker)) |
| Category | community / inbox-calendar (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/content-calendar), [botsdots.site](https://botsdots.site/templates/content-calendar), [grokbotwiki.com](https://www.grokbotwiki.com/bots/content-calendar), [grokbothq.xyz](https://grokbothq.xyz/bots/content-calendar), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/content-calendar), [x-research](https://x.com/ladybarrelmaker/status/2102764678791495692) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 1 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/content-calendar ~/pi-bots/content-calendar && cd ~/pi-bots/content-calendar
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/content-calendar`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/monday-content-calendar-rollup`: cron `15 18 * * 0` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
