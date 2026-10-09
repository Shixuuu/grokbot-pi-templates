# Chief

Options second brain for cash-session premium sellers. Runs juice scans, hard outs before economic prints, keep-per-day math, and Plan A/B/C calls. Trader hits the broker — this bot never places trades.

| | |
| --- | --- |
| Original template | https://x.ai/bot/nHYn9Fkzgb4kdVxjffvlc |
| Creator | Eric McFarland ([@Ericmcfar](https://x.com/Ericmcfar)) |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/chief-nhyn), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chief-nhyn), [grokbothq.xyz](https://grokbothq.xyz/bots/chief-5), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/chief-nhyn) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 4 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/chief ~/pi-bots/chief && cd ~/pi-bots/chief
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/chief`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (4) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/friday-juice-scan`: cron `45 8 * * 5` (found in the template text)
- `/monday-close-check`: cron `45 8 * * 1` (found in the template text)
- `/tuesday-dip-watch`: cron `45 8 * * 2` (found in the template text)
- `/rkt-rates-weekly`: cron `30 8 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Routine `friday-juice-scan` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/friday-juice-scan.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
