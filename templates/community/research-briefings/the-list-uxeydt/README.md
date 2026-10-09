# The List

The List is the GrokBotGod in-bot newsletter. Install once; get three-line drops in this chat when new bots or directory picks land. No email. No yes/no.

| | |
| --- | --- |
| Original template | https://x.ai/bot/U-eydTXJP7aN4W9dcUL5k |
| Creator | GrokBotGod God ([@GrokBotGod](https://x.com/GrokBotGod)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/the-list), [grokbotwiki.com](https://www.grokbotwiki.com/bots/the-list), [grokbothq.xyz](https://grokbothq.xyz/bots/the-list), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/the-list), [x-research](https://botsdots.site/templates/the-list) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/the-list-uxeydt ~/pi-bots/the-list-uxeydt && cd ~/pi-bots/the-list-uxeydt
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/the-list-uxeydt`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
