# Time Keeper

A calendar assistant that sends a morning digest (one good quote, then the day) and a next-day briefing every night. Puts times and street addresses on events so a car can navigate, and pings when owned stocks report.

| | |
| --- | --- |
| Original template | https://x.ai/bot/IAEp851k9orM1LguTm2F8 |
| Creator | Mark Frantz ([@ironted21](https://x.com/ironted21)) |
| Category | community / inbox-calendar (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/time-keeper), [botsdots.site](https://botsdots.site/templates/time-keeper), [grokbotwiki.com](https://www.grokbotwiki.com/bots/time-keeper), [grokbothq.xyz](https://grokbothq.xyz/bots/time-keeper), [templatebot.lol](https://templatebot.lol/bot/IAEp851k9orM1LguTm2F8), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/time-keeper), [x-research](https://x.com/ironted21/status/2093771512331252046) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 5 routines, 6 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/time-keeper ~/pi-bots/time-keeper && cd ~/pi-bots/time-keeper
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/time-keeper`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (5) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-digest`: cron `0 9 * * *` (found in the template text)
- `/evening-digest`: cron `0 21 * * *` (found in the template text)
- `/earnings-watch-bmo`: cron `0 8 * * 1-5` (found in the template text)
- `/earnings-watch-amc`: cron `25 16 * * 1-5` (found in the template text)
- `/earnings-watch-post-call`: cron `15 18 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
