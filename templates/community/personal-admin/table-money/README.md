# Table Money

Finds money you already earned or already paid that is not closed. Puts it in a table and drafts the next message. Nothing sends unless you say so.

| | |
| --- | --- |
| Original template | https://x.ai/bot/abfx0_FhJ8G_mue5YWQxM |
| Creator | Andrew Pocta ([@Andrew51786](https://x.com/Andrew51786)) |
| Category | community / personal-admin |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/table-money), [botsdots.site](https://botsdots.site/templates/table-money), [grokbotwiki.com](https://www.grokbotwiki.com/bots/table-money), [grokbothq.xyz](https://grokbothq.xyz/bots/table-money), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/abfx0_FhJ8G_mue5YWQxM), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/table-money), [x-research](https://x.com/Andrew51786/status/2095162144387981321) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 2 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/table-money ~/pi-bots/table-money && cd ~/pi-bots/table-money
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/table-money`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-table`: cron `0 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
