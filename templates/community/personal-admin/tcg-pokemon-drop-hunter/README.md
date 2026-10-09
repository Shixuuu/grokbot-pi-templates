# TCG Pokemon Drop Hunter

Watches Pokemon TCG drops, restocks, and hype across X, retailer sites, and news, then ranks what is worth flipping or holding sealed. Collects hunting prefs into SQLite and returns a reviewable digest. Recommend-only: never buys, never posts on X, never contacts sellers, and enrolls alerts only when you explicitly ask.

| | |
| --- | --- |
| Original template | https://x.ai/bot/sCXEBqZKI2vTbe4ZZ0117 |
| Creator | Tyler Jewell ([@tech_swindler](https://x.com/tech_swindler)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/tcg-pokemon-drop-hunter), [grokbotwiki.com](https://www.grokbotwiki.com/bots/tcg-pokemon-drop-hunter), [grokbothq.xyz](https://grokbothq.xyz/bots/tcg-pokemon-drop-hunter), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/tcg-pokemon-drop-hunter) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 8 skills, 1 routines, 5 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/tcg-pokemon-drop-hunter ~/pi-bots/tcg-pokemon-drop-hunter && cd ~/pi-bots/tcg-pokemon-drop-hunter
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/tcg-pokemon-drop-hunter`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (8) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/tcg-morning-delta-digest`: cron `1 6 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).
- Routine `tcg-morning-delta-digest` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/tcg-morning-delta-digest.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
