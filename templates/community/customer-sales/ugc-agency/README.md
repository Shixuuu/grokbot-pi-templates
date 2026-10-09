# UGC Agency

Your UGC agency in one chat. Routes brand hunting, Meta-safe scripts, ad compliance, shoot calendars, and edit packs across specialist seats — then brings you one ready-to-film result.

| | |
| --- | --- |
| Original template | https://x.ai/bot/q2cwfiBm4Va7lV0NZdxzu |
| Creator | Greg Rainbolt |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/ugc-agency), [grokbothq.xyz](https://grokbothq.xyz/bots/ugc-agency), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/ugc-agency) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 27 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/ugc-agency ~/pi-bots/ugc-agency && cd ~/pi-bots/ugc-agency
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/ugc-agency`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (27) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
