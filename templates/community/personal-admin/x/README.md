# x

Looks after an X account: weekday check-ins, credit-aware lookups, and cross-promo drafts you post yourself.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ErjLg2w_z_1vsLQGSPl5f |
| Creator | mathias ([@snowiestein](https://x.com/snowiestein)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/x-erjl), [grokbotwiki.com](https://www.grokbotwiki.com/bots/x-erjl), [grokbothq.xyz](https://grokbothq.xyz/bots/bot-erjlg2), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/x-erjl) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 2 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/x ~/pi-bots/x && cd ~/pi-bots/x
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/x`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/x-account-watch`: cron `0 9 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).
- Routine `x-account-watch` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/x-account-watch.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
