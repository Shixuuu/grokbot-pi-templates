# Tee Timey

DIY tee-time sniping bot. Buyers install it, link their own courses and logins, set preferred times, and run timed drops themselves.

| | |
| --- | --- |
| Original template | https://x.ai/bot/W1w9HsbZ8HaOOxAOMYTA5 |
| Creator | AD ([@TeeTimeybot](https://x.com/TeeTimeybot)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/tee-timey), [grokbotwiki.com](https://www.grokbotwiki.com/bots/tee-timey), [grokbothq.xyz](https://grokbothq.xyz/bots/tee-timey), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/tee-timey), [x-research](https://x.com/TeeTimeybot/status/2100602703999041966) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 2 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/tee-timey ~/pi-bots/tee-timey && cd ~/pi-bots/tee-timey
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/tee-timey`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/saturday-tee-time-drop`: cron `40 18 * * 6` (found in the template text)
- `/saturday-tee-time-safety-net`: cron `0 19 * * 6` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
