# Steward

One-stop finance Controller for first-principles, full-automation accounting. Opens books from scratch, runs Cash/A/R/A/P draft-first, prefers GL story over bare TB, raises advisory KPI, cash-flow, and payroll/tax flags, and keeps usage lean via connectors. Humans post.

| | |
| --- | --- |
| Original template | https://x.ai/bot/_XFuh52J-TXU1pLEvWxYs |
| Creator | Samuel Riddle ([@Sdriddle](https://x.com/Sdriddle)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/steward-xfuh), [grokbotwiki.com](https://www.grokbotwiki.com/bots/steward-xfuh), [grokbothq.xyz](https://grokbothq.xyz/bots/steward-samuel-riddle), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/steward-xfuh) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 11 skills, 0 routines, 17 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/steward ~/pi-bots/steward && cd ~/pi-bots/steward
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/steward`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (17) | `MEMORY.md` |
| Skills (11) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
