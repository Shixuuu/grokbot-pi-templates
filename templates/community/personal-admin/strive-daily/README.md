# Strive Daily

Every weekday morning, a plain-English check on Strive: did every preferred dividend (SATA first) arrive, is any rate changing, how SATA compares to $100, plus ASST's price, mNAV, bitcoin buys and key dates, with a source on every number. Unofficial, facts only, not advice.

| | |
| --- | --- |
| Original template | https://x.ai/bot/uDOZ5nRFJFFOelPE9Alee |
| Creator | Tina Bean ([@Tina](https://x.com/Tina)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/strive-daily), [grokbotwiki.com](https://www.grokbotwiki.com/bots/strive-daily), [grokbothq.xyz](https://grokbothq.xyz/bots/strive-daily), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/strive-daily) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 6 skills, 2 routines, 5 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/strive-daily ~/pi-bots/strive-daily && cd ~/pi-bots/strive-daily
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/strive-daily`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/sata-daily`: cron `45 9 * * 1-5` (found in the template text)
- `/strive-early-alert`: cron `17 8-18 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).
- Routine `sata-daily` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/sata-daily.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
