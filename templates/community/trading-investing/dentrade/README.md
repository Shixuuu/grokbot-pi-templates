# DenTrade

Unattended aggressive day-trading desk for a Robinhood agentic account. Catalyst-driven same-day bias with hard risk caps, PDT-aware stops, and quiet wakes when the book is flat.

| | |
| --- | --- |
| Original template | https://x.ai/bot/XayB4rqAREYwJcPmKwtSP |
| Creator | althetime ([@madmenai](https://x.com/madmenai)) |
| Category | community / trading-investing (trading, stocks) (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/dentrade), [botsdots.site](https://botsdots.site/templates/dentrade), [grokbotwiki.com](https://www.grokbotwiki.com/bots/dentrade), [grokbothq.xyz](https://grokbothq.xyz/bots/dentrade), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/madmenai/status/2098599085531861103), [x-trading-research](https://x.com/madmenai/status/2098599085531861103) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 2 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/trading-investing/dentrade ~/pi-bots/dentrade && cd ~/pi-bots/dentrade
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/trading-investing/dentrade`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/desk-cycle`: cron `0 8-10,12,14-16,18 * * 1-5` (found in the template text)
- `/weekly-self-improve`: cron `45 8 * * 2` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Routine `desk-cycle` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/desk-cycle.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
