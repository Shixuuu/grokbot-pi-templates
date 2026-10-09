# slack radar

A read-only Slack signal agent. Watches for your @mentions and high-signal keyword traffic on topics you choose, filters aggressively, and pings you only with actionable alerts in chat. Never posts in Slack.

| | |
| --- | --- |
| Original template | https://x.ai/bot/m4WfJ0ODD0O1runkfq0Ak |
| Creator | Parker Smith ([@parkersmith](https://x.com/parkersmith)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/slack-radar), [grokbotwiki.com](https://www.grokbotwiki.com/bots/slack-radar), [grokbothq.xyz](https://grokbothq.xyz/bots/slack-radar), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/slack-radar), [x-research](https://x.com/parkersmith/status/2097827032646529500) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 0 skills, 0 routines, 13 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/slack-radar ~/pi-bots/slack-radar && cd ~/pi-bots/slack-radar
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/slack-radar`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (13) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
