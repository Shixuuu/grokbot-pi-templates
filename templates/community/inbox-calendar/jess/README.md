# Jess

A weekday executive assistant that recaps email, calendar, Notion, and Slack; answers staff questions from a written playbook; and posts client call summaries without being asked.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Nmv2fCQEcQc3EHzVXJZKN |
| Creator | Logan Robison ([@LoganARobison](https://x.com/LoganARobison)) |
| Category | community / inbox-calendar (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/jess), [grokbotwiki.com](https://www.grokbotwiki.com/bots/jess-executive-assistant), [grokbothq.xyz](https://grokbothq.xyz/bots/jess-executive-assistant), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/Nmv2fCQEcQc3EHzVXJZKN), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/jess-executive-assistant), [x-research](https://x.com/LoganARobison/status/2093380304891167113) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 4 routines, 8 memory seeds, 4 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/jess ~/pi-bots/jess && cd ~/pi-bots/jess
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/jess`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (4) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (4) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-recap`: cron `0 6 * * 1-5` (found in the template text)
- `/afternoon-recap`: cron `0 16 * * 1-5` (found in the template text)
- `/ask-jess-slack`: no cron in the template; described as "Playbook (search these first, every time):"
- `/quo-call-summaries`: cron `0 10,13,16 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
