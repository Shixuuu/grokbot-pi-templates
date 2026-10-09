# X Brief

An end-of-day brief on what's moving in your corner of X, plus a playbook built from your own best posts: what works, fill-in-the-blank templates, and suggested next posts. For people who take posting seriously and want to put out content worth saving.

| | |
| --- | --- |
| Original template | https://x.ai/bot/GkX6X536UK2MlbkfGLQnb |
| Creator | Daniel McAteer ([@daniel_mac8](https://x.com/daniel_mac8)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/x-brief), [grokbotwiki.com](https://www.grokbotwiki.com/bots/x-brief), [grokbothq.xyz](https://grokbothq.xyz/bots/x-brief), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/GkX6X536UK2MlbkfGLQnb), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/x-brief), [x-research](https://x.com/daniel_mac8/status/2093401980987425103) |
| Fidelity | **full** (full recipe, template version 8) |
| Contents | 3 skills, 0 routines, 3 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/x-brief ~/pi-bots/x-brief && cd ~/pi-bots/x-brief
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/x-brief`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
