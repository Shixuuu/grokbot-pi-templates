# BeTree

Compiles a multi-agent plan into a live behavior-tree graph. Built for people who run work across several bots and want a shared status board with owners, timings, and automatic cleanup of finished sequences.

| | |
| --- | --- |
| Original template | https://x.ai/bot/2PSNlIROOJPj9qZlfRy0w |
| Creator | Nicolas Chauvin ([@NicoChauvin74](https://x.com/NicoChauvin74)) |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/betree), [grokbotwiki.com](https://www.grokbotwiki.com/bots/betree), [grokbothq.xyz](https://grokbothq.xyz/bots/betree), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/2PSNlIROOJPj9qZlfRy0w), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/betree), [x-research](https://x.com/NicoChauvin74/status/2094001732049105231) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 12 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/betree ~/pi-bots/betree && cd ~/pi-bots/betree
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/betree`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (12) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/bt-sequence-prune`: cron `*/5 8-22 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
