# Hold My Stock

Pick one company. Write three rules. Buy when your trigger fires. Hold. Hold My Stock is a habit coach, not a trading desk. It helps you pick one company you care about, write three rules (ticker, trigger, stake), and log each play in chat so buying becomes a ritual instead of a research project. It works if you have never bought a share, already sit in a managed account, or trade now and then and want a calmer way to hold. It is not financial advice and it will not day-trade for you. The chart is weather. The habit is the house.

| | |
| --- | --- |
| Original template | https://x.ai/bot/rpqMXPRdUiyk6Dc1LF3U9 |
| Creator | Juliette Cove ([@JulietteCove](https://x.com/JulietteCove)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/hold-my-stock), [grokbotwiki.com](https://www.grokbotwiki.com/bots/hold-my-stock), [grokbothq.xyz](https://grokbothq.xyz/bots/hold-my-stock), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/hold-my-stock) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/hold-my-stock ~/pi-bots/hold-my-stock && cd ~/pi-bots/hold-my-stock
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/hold-my-stock`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
