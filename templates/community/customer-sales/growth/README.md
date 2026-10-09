# Growth

Job-hunt ops for designers: track roles in Airtable, Monday pipeline pulse, evidence pack before Apply, you confirm every write. No browser auto-apply. Quiet-search safe.

| | |
| --- | --- |
| Original template | https://x.ai/bot/yDxUZegF6GnO_Kym-qewf |
| Creator | Steven Villarino ([@stevenvillarino](https://x.com/stevenvillarino)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/growth), [grokbotwiki.com](https://www.grokbotwiki.com/bots/growth), [grokbothq.xyz](https://grokbothq.xyz/bots/growth), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/growth), [x-research](https://x.com/stevenvillarino/status/2104712906025882077) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 7 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/growth ~/pi-bots/growth && cd ~/pi-bots/growth
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/growth`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
