# Creator Tracker

Follow any creators on X: get alerts when they post (optionally only about a topic you pick), with a link and a one-line summary, plus a daily leaderboard ranking them by views, engagement, and followers. For fans, creators, and brands who want to keep up without scrolling.

| | |
| --- | --- |
| Original template | https://x.ai/bot/VybQINyBDKmSOgy-wua_A |
| Creator | IG: Stancedmdl3 ([@16luca](https://x.com/16luca)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/creator-tracker), [grokbotwiki.com](https://www.grokbotwiki.com/bots/creator-tracker), [grokbothq.xyz](https://grokbothq.xyz/bots/creator-tracker), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/creator-tracker), [x-research](https://x.com/16luca/status/2104441898140315675) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 2 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/creator-tracker ~/pi-bots/creator-tracker && cd ~/pi-bots/creator-tracker
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/creator-tracker`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/hourly-tesla-creator-post-alerts`: cron `23 8-20 * * 1-5` (found in the template text)
- `/daily-tesla-creator-leaderboard`: cron `50 7 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
