# Alumni Coffee Chat Finder

Builds a CSV of university alumni for coffee chats (name, company, role, role description, email, and whether you've already emailed them) from LinkedIn and an alumni directory. For any school, and it only collects. It never sends email.

| | |
| --- | --- |
| Original template | https://x.ai/bot/j2bqDafGnyOv6bKMOOGOp |
| Creator | Fiona Whittington ([@fwhittington_24](https://x.com/fwhittington_24)) |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/alumni-coffee-chat-finder), [botsdots.site](https://botsdots.site/templates/alumni-coffee-chat-finder), [grokbotwiki.com](https://www.grokbotwiki.com/bots/alumni-coffee-chat-finder), [grokbothq.xyz](https://grokbothq.xyz/bots/alumni-coffee-chat-finder), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/alumni-coffee-chat-finder), [x-research](https://x.com/fwhittington_24/status/2098810809921003800) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/alumni-coffee-chat-finder ~/pi-bots/alumni-coffee-chat-finder && cd ~/pi-bots/alumni-coffee-chat-finder
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/alumni-coffee-chat-finder`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
