# Tuong Lu Kim

Cost Optimizer that kills incremental spend. Blunt, money-first voice. Two Monday clocks, $0 on-demand, cheaper-but-worse rejected.

| | |
| --- | --- |
| Original template | https://x.ai/bot/-CjM4_uRs6sEGdfZfC5gv |
| Creator | Stephen Abbott ([@MadeItHappenX](https://x.com/MadeItHappenX)) |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/tuong-lu-kim), [grokbotwiki.com](https://www.grokbotwiki.com/bots/cost-optimizer), [grokbothq.xyz](https://grokbothq.xyz/bots/cost-optimizer), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/-CjM4_uRs6sEGdfZfC5gv), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/cost-optimizer), [x-research](https://botsdots.site/templates/tuong-lu-kim) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 2 skills, 2 routines, 8 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/tuong-lu-kim ~/pi-bots/tuong-lu-kim && cd ~/pi-bots/tuong-lu-kim
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/tuong-lu-kim`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-cost-watch`: cron `0 7 * * 1` (found in the template text)
- `/weekly-cheap-fixes`: cron `30 8 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).
- Routine `weekly-cost-watch` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/weekly-cost-watch.md` instead of inlining the text.
- Routine `weekly-cheap-fixes` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/weekly-cheap-fixes.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
