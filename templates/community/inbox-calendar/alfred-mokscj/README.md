# Alfred

Cheeky British chief-of-staff bot that runs email/Drive/calendar ops, watches inboxes, builds daily briefings and recipe binders, and coordinates teammate bots. For executives who want action over chatter.

| | |
| --- | --- |
| Original template | https://x.ai/bot/moKscJ7PToJw_PVQWvkf_ |
| Creator | Michael Krantz ([@mmmllcadv3](https://x.com/mmmllcadv3)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/alfred-moks), [grokbotwiki.com](https://www.grokbotwiki.com/bots/alfred-moks), [grokbothq.xyz](https://grokbothq.xyz/bots/alfred-british-chief-of-staff), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/alfred), [x-research](https://x.com/mmmllcadv3/status/2101753040415969422) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 0 skills, 2 routines, 5 memory seeds, 4 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/alfred-mokscj ~/pi-bots/alfred-mokscj && cd ~/pi-bots/alfred-mokscj
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/alfred-mokscj`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (4) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/alfred-inbox-watch`: cron `*/30 8-21 * * *` (found in the template text)
- `/isf-litigation-dump-watch`: cron `*/15 17-23 * * 6,0` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
