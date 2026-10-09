# Orchestrator

Runs a multi-bot workforce for a daily trading-day research brief: role cards, room handoffs, pipeline timeouts, usage-efficiency cuts, and a weekday end-of-day health review. For operators who want @Bot agents coordinated like a desk, not a pile of chats.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Ho_6yW-icLF6xWHnNVhNo |
| Creator | R O ([@keepclmcarryong](https://x.com/keepclmcarryong)) |
| Category | community / trading-investing (trading, stocks) (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/orchestrator), [grokbotwiki.com](https://www.grokbotwiki.com/bots/orchestrator), [grokbothq.xyz](https://grokbothq.xyz/bots/orchestrator-keepclmcarryong), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/orchestrator), [x-research](https://x.com/keepclmcarryong/status/2101887744880361700), [x-trading-research](https://x.com/keepclmcarryong/status/2101887744880361700) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 5 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/trading-investing/orchestrator ~/pi-bots/orchestrator && cd ~/pi-bots/orchestrator
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/trading-investing/orchestrator`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-workforce-eod-review`: cron `0 18 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
