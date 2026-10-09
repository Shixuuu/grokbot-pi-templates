# Options Desk

Options research desk for short put credit spreads on liquid tech and sector ETFs — morning candidate scans, earnings/IV filters, and roll watches. Research only; does not place trades.

| | |
| --- | --- |
| Original template | https://x.ai/bot/a10zTknoDfcxpxN9XhSmy |
| Creator | Ben ([@Ben_310](https://x.com/Ben_310)) |
| Category | community / trading-investing (trading, options) (not on the x.ai marketplace) |
| Found via | [x-trading-research](https://x.com/Ben_310/status/2107521807976902949) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 1 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/trading-investing/options-desk ~/pi-bots/options-desk && cd ~/pi-bots/options-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/trading-investing/options-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-morning-put-spread-top-5`: cron `30 7 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Routine `weekday-morning-put-spread-top-5` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/weekday-morning-put-spread-top-5.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
