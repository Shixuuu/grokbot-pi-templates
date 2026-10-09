# Chiefton

Your bot fleet chief. Sets a monthly money target, checks progress on a weekday schedule, nudges stalled money-making bots with one concrete next step, and talks with light humor and sass.

| | |
| --- | --- |
| Original template | https://x.ai/bot/RUZPHfbb43AbXnYcU_-RR |
| Creator | Corey Sullivan ([@theSulSul](https://x.com/theSulSul)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/chiefton), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chiefton), [grokbothq.xyz](https://grokbothq.xyz/bots/chiefton), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/chiefton) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 7 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/chiefton ~/pi-bots/chiefton && cd ~/pi-bots/chiefton
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/chiefton`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/200-month-bot-scoreboard`: cron `4 9 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).
- Routine `200-month-bot-scoreboard` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/200-month-bot-scoreboard.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
