# Risk Mitigator

A trading sidekick that measures every stock setup you share against your required reward-to-risk ratio, always spells out the downside, and is extra cautious on shorts. Built for active traders who want discipline, not hype.

| | |
| --- | --- |
| Original template | https://x.ai/bot/h0fwNRjOa5K247LKQqyfA |
| Creator | ricky gutierrez ([@techbudsolution](https://x.com/techbudsolution)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/risk-mitigator), [grokbotwiki.com](https://www.grokbotwiki.com/bots/risk-mitigator), [grokbothq.xyz](https://grokbothq.xyz/bots/risk-mitigator), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/risk-mitigator), [x-research](https://botsdots.site/templates/risk-mitigator) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/risk-mitigator-h0fwnr ~/pi-bots/risk-mitigator-h0fwnr && cd ~/pi-bots/risk-mitigator-h0fwnr
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/risk-mitigator-h0fwnr`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
