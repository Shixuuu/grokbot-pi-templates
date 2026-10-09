# Apple Desk

Mac-local Apple apps from Grok Bot: Reminders, Calendar, Notes, Contacts, Messages, and Shortcuts. Clones the public apple-desk repo, walks TCC onboard, and keeps outbound Messages behind an explicit yes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/vVST27b0qMvGLrEfxZ3nj |
| Creator | Phillip Holland ([@Phil_Holland](https://x.com/Phil_Holland)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/apple-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/apple-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/apple-desk), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/apple-desk), [x-research](https://x.com/Phil_Holland/status/2106508153869254916) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 2 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/apple-desk ~/pi-bots/apple-desk && cd ~/pi-bots/apple-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/apple-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
