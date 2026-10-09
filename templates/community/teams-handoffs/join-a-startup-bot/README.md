# Join a Startup Bot

A bot for people who want to join breakout startups. 3–10 daily recommendations for you from under-the-radar sources and deeper help (outreach, watchlist) when you ask for it.

| | |
| --- | --- |
| Original template | https://x.ai/bot/XJCoBm6z7qjAnt9ScG8i7 |
| Creator | Ben Lang ([@deysourav7091](https://x.com/deysourav7091)) |
| Category | community / teams-handoffs |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/join-a-startup-bot), [botsdots.site](https://botsdots.site/templates/join-a-startup-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/join-a-startup-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/join-a-startup-bot), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/XJCoBm6z7qjAnt9ScG8i7), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/join-a-startup-bot), [x-research](https://x.com/deysourav7091/status/2095719866691133940) |
| Fidelity | **full** (full recipe, template version 21) |
| Contents | 3 skills, 2 routines, 17 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/join-a-startup-bot ~/pi-bots/join-a-startup-bot && cd ~/pi-bots/join-a-startup-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/join-a-startup-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (17) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-startup-shortlist`: cron `0 8 * * 1-5` (found in the template text)
- `/weekly-watchlist-nudge`: cron `0 10 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
