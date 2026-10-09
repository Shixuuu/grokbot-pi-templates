# Equity Floor

A multi-seat equity research desk: DM a ticker and analyst seats debate it in two rooms (fundamentals, technicals, flows, news, then bull vs bear and a trade plan) before one sourced, synthesized view lands in your DM. It never trades, never sizes your positions, and never invents a number; not investment advice.

| | |
| --- | --- |
| Original template | https://x.ai/bot/BrNtGdBpIkprn_Nr8Hy4f |
| Creator | Van Burce ([@foobar1664](https://x.com/foobar1664)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/equity-floor), [grokbotwiki.com](https://www.grokbotwiki.com/bots/equity-floor), [grokbothq.xyz](https://grokbothq.xyz/bots/equity-floor), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/equity-floor) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 3 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/equity-floor ~/pi-bots/equity-floor && cd ~/pi-bots/equity-floor
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/equity-floor`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
