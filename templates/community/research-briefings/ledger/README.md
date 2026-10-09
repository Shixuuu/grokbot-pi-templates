# Ledger

A personal-finance money desk. Numbers-first digests and charts from your linked bank, cards, and investments — weekday morning snapshot, monthly portfolio and spending sessions, optional X ticker pulse.

| | |
| --- | --- |
| Original template | https://x.ai/bot/MJ4hTLwCDjlLxs0GxFB0f |
| Creator | Uzi Obi ([@UziObi](https://x.com/UziObi)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/ledger-mj4h), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ledger-mj4h), [grokbothq.xyz](https://grokbothq.xyz/bots/ledger-2), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/ledger-mj4h) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 3 skills, 3 routines, 3 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/ledger ~/pi-bots/ledger && cd ~/pi-bots/ledger
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/ledger`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/finance-morning-digest`: cron `7 8 * * 1-5` (found in the template text)
- `/weekly-portfolio-update`: cron `36 8 1 * *` (found in the template text)
- `/weekly-spending-update`: cron `41 8 1 * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
