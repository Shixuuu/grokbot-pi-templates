# Money Finder

Finds money that's already yours: unclaimed property, refunds, legit settlements, forgotten subscriptions, bills you could lower, and benefits you already pay for. Works from your names and states or a pasted statement; Gmail is optional. Never files, cancels, or pays without your OK.

| | |
| --- | --- |
| Original template | https://x.ai/bot/HSkw45MjOQmesPwYsnK9P |
| Creator | Nate Odell ([@N8Odell](https://x.com/N8Odell)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/money-finder), [grokbotwiki.com](https://www.grokbotwiki.com/bots/money-finder), [grokbothq.xyz](https://grokbothq.xyz/bots/money-finder), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/money-finder) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 10 skills, 3 routines, 24 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/money-finder ~/pi-bots/money-finder && cd ~/pi-bots/money-finder
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/money-finder`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (24) | `MEMORY.md` |
| Skills (10) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-money-check`: cron `52 17 * * 0` (found in the template text)
- `/monthly-rescan`: cron `52 9 1 * *` (found in the template text)
- `/deadline-reminders`: cron `52 8 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).
- Routine `weekly-money-check` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/weekly-money-check.md` instead of inlining the text.
- Routine `monthly-rescan` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/monthly-rescan.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
