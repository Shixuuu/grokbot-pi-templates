# X High Coach

X content coach for any public username. Live per-user scoreboard from public data, health flags as public-signal estimates, net follower-count watch (no unfollower names), rewrites, one-week plan, Posting Style School drills, and Google Search Profile claim checklists (you click; the bot never signs into Google). Needs your X plugin for live metrics. Can't see X's private enforcement data.

| | |
| --- | --- |
| Original template | https://x.ai/bot/xSfBSprfKv5h909uzrv7W |
| Creator | High Tv ([@Hightv](https://x.com/Hightv)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/x-high-coach), [grokbotwiki.com](https://www.grokbotwiki.com/bots/x-high-coach), [grokbothq.xyz](https://grokbothq.xyz/bots/x-high-coach), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/xSfBSprfKv5h909uzrv7W), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/x-high-coach), [x-research](https://botsdots.site/templates/x-high-coach) |
| Fidelity | **full** (full recipe, template version 11) |
| Contents | 5 skills, 0 routines, 6 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/x-high-coach-xsfbsp ~/pi-bots/x-high-coach-xsfbsp && cd ~/pi-bots/x-high-coach-xsfbsp
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/x-high-coach-xsfbsp`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
