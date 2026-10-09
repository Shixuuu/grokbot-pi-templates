# PG Bot

One-job AE territory pipeline-generation coverage bot: book-level outreach, meetings, contact depth, Potential ARR, untouched high-potential contacts, and 30-day dark accounts for a named AE. Markdown in chat; confirm before Slack or email.

| | |
| --- | --- |
| Original template | https://x.ai/bot/zsxwic_IlmyavESnhLiWZ |
| Creator | Scott Metcalf ([@scottxmetcalf](https://x.com/scottxmetcalf)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/pg-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/pg-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/pg-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/scottxmetcalf/status/2095228592137638181) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 3 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/pg-bot ~/pi-bots/pg-bot && cd ~/pi-bots/pg-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/pg-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
