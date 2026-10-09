# Token Cop

Spend management across all your agents — token usage, optimization suggestions, and spend alerts.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Ml4ynlD6O1VT5CoYmFnEa |
| Creator | Scott Metcalf ([@scottxmetcalf](https://x.com/scottxmetcalf)) |
| Category | community / personal-admin |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/token-cop), [botsdots.site](https://botsdots.site/templates/token-cop), [grokbotwiki.com](https://www.grokbotwiki.com/bots/token-cop), [grokbothq.xyz](https://grokbothq.xyz/bots/token-cop-ml4ynl), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/Ml4ynlD6O1VT5CoYmFnEa), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/scottxmetcalf/status/2095540032207741431) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 0 skills, 2 routines, 7 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/token-cop ~/pi-bots/token-cop && cd ~/pi-bots/token-cop
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/token-cop`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-spend-digest`: cron `0 9 * * *` (found in the template text)
- `/spend-spike-watch`: cron `0 13 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).
- Routine `daily-spend-digest` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/daily-spend-digest.md` instead of inlining the text.
- Routine `spend-spike-watch` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/spend-spike-watch.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
