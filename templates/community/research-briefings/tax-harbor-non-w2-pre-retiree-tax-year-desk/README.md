# Tax Harbor — Non-W2 / pre-retiree tax-year desk

Weekly discussion brief for households without a W-2, ages ~55–80. Not a preparer. Never files, never pays, never converts, never trades.

| | |
| --- | --- |
| Original template | https://x.ai/bot/KxgpoMk2AH230cNwYUCcU |
| Creator | R. Garrick ([@R. Garrick](https://x.com/R. Garrick)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/tax-harbor-non-w2-pre-retiree-tax-year-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/tax-harbor), [grokbothq.xyz](https://grokbothq.xyz/bots/tax-harbor-non-w2-pre-retiree-tax-year-desk), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/tax-harbor-non-w2-pre-retiree-tax-year-desk), [x-research](https://x.com/RGarrick2/status/2101129085149696420) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 2 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/tax-harbor-non-w2-pre-retiree-tax-year-desk ~/pi-bots/tax-harbor-non-w2-pre-retiree-tax-year-desk && cd ~/pi-bots/tax-harbor-non-w2-pre-retiree-tax-year-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/tax-harbor-non-w2-pre-retiree-tax-year-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-tax-harbor-brief`: cron `0 18 * * 1` (found in the template text)
- `/semi-annual-rmd-impact-review`: cron `0 10 31 1 *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Routine `weekly-tax-harbor-brief` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/weekly-tax-harbor-brief.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
