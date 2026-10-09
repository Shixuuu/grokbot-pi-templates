# Ho Be Gone

Ho Be Gone (Hive Operators, Be Gone) checks your X followers and the accounts that interact with your posts, and automatically blocks scams, impersonators and spam bots. It works like a virus list: every account on its shared known bots list is blocked and reported the moment it touches you. One yes/no question to start; undo any block with "unblock @handle".

| | |
| --- | --- |
| Original template | https://x.ai/bot/zM69z4OgdFDSzWcFNsQqx |
| Creator | Jay GPE ([@TheRetardedELon](https://x.com/TheRetardedELon)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/ho-be-gone), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ho-be-gone), [grokbothq.xyz](https://grokbothq.xyz/bots/ho-be-gone), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/ho-be-gone), [x-research](https://x.com/TheRetardedELon/status/2104149765562957993) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 3 skills, 0 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/ho-be-gone ~/pi-bots/ho-be-gone && cd ~/pi-bots/ho-be-gone
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/ho-be-gone`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
