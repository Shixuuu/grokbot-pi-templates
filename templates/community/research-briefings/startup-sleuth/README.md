# Startup Sleuth

Sources unusual early-stage startups for angel investors — under $1M raised, strong teams, select geos — and emails a twice-weekly shortlist table.

| | |
| --- | --- |
| Original template | https://x.ai/bot/DlhUriPFrGv6jTJ_H3RJx |
| Creator | Francis Santora 🎌 ([@FrancisPSantora](https://x.com/FrancisPSantora)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/startup-sleuth), [grokbotwiki.com](https://www.grokbotwiki.com/bots/startup-sleuth), [grokbothq.xyz](https://grokbothq.xyz/bots/startup-sleuth), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/startup-sleuth) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 6 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/startup-sleuth ~/pi-bots/startup-sleuth && cd ~/pi-bots/startup-sleuth
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/startup-sleuth`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/angel-startup-digest`: cron `0 8 * * 1,3` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).
- Routine `angel-startup-digest` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/angel-startup-digest.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
