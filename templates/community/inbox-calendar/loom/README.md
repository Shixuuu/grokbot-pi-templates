# loom

Gathers context across related Gmail threads and drafts a reply. Never sends, deletes, archives, or trashes mail. Includes skills to host a webhook inbox UI and to build a custom Gmail thread UI after asking how you work.

| | |
| --- | --- |
| Original template | https://x.ai/bot/cElGnAaR55iPHK2DGdPdu |
| Creator | lauren 🎀 ([@poteto](https://x.com/poteto)) |
| Category | community / inbox-calendar (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/loom), [grokbotwiki.com](https://www.grokbotwiki.com/bots/loom), [grokbothq.xyz](https://grokbothq.xyz/bots/loom), [templatebot.lol](https://templatebot.lol/bot/cElGnAaR55iPHK2DGdPdu), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/loom), [x-research](https://botsdots.site/templates/loom) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 1 routines, 0 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/loom ~/pi-bots/loom && cd ~/pi-bots/loom
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/loom`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/email-inbox-wake`: no schedule in the template (set when enabled in Grok Bot)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
