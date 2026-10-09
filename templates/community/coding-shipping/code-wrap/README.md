# Code Wrap

Helps wrap and connect code across languages (pybind11/JNI, hot-path rewrites, APIs/protobuf, strangler migrations) instead of big-bang translating whole repos.

| | |
| --- | --- |
| Original template | https://x.ai/bot/InLF1LwxW0DYkB4sMICGL |
| Creator | Dominic Bryant ([@Dominicyoungix](https://x.com/Dominicyoungix)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/code-wrap), [grokbotwiki.com](https://www.grokbotwiki.com/bots/code-wrap), [grokbothq.xyz](https://grokbothq.xyz/bots/code-wrap), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/Dominicyoungix/status/2101101407894122793) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/code-wrap ~/pi-bots/code-wrap && cd ~/pi-bots/code-wrap
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/code-wrap`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
