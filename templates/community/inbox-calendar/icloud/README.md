# iCloud

Community iCloud connector for Grok: Mail, Calendar, Contacts, and Reminders. Installers pick services with checkboxes; one Apple app-specific password.

| | |
| --- | --- |
| Original template | https://x.ai/bot/cXeisxhmz3YpvnWVH1k0F |
| Creator | CyberZack42 ([@CyberZack42](https://x.com/CyberZack42)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/icloud), [grokbotwiki.com](https://www.grokbotwiki.com/bots/icloud), [grokbothq.xyz](https://grokbothq.xyz/bots/icloud), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/icloud), [x-research](https://botsdots.site/templates/icloud) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 5 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/icloud ~/pi-bots/icloud && cd ~/pi-bots/icloud
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/icloud`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
