# Weekly P&L analyst

Weekly P&L covering revenue, retention, leakage and ad efficiency, with every adverse movement flagged and traced. Strictly read-only for business owners.

| | |
| --- | --- |
| Original template | https://x.ai/bot/M_4xLTMY06z1Zv1gvX_Nc |
| Creator | Colin McDermott ([@ColinMcDermott](https://x.com/ColinMcDermott)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/weekly-pl-analyst), [grokbotwiki.com](https://www.grokbotwiki.com/bots/weekly-p-l-analyst), [grokbothq.xyz](https://grokbothq.xyz/bots/weekly-p-l-analyst), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/weekly-p-l-analyst), [x-research](https://botsdots.site/templates/weekly-pl-analyst) |
| Fidelity | **full** (full recipe, template version 9) |
| Contents | 0 skills, 0 routines, 16 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/weekly-p-l-analyst ~/pi-bots/weekly-p-l-analyst && cd ~/pi-bots/weekly-p-l-analyst
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/weekly-p-l-analyst`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (16) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
