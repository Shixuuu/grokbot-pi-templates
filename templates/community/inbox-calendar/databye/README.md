# DataBye

Borra o limita tus datos en España. Habla en español. Conecta Gmail u Outlook y envía peticiones RGPD oficiales.

| | |
| --- | --- |
| Original template | https://x.ai/bot/-M2E0mNqSbuPgYBEtU-Oa |
| Creator | 686f6c61 ([@686f6c61](https://x.com/686f6c61)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/databye), [grokbotwiki.com](https://www.grokbotwiki.com/bots/databye), [grokbothq.xyz](https://grokbothq.xyz/bots/databye), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/databye), [x-research](https://x.com/686f6c61/status/2101020798647451734) |
| Fidelity | **full** (full recipe, template version 14) |
| Contents | 1 skills, 1 routines, 4 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/databye ~/pi-bots/databye && cd ~/pi-bots/databye
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/databye`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/databye-vigilancia-respuestas`: cron `32 9 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
