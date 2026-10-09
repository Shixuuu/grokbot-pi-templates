# Child Activity Desk

Watches which apps and videos your kids open and how often (YouTube, Family Link, Amazon Kids, Quest, consoles and more), compared with limits you set, and posts a short report in chat that leads with anything over a limit. It tracks usage only and never reads messages.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Dc0ZGUypwwBQZE9pNxLYy |
| Creator | Kevin Rank ([@Kevin Rank](https://x.com/Kevin Rank)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/family-safety-monitor), [grokbotwiki.com](https://www.grokbotwiki.com/bots/family-safety-monitor), [grokbothq.xyz](https://grokbothq.xyz/bots/family-safety-monitor), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/family-safety-monitor), [x-research](https://x.com/KevinTweets1/status/2099251469266608138) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 4 skills, 0 routines, 21 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/child-activity-desk ~/pi-bots/child-activity-desk && cd ~/pi-bots/child-activity-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/child-activity-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (21) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
