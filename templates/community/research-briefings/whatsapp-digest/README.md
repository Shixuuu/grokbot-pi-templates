# WhatsApp Digest

A read-only WhatsApp assistant that scans your group chats and gives a short daily update of what actually matters. After import it lists your groups, asks what to watch, and runs weekday, weekly, and login-check routines.

| | |
| --- | --- |
| Original template | https://x.ai/bot/k8sSgsXHhRTEZi9Sqt_J- |
| Creator | Petrus Janse van Rensburg ([@PetrusJvR](https://x.com/PetrusJvR)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/whatsapp-digest), [botsdots.site](https://botsdots.site/templates/whatsapp-digest), [grokbotwiki.com](https://www.grokbotwiki.com/bots/whatsapp-digest), [grokbothq.xyz](https://grokbothq.xyz/bots/whatsapp-digest), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/whatsapp-digest), [x-research](https://x.com/PetrusJvR/status/2094114763982701049) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 2 skills, 1 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/whatsapp-digest ~/pi-bots/whatsapp-digest && cd ~/pi-bots/whatsapp-digest
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/whatsapp-digest`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/whatsapp-web-session-check`: cron `30 18 * * 0-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
