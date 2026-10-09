# Cursor

Slack coding + ops teammate for a WhatsApp logistics SaaS: partners type a summon phrase, it launches Cloud Agents on your subscription, keeps thread context, and replies with PRs and guarded prod answers.

| | |
| --- | --- |
| Original template | https://x.ai/bot/zSKgg4Uce1QTwWRf9Q-vu |
| Creator | Daniel Medina ([@DanielMed_2](https://x.com/DanielMed_2)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/cursor), [grokbotwiki.com](https://www.grokbotwiki.com/bots/cursor), [grokbothq.xyz](https://grokbothq.xyz/bots/cursor), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/cursor) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 6 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/cursor ~/pi-bots/cursor && cd ~/pi-bots/cursor
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/cursor`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
