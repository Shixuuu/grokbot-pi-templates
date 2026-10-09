# Whop Economic Intelligence

Runs Whop Economic Intelligence for your business: shows the single best next action with evidence, executes it when you approve, then checks the ledger so the next recommendation gets smarter. Works alone or hands off to your other Grok Bot specialists.

| | |
| --- | --- |
| Original template | https://x.ai/bot/M2ZLrLAUFFU0fFf6Aq28c |
| Creator | Colin McDermott ([@ColinMcDermott](https://x.com/ColinMcDermott)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/whop-economic-intelligence), [grokbotwiki.com](https://www.grokbotwiki.com/bots/whop-economic-intelligence), [grokbothq.xyz](https://grokbothq.xyz/bots/whop-economic-intelligence), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/whop-economic-intelligence), [x-research](https://x.com/ColinMcDermott/status/2105401794675216752) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 0 routines, 9 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/whop-economic-intelligence-m2zlrl ~/pi-bots/whop-economic-intelligence-m2zlrl && cd ~/pi-bots/whop-economic-intelligence-m2zlrl
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/whop-economic-intelligence-m2zlrl`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
