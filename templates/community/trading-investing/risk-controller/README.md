# Risk Controller

A pre-live risk gate for traders and quant researchers. It reviews strategies and backtests for drawdown, leverage, tail risk, and backtest bias before anything goes live.

| | |
| --- | --- |
| Original template | https://x.ai/bot/eK9lF3ZkDKI6-4gqDoUfp |
| Creator | Avid ([@Av1dlive](https://x.com/Av1dlive)) |
| Category | community / trading-investing (trading, other-markets) (not on the x.ai marketplace) |
| Found via | [x-trading-research](https://x.com/Av1dlive/status/2107908213001896263) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/trading-investing/risk-controller ~/pi-bots/risk-controller && cd ~/pi-bots/risk-controller
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/trading-investing/risk-controller`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
