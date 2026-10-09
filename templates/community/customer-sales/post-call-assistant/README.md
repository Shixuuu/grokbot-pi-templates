# Post Call Assistant

Never miss a follow-up. After a meeting, drops your todos and a draft. Never sends. On first run it asks which notes, email, calendar, and links to use.

| | |
| --- | --- |
| Original template | https://x.ai/bot/xF12c5y4LVe7nf7IFguWI |
| Creator | Priya Patel ([@itspriyaptl](https://x.com/itspriyaptl)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/post-call-assistant), [grokbotwiki.com](https://www.grokbotwiki.com/bots/post-call-assistant), [grokbothq.xyz](https://grokbothq.xyz/bots/post-call-assistant), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/xF12c5y4LVe7nf7IFguWI), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/post-call-assistant), [x-research](https://x.com/itspriyaptl/status/2093389586864988661) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/post-call-assistant ~/pi-bots/post-call-assistant && cd ~/pi-bots/post-call-assistant
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/post-call-assistant`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
