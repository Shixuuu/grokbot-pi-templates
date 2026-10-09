# Bet Tester

An unbiased judge for founders' product bets. It runs low-cost synthetic user research with independent, self-serving personas and returns ship, change, re-test or kill for one claim, plus the root causes of objections, and never proposes fixes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/FrhhLkFkrzOMPuph_mMBn |
| Creator | Ivelin Ivanov ([@ivelini](https://x.com/ivelini)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/bet-tester), [grokbotwiki.com](https://www.grokbotwiki.com/bots/bet-tester), [grokbothq.xyz](https://grokbothq.xyz/bots/bet-tester), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/bet-tester) |
| Fidelity | **full** (full recipe, template version 9) |
| Contents | 2 skills, 1 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/bet-tester ~/pi-bots/bet-tester && cd ~/pi-bots/bet-tester
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/bet-tester`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/monthly-method-research-refresh`: cron `9 9 8 * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Routine `monthly-method-research-refresh` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/monthly-method-research-refresh.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
