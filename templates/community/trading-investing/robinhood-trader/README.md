# Robinhood Trader

Hunts high-beta tech moves in a Robinhood Agentic cash account; 10% stop / 15% take-profit playbooks; always previews and waits for confirmation before placing.

| | |
| --- | --- |
| Original template | https://x.ai/bot/xPH7Wtomq5RqzPaCc_H6f |
| Creator | Marc Berg ([@mdbergmd](https://x.com/mdbergmd)) |
| Category | community / trading-investing (trading, stocks) (not on the x.ai marketplace) |
| Found via | [x-trading-research](https://x.com/mdbergmd/status/2100063540329730406) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 0 routines, 11 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/trading-investing/robinhood-trader ~/pi-bots/robinhood-trader && cd ~/pi-bots/robinhood-trader
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/trading-investing/robinhood-trader`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
