# Text-cleanup

Rewrites messy text, notes or AI drafts into one clean email, message or post, ready to send. Works from what you paste, and never writes from scratch.

| | |
| --- | --- |
| Original template | https://x.ai/bot/E3h6k-Sbq7hwF3PW1ZBI4 |
| Creator | GrokBotGod God ([@GrokBotGod](https://x.com/GrokBotGod)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/text-cleanup), [grokbotwiki.com](https://www.grokbotwiki.com/bots/text-cleanup), [grokbothq.xyz](https://grokbothq.xyz/bots/text-cleanup), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/text-cleanup), [x-research](https://botsdots.site/templates/text-cleanup) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 3 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/text-cleanup ~/pi-bots/text-cleanup && cd ~/pi-bots/text-cleanup
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/text-cleanup`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
