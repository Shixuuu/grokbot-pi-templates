# Portfolio Adviser

A personal investment assistant that tracks markets and news for the stocks and assets you own, reviews your holdings, and helps you think through rebalancing and new positions.

| | |
| --- | --- |
| Original template | https://x.ai/bot/FRPgDTB8gD_iSm6aWIp_Z |
| Creator | Avid ([@Av1dlive](https://x.com/Av1dlive)) |
| Category | community / trading-investing (trading, portfolio) (not on the x.ai marketplace) |
| Found via | [x-trading-research](https://x.com/Av1dlive/status/2107908213001896263) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/trading-investing/portfolio-adviser ~/pi-bots/portfolio-adviser && cd ~/pi-bots/portfolio-adviser
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/trading-investing/portfolio-adviser`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
