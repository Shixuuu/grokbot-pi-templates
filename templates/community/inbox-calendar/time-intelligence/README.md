# Time Intelligence

Time zones, clock changes, and meeting times, in plain language, using live lookups from findtime.io. Connecting is a Google sign-in. What time is it in London? What is the IANA timezone for Tokyo? If it is 9am in New York, what time is it in London? Does London observe daylight saving? When do clocks change in New York? What working hours overlap for New York and London? Working hours overlap for SF, Berlin, Tokyo What is a good meeting time for San Francisco and London? Best time for a call between NYC London Singapore Best meeting times between Tokyo, NY, Dubai Best time to meet between NYC and India What does CST mean? How many time zones does the United States have? What's 10am this Saturday in PT in Helsinki time? What time was 2pm yesterday in NY for someone in London? If it's 10pm Wednesday in Minneapolis, what time and day is it in Perth WA? These are just some examples. findtime.io can answer so much more. Experiment!

| | |
| --- | --- |
| Original template | https://x.ai/bot/GAeRrX2qS5pjHwImZx46e |
| Creator | hkchao ([@findtime_](https://x.com/findtime_)) |
| Category | community / inbox-calendar (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/time-intelligence), [grokbotwiki.com](https://www.grokbotwiki.com/bots/time-intelligence), [grokbothq.xyz](https://grokbothq.xyz/bots/time-intelligence), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/time-intelligence) |
| Fidelity | **full** (full recipe, template version 13) |
| Contents | 2 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/time-intelligence ~/pi-bots/time-intelligence && cd ~/pi-bots/time-intelligence
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/time-intelligence`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
