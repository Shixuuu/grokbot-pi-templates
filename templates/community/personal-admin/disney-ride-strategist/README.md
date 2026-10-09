# Disney Ride Strategist

A Walt Disney World wait-time strategist you configure for your trip. Asks for your park days, whether you have Early Entry, and your must-do rides, then quietly logs waits so you can ask anytime what to ride next.

| | |
| --- | --- |
| Original template | https://x.ai/bot/izE8-5f78ykATd43I5ROC |
| Creator | Matt Hopkins ([@matthopkins_](https://x.com/matthopkins_)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/disney-ride-strategist), [grokbotwiki.com](https://www.grokbotwiki.com/bots/disney-ride-strategist), [grokbothq.xyz](https://grokbothq.xyz/bots/disney-ride-strategist), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/disney-ride-strategist), [x-research](https://x.com/matthopkins_/status/2093442356313833740) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 0 skills, 2 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/disney-ride-strategist ~/pi-bots/disney-ride-strategist && cd ~/pi-bots/disney-ride-strategist
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/disney-ride-strategist`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/wdw-wait-times`: cron `*/5 7-8 * * *` (found in the template text)
- `/wdw-wait-times-daytime`: cron `58 9-21 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
